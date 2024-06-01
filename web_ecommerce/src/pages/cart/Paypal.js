import {
    PayPalScriptProvider,
    PayPalButtons, 
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { addOrder } from "./CartApi";
import { useNavigate } from "react-router-dom";

const style = { "layout": "vertical" };
// component con
const ButtonWrapper = ({ currency, showSpinner, amount, payload }) => {
    const [{ isPending, options }, dispatch] = usePayPalScriptReducer(); // quản lý trạng thái và update option khi currency change
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options, currency: currency,
            }
        });
    }, [currency, showSpinner]);

    // hanle add order
    const handleSaveOrder = async () => {
        try {
            console.log('Payload being sent:', payload);
            const response = await addOrder(payload);
            console.log(response);
            navigate("/");
        } catch (error) {
            console.error('Error saving order:', error);
        }
    }
    // hàm phê duyệt thanh toán
    const handleOnApprove = (data, actions) => {
        actions.order.capture().then(async (response) => {
            if (response.status === 'COMPLETED') {
                const { userId, address, userName, firstName, lastName, email, phone, orderItemDto, listIdCart, totalPrice } = payload;
                console.log(userId, address, userName, firstName, lastName, email, phone, orderItemDto, listIdCart, totalPrice);
                // Gọi hàm để lưu đơn hàng
                await handleSaveOrder();
            }
        })
    }
    return (
        <>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style, currency, amount]}
                fundingSource={undefined}
                createOrder={(data, actions) => actions.order.create({
                    purchase_units: [
                        { amount: { currency_code: currency, value: amount } }
                    ],
                }).then(orderId => orderId)}
                onApprove={handleOnApprove}
            />
        </>
    );
}

// component cha, nhận payload từ component checkout
export default function Paypal({ amount, payload }) {
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ clientId: "Aa4lmbbxY_18hZ2WgglVD_-RUVZBdFsWdoZAw0mfEKob8JCgIq7gV27lV9FOlsNbgDgivbE_sejG6oiP", components: "buttons", currency: "USD" }}>
                <ButtonWrapper payload={payload} currency={'USD'} amount={amount} showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    );
}
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOrder, getListCart } from '../cart/CartApi';
import Paypal from '../cart/Paypal';

const Checkout = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
    });
    const [listProduct, setListProduct] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [paymentMethod, setPaymentMethod] = useState('paypal');

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState((pre) => ({ 
             ...pre,
             [name]: value
         }));
    }

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();
       
            // Kiểm tra xem tất cả các trường đã được nhập hay chưa
            if (state.address && state.userName && state.firstName && state.lastName && state.email && state.phone) {
                try {
                    const searchObj = {
                        userId: currentUser?.id,
                        address: state?.address,
                        userName: state?.userName,
                        firstName: state?.firstName,
                        lastName: state?.lastName,
                        phone: state?.phone,
                        email: state?.email,
                        orderItemDto: listProduct?.map(i => ({
                            productId: i?.productDTO?.id,
                            price: i?.productDTO?.price,
                            quantity: i?.quantity
                        })),
                        listIdCart: listProduct?.map(i => i?.cartId),
                        totalPrice: listProduct?.reduce((sum, i) => (i?.productDTO?.price * i?.quantity) + sum, 0),
                        totalDiscount: 0,
                        paymentMethod,
                        createdAt: convertToMidnight(new Date()),
                        deliveredCarrierAt: convertToMidnight(new Date()),
                        deliveredCustomerAt: convertToMidnight(new Date()),
                        approvedAt: convertToMidnight(new Date()),
                        status: paymentMethod === 'shipcod' ? 'Chưa thanh toán' : 'Đã thanh toán',
                    }
                    console.log("Payload before sending:", searchObj);
                        await addOrder(searchObj);
                        console.log(searchObj);
                        window.location.href = "/history"
                    
                } catch (error) {
                    console.log(error);
                }
            } else {
                // Hiển thị thông báo yêu cầu nhập đầy đủ thông tin
                alert('Vui lòng nhập đầy đủ thông tin thanh toán');
            }   
    }
    

    const getAllProduct = async () => {
        try {
            const data = await getListCart(currentUser?.id);
            setListProduct(data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, []);
    return (
        <div className='container'>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row" style={{ marginLeft: "-1180px", marginBottom: "-40px" }}>
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li>Đơn hàng</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout_page_bg">
                <div className="container">
                    <div className="Checkout_section">
                        <div className="checkout_form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="checkout_form_left">
                                        <form onSubmit={handleFormSubmit} >
                                            <h3>Thông tin thanh toán</h3>
                                            <div className="row">
                                                <div className="col-lg-6 mb-20">
                                                    <label> Họ <span>*</span></label>
                                                    <input type="text" id="lastName" name="lastName" required value={state?.lastName} onChange={handleChange} />
                                                </div>
                                                <div className="col-lg-6 mb-20">
                                                    <label>Tên <span>*</span></label>
                                                    <input type="text" id="firstName" name="firstName" required value={state?.firstName} onChange={handleChange} />
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <label style={{ display: 'flex' }}>Họ và tên  <span>*</span></label>
                                                    <input type="text" id="userName" name="userName" required value={state?.userName} onChange={handleChange} />
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <label style={{ display: 'flex' }}>Email <span>*</span></label>
                                                    <input type="text" id="email" name="email" required value={state?.email} onChange={handleChange} />
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <label style={{ display: 'flex' }}>Số điện thoại <span>*</span></label>
                                                    <input type="text" id="phone" name="phone" required value={state?.phone} onChange={handleChange} />
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <label style={{ display: 'flex' }}>Địa chỉ <span>*</span></label>
                                                    <input type="text" id="address" name="address" required value={state?.address} onChange={handleChange} />
                                                </div>
                                            </div>
                                            {paymentMethod === 'shipcod' && (
                                                <button type="submit" className='button1' onClick={handleFormSubmit}>Mua hàng</button>
                                            )}
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="checkout_form_right">
                                        <form  >
                                            <h3>Đơn hàng của bạn</h3>
                                            <div className="order_table table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Sản phẩm</th>
                                                            <th>Tổng tiền</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {listProduct.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item?.productDTO?.title}</td>
                                                                <td>{item?.productDTO?.price}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="order_total">
                                                            <th>Tổng tiền thanh toán:</th>
                                                            <td><strong>{listProduct?.reduce((sum, i) => (i?.productDTO?.price * i?.quantity) + sum, 0)}</strong></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className='payment'>
                                                <h3>Phương thức thanh toán</h3>
                                                <div className="panel-default" style={{ display: 'flex' }}>
                                                    <input id="payment_cod" name="payment_method" type="radio" value="shipcod" checked={paymentMethod === 'shipcod'} onChange={handlePaymentChange} />
                                                    <label htmlFor="payment_cod">Thanh toán khi nhận hàng</label>
                                                </div>
                                                <div className="panel-default" style={{ display: 'flex' }}>
                                                    <input id="payment_paypal" name="payment_method" type="radio" value="paypal" checked={paymentMethod === 'paypal'} onChange={handlePaymentChange} />
                                                    <label htmlFor="payment_paypal">Thanh toán bằng Paypal <img src="assets/img/icon/papyel.png" alt="" /></label>
                                                </div>
                                            </div>
                                            {paymentMethod === 'paypal' && 
                                            (             
                                                                 
                                                <Paypal                                              
                                                    payload={{
                                                        userId: currentUser?.id,
                                                        address: state?.address,
                                                        userName: state?.userName,
                                                        firstName: state?.firstName,
                                                        lastName: state?.lastName,
                                                        phone: state?.phone,
                                                        email: state?.email,
                                                        orderItemDto: listProduct?.map(i => ({
                                                            productId: i?.productDTO?.id,
                                                            price: i?.productDTO?.price,
                                                            quantity: i?.quantity
                                                        })),
                                                        listIdCart: listProduct?.map(i => i?.cartId),
                                                        totalPrice: Math.round(listProduct?.reduce((sum, i) => (i?.productDTO?.price * i?.quantity) + sum, 0) / 24000),
                                                        status: paymentMethod === 'shipcod' ? 'Chưa thanh toán' : paymentMethod === 'paypal' ? 'Đã thanh toán' : 'Chưa thanh toán'

                                                    }}
                                                    amount={Math.round(listProduct?.reduce((sum, i) => (i?.productDTO?.price * i?.quantity) + sum, 0) / 24000)}
                                                />
                                            
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;

function convertToMidnight(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    dateTime.setHours(0);
    dateTime.setMinutes(0);
    dateTime.setSeconds(0);
    const year = dateTime.getFullYear();
    const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
    const day = ('0' + dateTime.getDate()).slice(-2);
    const newDateTimeString = `${year}-${month}-${day}T00:00:00`;
    return newDateTimeString;
}


import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import { delCart, getListCart, updateQuanlityOrder } from './CartApi';
const Cart = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // để lấy thông tin user từ localstorage
    const [stateValue, setStateValue] = useState({}); // lưu trữ thông tin về ds sp trong cart
    const navigate = useNavigate();

    // gửi yêu cầu đến api để lấy ra ds sp trong cart
    const search = async () => {
        try {
            const data = await getListCart(currentUser?.id);
            setStateValue((pre) => ({
                ...pre,
                listData: data?.data?.map(item => ({
                    ...item.productDTO,
                    cartId: item.cartId,
                    quantity: item.quantity
                }))
            }));
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    }
    // hàm delete
    const handleDelete = async (value) => {
        try {
            const data = await delCart(value?.cartId);
            window.location.reload()
        } catch (error) {

        }
    }
    // hàm payment
    const handlePayment = () => {
        if (!currentUser) {
            navigate("/login")
        } else {
            navigate("/checkout")
        }
    }

    // hàm update quantity
    const handleUpdateQiantity = async (itemEdit) => {
        try {
            let searchObj = {
                userId: currentUser?.id,
                productId: itemEdit?.id
            }
            let formData = new FormData();
            formData.append("newQuantity", itemEdit?.quantity)
            const data = await updateQuanlityOrder(searchObj, formData);

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    // hàm khi user change quantity 
    const handleChangeQuantity = (rowData, value) => {
        const newList = stateValue.listData?.map(i => {
            return {
                ...i,
                quantity: i?.cartId === rowData?.cartId ? value : i.quantity
            }
        })
        let itemEdit = newList.find(i => i?.cartId === rowData?.cartId);
        handleUpdateQiantity(itemEdit)
        setStateValue((pre) => ({ ...pre, listData: newList }))
    }

    // hàm tính total price
    const countTotalPrice = (list = []) => {
        return list?.reduce((sum, i) => (i?.price * i?.quantity) + sum, 0)
    }

    // hàm tính price
    const countTotalPrice1 = (item) => {
        return item?.price * item?.quantity;
    }
    // hàm render ra UI  
    useEffect(() => {
        search();
        window.scrollTo(0, 0)
    }, [])
    {
        return (
            <div>
                <div className="breadcrumbs_area" >
                    <div className="container">
                        <div className="row" style={{ marginLeft: "-1205px", marginBottom: "-30px" }}>
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <ul >
                                        <li><a href="/">Trang chủ</a></li>
                                        <li>Giỏ hàng</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart_page_bg">
                        <div className="container">
                            <div className="shopping_cart_area" >
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table_desc">
                                                <div className="cart_page table-responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th className="product_remove">Xoá</th>
                                                                <th className="product_thumb">Hình ảnh</th>
                                                                <th className="product_name">Sản phẩm</th>
                                                                <th className="product-price">Giá</th>
                                                                <th className="product_quantity">Số lượng</th>
                                                                <th className="product_total">Tổng tiền</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {stateValue?.listData?.map((i, x) => (
                                                                <tr key={x}>
                                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o" onClick={() => handleDelete(i)} ></i></a></td>
                                                                    <td className="product_thumb"><a href="#">
                                                                        <img src={`http://localhost:8080/upload/${i?.galleries[0]?.imagePath}`} className="img-sm" alt={i?.title} />
                                                                    </a>
                                                                    </td>
                                                                    <td className="product_name"><a href="#">{i?.title}</a></td>
                                                                    <td className="product-price">{i?.price}</td>
                                                                    <td className="product_quantity"><label>Quantity</label> <input min="1" max="5" value={i?.quantity} type="number" onChange={(e) => handleChangeQuantity(i, e.target.value)} /></td>
                                                                    <td className="product_total">{countTotalPrice1(i)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="coupon_area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="coupon_code left">
                                                    <h3>Phiếu mua hàng</h3>
                                                    <div className="coupon_inner">
                                                        <p>Nhập mã phiếu giảm giá của bạn nếu bạn có.</p>
                                                        <input placeholder="Coupon code" type="text" />
                                                        <button type="submit">Apply coupon</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="coupon_code right">
                                                    <h3>TỔNG GIỎ HÀNG</h3>
                                                    <div className="coupon_inner">
                                                        <div className="cart_subtotal">
                                                            <p>Tổng tiền:</p>
                                                            <p className="cart_amount">{countTotalPrice(stateValue?.listData)}</p>
                                                        </div>
                                                        <div className="cart_subtotal ">
                                                            <p>Vận chuyển</p>
                                                            <p className="cart_amount"><span></span> 0đ</p>
                                                        </div>
                                                        <div className="cart_subtotal">
                                                            <p>Tổng cộng:</p>
                                                            <p className="cart_amount">{countTotalPrice(stateValue?.listData)}</p>
                                                        </div>
                                                        {stateValue?.listData?.length > 0 &&
                                                            <div className="checkout_btn" onClick={handlePayment}>
                                                                <a href="#">Mua hàng</a>
                                                            </div>
                                                        }
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
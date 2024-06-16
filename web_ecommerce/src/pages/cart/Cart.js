
import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import { getListCart, updateQuanlityOrder } from './CartApi';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
const Cart = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // để lấy thông tin user từ localstorage
    const [stateValue, setStateValue] = useState({ listData: [] });// lưu trữ thông tin về ds sp trong cart
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // gửi yêu cầu đến api để lấy ra ds sp trong cart
    const fetchCartItems = async () => {
        try {
            const data = await getListCart(currentUser?.id);
            setStateValue((pre) => ({
                ...pre,
                listData: data?.data?.map(item => ({
                    ...item.productDTO,
                    cartId: item.cartId,
                    quantity: item.quantity,
                    color: item.color,
                    size: item.size,
                }))
            }));
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    }
    // hàm delete
    const handleDelete = (itemToDelete) => {
        try {
            const updatedListData = stateValue.listData.filter(item => item.cartId !== itemToDelete.cartId);
            setStateValue((prev) => ({
                ...prev,
                listData: updatedListData
            }));
            dispatch(removeFromCart(itemToDelete.cartId));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    }
    // hàm payment
    const handlePayment = () => {
        if (!currentUser) {
            navigate("/login");
        } else {
            const itemsToPurchase = stateValue.listData.filter(item => selectedItems.includes(item.cartId));
            if (itemsToPurchase.length > 0) {
                localStorage.setItem("selectedItems", JSON.stringify(itemsToPurchase));
                navigate("/checkout", { state: { items: itemsToPurchase } });
            } else {
                alert("Vui lòng chọn ít nhất một sản phẩm để mua.");
            }
        }
    }

    // hàm update quantity
    const handleUpdateQuantity = async (itemToUpdate, newQuantity) => {
        try {
            const searchObj = {
                userId: currentUser?.id,
                productId: itemToUpdate?.id
            };
            const formData = new FormData();
            formData.append("newQuantity", newQuantity);

            const response = await updateQuanlityOrder(searchObj, formData);
            console.log("Update quantity response:", response);

            const updatedListData = stateValue.listData.map(item =>
                item.cartId === itemToUpdate.cartId ? { ...item, quantity: newQuantity } : item
            );
            setStateValue((prev) => ({
                ...prev,
                listData: updatedListData
            }));
        } catch (error) {
            console.error("Error updating quantity:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
            }
        }
    }

    // hàm khi user change quantity 
    const handleChangeQuantity = async (rowData, value) => {
        try {
            const newList = stateValue.listData.map(item =>
                item.cartId === rowData.cartId ? { ...item, quantity: value } : item
            );
            const updatedItem = newList.find(item => item.cartId === rowData.cartId);
            await handleUpdateQuantity(updatedItem, value);
            setStateValue(prev => ({
                ...prev,
                listData: newList
            }));
        } catch (error) {
            console.error("Error handling quantity change:", error);
        }
    }


    // handle click item product
    const handleSelectItem = (cartId) => {
        if (selectedItems.includes(cartId)) // check cartId đã có chưa
        {
            setSelectedItems(selectedItems.filter(id => id !== cartId));
        } else {
            setSelectedItems([...selectedItems, cartId]);
        }
    }

    // hàm tính total price
    const countTotalPrice = (list = []) => {
        const selectedProducts = list.filter(item => selectedItems.includes(item.cartId));
        return selectedProducts.reduce((sum, i) => (i?.price * i?.quantity) + sum, 0);
    }

    // hàm tính price
    const countPrice = (item) => {
        return item?.price * item?.quantity;
    }
    // hàm render ra UI  
    useEffect(() => {
        fetchCartItems();
        window.scrollTo(0, 0)
    }, [currentUser?.id])
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
                                                                <th className="product_click">Chọn sản phẩm</th>
                                                                <th className="product_remove">Xoá</th>
                                                                <th className="product_thumb">Hình ảnh</th>
                                                                <th className="product_name">Sản phẩm</th>
                                                                <th className="product_color">màu</th>
                                                                <th className="product_color">Kích thước</th>
                                                                <th className="product-price">Giá</th>
                                                                <th className="product_quantity">Số lượng</th>
                                                                <th className="product_total">Tổng tiền</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {stateValue?.listData?.map((i, x) => (
                                                                <tr key={x}>
                                                                    <td className="product_select">
                                                                        <input type="checkbox" checked={selectedItems.includes(i.cartId)} onChange={() => handleSelectItem(i.cartId)} />
                                                                    </td>
                                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o" onClick={() => handleDelete(i)} ></i></a></td>
                                                                    <td className="product_thumb"><a href={`/detailproduct?productId=${i.id}`}>
                                                                        <img src={`http://localhost:8080/upload/${i?.galleries[0]?.imagePath}`} className="img-sm" alt={i?.title} />
                                                                    </a>
                                                                    </td>
                                                                    <td className="product_name"><a href={`/detailproduct?productId=${i.id}`}>{i?.title}</a></td>
                                                                    <td className="product_color"><a href="#">{i?.color?.name}</a></td>
                                                                    <td className="product_size"><a href="#">{i?.size?.name}</a></td>
                                                                    <td className="product-price">{i?.price.toLocaleString()}</td>
                                                                    <td className="product_quantity"> <input min="1" max="10" value={i?.quantity} type="number" onChange={(e) => handleChangeQuantity(i, e.target.value)} /></td>
                                                                    <td className="product_total">{countPrice(i).toLocaleString()}</td>
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
                                                            <p className="cart_amount">{countTotalPrice(stateValue?.listData).toLocaleString()}đ</p>
                                                        </div>
                                                        <div className="cart_subtotal ">
                                                            <p>Vận chuyển</p>
                                                            <p className="cart_amount"><span></span>0đ</p>
                                                        </div>
                                                        <div className="cart_subtotal">
                                                            <p>Tổng cộng:</p>
                                                            <p className="cart_amount">{countTotalPrice(stateValue?.listData).toLocaleString()}đ</p>
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
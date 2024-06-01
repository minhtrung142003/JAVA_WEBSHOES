import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import { addOrder, getListCart } from '../cart/CartApi';

const Payment = () => {

  const navigate = useNavigate();
  const [state, setState] = useState({});
  const [listProduct, setListProduct] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
    try {
      const searchObj = {
        userId: currentUser?.id,
        address: state?.address,
        userName: state?.userName,
        phone: state?.phone,
        email: state?.email,
        orderItemDto: listProduct?.map(i => ({    // thay đổi chỗ này
          productId: i?.productDTO?.id,
          price: i?.productDTO?.price,
          quantity: i?.quantity
        })),
        listIdCart: listProduct?.map(i => i?.cartId),
        totalPrice: listProduct?.reduce((sum, i) => (i?.productDTO?.price * i?.quantity) + sum, 0), //thay đổi chỗ này
        totalDiscount: 0,
        createdAt: convertToMidnight(new Date()),
        deliveredCarrierAt: convertToMidnight(new Date()),
        deliveredCustomerAt: convertToMidnight(new Date()),
        approvedAt: convertToMidnight(new Date()),
      }
      const data = await addOrder(searchObj);
      if (data?.status === 200) {
        console.log(data)
        navigate("/")
      }

    } catch (error) {
      console.log(error)
    }
  }
  // hàm change input
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((pre) => ({ ...pre, [name]: value }))

  }

  // hàm get all product
  const getAllProduct = async () => {
    try {
      const data = await getListCart(currentUser?.id);

      setListProduct(data?.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getAllProduct();
  }, [])

  return (
    <div className="payment-form">
      <h2>Thông tin thanh toán</h2>
      <form>
        {/* <div className="form-group">
          <label htmlFor="lastName">Họ:</label>
          <input type="text" id="lastName" name="lastName" required value={state?.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Tên:</label>
          <input type="text" id="userName" name="userName" required value={state?.userName} onChange={handleChange} />
        </div> */}

        <div className="form-group">
          <label htmlFor="userName">Họ và tên:</label>
          <input type="text" id="userName" name="userName" required value={state?.userName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại:</label>
          <input type="tel" id="phone" name="phone" required value={state?.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={state?.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ:</label>
          <input id="address" name="address" required value={state?.address} onChange={handleChange}></input>
        </div>
        <button type="submit" className='button1' onClick={handleFormSubmit}>Mua hàng</button>

       
      </form>
    </div>
  );
}

export default Payment;
// hàm cập nhật time new
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
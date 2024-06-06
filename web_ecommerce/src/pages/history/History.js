import React, { useEffect, useState } from 'react';
import { getOrders } from './HistoryApi';
import "./History.css";

function History() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [state, setState] = useState({});

    // hàm getOrderItem filter by userId
    const search = async () => {
        try {
            const data = await getOrders(currentUser?.id);
            setState((prevState) => ({ ...prevState, listItems: data?.data }));
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    // render UI khi component mount
    useEffect(() => {
        search();
    }, []);

    return (
        <section className="section-content padding-y">
            <div className="container">
                <div className="row">
                    <main className="col-md-12">
                        {state?.listItems?.map((order, index) => (
                            <article key={index} className="card order-item mb-4">
                                <header className="card-header">
                                    <a href="#" className="float-right">
                                        <i className="fa fa-print" /> Print
                                    </a>
                                    <span style={{ display: 'flex' }}>Ngày đặt hàng: {convertDatetimeFormat(order?.createdAt)}</span>
                                </header>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className='user'>
                                                <h6 className="text-muted">Vận chuyển tới</h6>
                                                <div className="user-info">
                                                    <p className="info-item">
                                                        <span className="info-label" style={{ display: 'flex', marginRight: '20px' }}>Họ và tên:</span> {order?.userName}
                                                    </p>
                                                    <p className="info-item">
                                                        <span className="info-label" style={{ display: 'flex', marginRight: '20px' }} >Email:</span> {order?.email}
                                                    </p>
                                                    <p className="info-item">
                                                        <span className="info-label" style={{ display: 'flex', marginRight: '20px' }} > Điện thoại:</span> {order?.phone}
                                                    </p>
                                                    <p className="info-item">
                                                        <span className="info-label" style={{ display: 'flex', marginRight: '20px' }} >Đia chỉ:</span> {order?.address}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="text-muted">Tổng đơn hàng</h6>
                                            <span className="text-success">
                                                <i className="fab fa-lg fa-cc-visa" />
                                                Visa **** 4216
                                            </span>
                                            <p>
                                                Tổng tiền: {order?.totalPrice.toLocaleString()}đ <br />
                                                Giảm giá: {order?.totalDiscount}đ <br />
                                                <span className="b">Tổng cộng: {order?.totalPrice.toLocaleString()}đ </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            {order?.orderItemDto?.map((item, id) => (
                                                <tr key={id}>
                                                    <td width={65}>
                                                        <img src={item?.galleries?.length && `http://localhost:8080/upload/${item?.galleries[0]?.imagePath}`} className="img-xs border" alt={item?.productName} />
                                                    </td>
                                                    <td>
                                                        <p className="title mb-0">{item?.productName}</p>
                                                        <var className="price text-muted"> {item?.price.toLocaleString()}đ</var>
                                                        
                                                    </td>
                                                  <td>
                                                  <p>{item?.colorName}</p>
                                                  </td>
                                                    <td>
                                                        
                                                        Số lượng: {item?.quantity}
                                                    </td>
                                                    <td width={250}>
                                                        <a href="/" className="btn btn-outline-primary">
                                                            Quay lại trang chủ
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </article>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    );
}
export default History;

function convertDatetimeFormat(datetimeStr) {
    if (!datetimeStr) {
        return 'Ngày không hợp lệ';
    }
    var datetimeObj = new Date(datetimeStr);
    // check nếu datetimeObj là một ngày hợp lệ
    if (isNaN(datetimeObj)) {
        return 'Ngày không hợp lệ';
    }
    var day = datetimeObj.getDate();
    var month = datetimeObj.toLocaleString('default', { month: 'long' });
    var year = datetimeObj.getFullYear();
    var formattedDatetime = day + ' ' + month + ' ' + year;
    return formattedDatetime;
}

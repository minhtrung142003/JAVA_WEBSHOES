import React from 'react'
import ship1 from "../../assets/img/about/shipping1.png";
import ship2 from "../../assets/img/about/shipping2.png";
import ship3 from "../../assets/img/about/shipping3.png";
import ship4 from "../../assets/img/about/shipping4.png";
import ship5 from "../../assets/img/about/shipping5.png";

const Shipping = () => {
    return (
        <div className='Shipping' style={{ marginBottom: "-35px" }}>
            <div className="shipping_area mb-60">
                <div className="container">
                    <div className="shipping_inner">
                        <div className="single_shipping">
                            <div className="shipping_icone">
                                <img src={ship1} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h4>Giao hàng miễn phí</h4>
                                <p>Đơn hàng từ 1 triệu đồng</p>

                            </div>
                        </div>
                        <div className="single_shipping">
                            <div className="shipping_icone">
                                <img src={ship2} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h4>Giao hàng miễn phí</h4>
                                <p>Đơn hàng từ 1 triệu đồng</p>

                            </div>
                        </div>
                        <div className="single_shipping">
                            <div className="shipping_icone">
                                <img src={ship3} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h4>Giao hàng miễn phí</h4>
                                <p>Đơn hàng từ 1 triệu đồng</p>


                            </div>
                        </div>
                        <div className="single_shipping">
                            <div className="shipping_icone">
                                <img src={ship4} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h4>Giao hàng miễn phí</h4>
                                <p>Đơn hàng từ 1 triệu đồng</p>


                            </div>
                        </div>
                        <div className="single_shipping">
                            <div className="shipping_icone">
                                <img src={ship5} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h4>Giao hàng miễn phí</h4>
                                <p>Đơn hàng từ 1 triệu đồng</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipping
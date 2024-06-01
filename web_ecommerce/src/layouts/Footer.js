
import React from 'react'
import icon1 from "../assets/img/icon/icon-appstore.png";
import icon2 from "../assets/img/icon/icon-googleplay.png";
import icon3 from "../assets/img/icon/icon-phone.png";
import icon4 from "../assets/img/icon/payment.png";
import "./Footer.css";
const Footer = () => {
    return (
        <section className='Footer' style={{ paddingTop: '100px' }}>
            <footer className="footer_widgets">

                <div className="newsletter_area">
                    <div className="container">
                        <div className="newsletter_inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-5">
                                    <div className="newsletter_sing_up">
                                        <h3>Đăng ký bản tin</h3>
                                        <p>(Nhận <span>Giảm giá 30%</span> phiếu giảm giá hôm nay)</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7">
                                    <div className="subscribe_content">
                                        <p><strong>Tham gia cùng hơn 226.000 người đăng ký</strong> Và nhận phiếu giảm giá mới vào thứ Hai hàng tuần.</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="subscribe_form">
                                        <form id="mc-form" className="mc-form footer-newsletter">
                                            <input id="mc-email" type="email" autoComplete="off" placeholder="Địa chỉ Email..." />
                                            <button id="mc-submit">Đăng ký</button>
                                        </form>

                                        <div className="mailchimp-alerts text-centre">
                                            <div className="mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="mailchimp-error"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-sm-7">
                                <div className="widgets_container contact_us">
                                    <h3>ỨNG DỤNG</h3>
                                    <div className="aff_content">
                                        <p><strong>KINGSHOES</strong> Ứng dụng KINGSHOES hiện có sẵn trên Google Play & App Store. Lấy nó ngay.</p>
                                    </div>
                                    <div className="app_img">
                                        <figure className="app_img">
                                            <a href="#"><img src={icon1} alt="" /></a>
                                        </figure>
                                        <figure className="app_img">
                                            <a href="#"><img src={icon2} alt="" /></a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-5">
                                <div className="widgets_container widget_menu">
                                    <h3>THÔNG TIN</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="about.html">Về chúng tôi</a></li>
                                            <li><a href="#">Thông tin vận chuyển</a></li>
                                            <li><a href="#">Sản phẩm mới</a></li>
                                            <li><a href="#">Hàng bán chạy</a></li>
                                            <li><a href="my-account.html">Tài khoản của tôi</a></li>
                                            <li><a href="#">Lịch sử đơn hàng</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="widgets_container widget_menu">
                                    <h3>TÀI KHOẢN</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="my-account.html">Tài khoản cá nhân</a></li>
                                            <li><a href="cart.html">Giỏ hàng</a></li>
                                            <li><a href="wishlist.html">Danh sách đơn hàng</a></li>
                                            <li><a href="#">Giá giảm</a></li>
                                            <li><a href="#">Lịch sử đơn hàng</a></li>
                                            <li><a href="#">Đơn hàng quốc tế</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-5 col-sm-6">
                                <div className="widgets_container widget_menu">
                                    <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="#">Sơ đồ trang web</a></li>
                                            <li><a href="my-account.html">Tài khoản cá nhân</a></li>
                                            <li><a href="#">Thông tin vận chuyển</a></li>
                                            <li><a href="#">Lịch sử đơn hàng</a></li>
                                            <li><a href="wishlist.html">Danh sách đơn hàng</a></li>
                                            <li><a href="#">Khuyến mãi</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-7 col-sm-12">
                                <div className="widgets_container">
                                    <h3>THÔNG TIN LIÊN LẠC</h3>
                                    <div className="footer_contact">
                                        <div className="footer_contact_inner">
                                            <div className="contact_icone">
                                                <img src={icon3} alt="" />
                                            </div>
                                            <div className="contact_text">
                                                <p>Gọi miễn phí 24/24: <br /> <strong>19001234</strong></p>
                                            </div>
                                        </div>
                                        <p>Địa chỉ của bạn ở đây. <br /> tieuphu@example.com</p>
                                    </div>

                                    <div className="footer_social">
                                        <ul>
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright_area">
                                    <p>&copy; 2024 <a href="index.html" className="text-uppercase">KINGSHOES</a>. Được tạo <i className="fa fa-heart"></i> bởi <a target="_blank" href="https://www.hasthemes.com/">Hà Minh Trung</a></p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="footer_payment text-end">
                                    <img src={icon4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



            {/* <div className="modal fade" id="modal_box" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="modal_tab">
                                            <div className="tab-content product-details-large">
                                                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig2.jpg" alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig3.jpg" alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig4.jpg" alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/productbig5.jpg" alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal_tab_button">
                                                <ul className="nav product_navactive owl-carousel" role="tablist">
                                                    <li>
                                                        <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/product/product1.jpg" alt=""/></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/product/product6.jpg" alt=""/></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/product/product9.jpg" alt=""/></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="assets/img/product/product14.jpg" alt=""/></a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="modal_right">
                                            <div className="modal_title mb-10">
                                                <h2>Sit voluptatem rhoncus sem lectus</h2>
                                            </div>
                                            <div className="modal_price mb-10">
                                                <span className="new_price">$64.99</span>
                                                <span className="old_price" >$78.99</span>
                                            </div>
                                            <div className="modal_description mb-15">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae </p>
                                            </div>
                                            <div className="variants_selects">
                                                <div className="variants_size">
                                                    <h2>size</h2>
                                                    <select className="select_option">
                                                        <option selected value="1">s</option>
                                                        <option value="1">m</option>
                                                        <option value="1">l</option>
                                                        <option value="1">xl</option>
                                                        <option value="1">xxl</option>
                                                    </select>
                                                </div>
                                                <div className="variants_color">
                                                    <h2>color</h2>
                                                    <select className="select_option">
                                                        <option selected value="1">purple</option>
                                                        <option value="1">violet</option>
                                                        <option value="1">black</option>
                                                        <option value="1">pink</option>
                                                        <option value="1">orange</option>
                                                    </select>
                                                </div>
                                                <div className="modal_add_to_cart">
                                                    <form action="#">
                                                        <input min="1" max="100" step="2" value="1" type="number"/>
                                                            <button type="submit">add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal_social">
                                                <h2>Share this product</h2>
                                                <ul>
                                                    <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                    <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </section>
    )
}

export default Footer
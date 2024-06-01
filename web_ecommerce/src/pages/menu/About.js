import React from 'react';
import ab1 from "../../assets/img/about/about-us-signature.png";
import ab2 from "../../assets/img/about/ab4.jpg";
import ab3 from "../../assets/img/about/About_icon1.png";
import ab4 from "../../assets/img/about/about-us-policy-bg.jpg";
import ab5 from "../../assets/img/about/About_icon2.png";
import ab6 from "../../assets/img/about/About_icon3.png";
import ab7 from "../../assets/img/about/ab1.jpeg";
import ab8 from "../../assets/img/about/ab2.jpeg";
import ab9 from "../../assets/img/about/ab3.jpeg";

const About = () => {
    return (
        <div className="about_bg_area" style={{marginBottom:'-150px'}}>
            <div className="container">
            <div className="row">
                        <div className="col-12"  style={{display:'flex', marginTop:'-20px'}}>
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li>Giới thiệu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <section className="about_section mb-60" style={{marginTop:'20px'}}>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <figure>
                                <div className="about_thumb">
                                    <img src={ab2} alt="" style={{width:'1500px', height:'500px'}} />
                                </div>
                                <figcaption className="about_content" style={{marginTop:'40px'}}>
                                    <h1>Chúng tôi là một công ty số chuyên tập trung vào việc cung cấp nội dung và trải nghiệm người dùng tiện ích.</h1>
                                    <p>Bạn sẽ thấy hồ là một yếu tố, và theo thời gian, bạn sẽ không thấy các bãi biển sẽ trở nên cạn. Cản trở quá trình ghét macro vào phần tử. Egestas Nun eleifend feugiat lectus laoreet, vel now taciti integument ngày mai. Đẩy chân này, đưa nibh và dui mauris ngồi. Các con của tôi, facilisi mauris của tôi, các đối tác ưu tú leo thành viên Accumsan. Jaculis và dringilla đang bóp méo truyền thuyết về người kết hôn, để trang trí cho một số tiếng cười của phallus.</p>
                                    <div className="about_signature">
                                        <img src={ab1} alt="" />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                <div className="choseus_area" data-bgimg={ab4} style={{marginTop:'-70px'}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="single_chose">
                                <div className="chose_icone">
                                    <img src={ab3} alt="" />
                                </div>
                                <div className="chose_content">
                                    <h3>Thiết kế Sáng tạo</h3>
                                    <p>
                                        Người ta sợ rằng các thành viên trong gia đình sẽ phải chịu đựng sự khắc nghiệt, cánh cửa phải sạch sẽ và những thứ khác, không ai muốn trang trí.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single_chose">
                                <div className="chose_icone">
                                    <img src={ab5} alt="" />
                                </div>
                                <div className="chose_content">
                                    <h3>Đảm bảo hoàn tiền 100%</h3>
                                    <p>Người ta sợ rằng các thành viên trong gia đình sẽ phải chịu đựng sự khắc nghiệt, cánh cửa phải sạch sẽ và những thứ khác, không ai muốn trang trí.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single_chose">
                                <div className="chose_icone">
                                    <img src={ab6} alt="" />
                                </div>
                                <div className="chose_content">
                                    <h3>Hỗ trợ Trực tuyến 24/7</h3>
                                    <p>Người ta sợ rằng các thành viên trong gia đình sẽ phải chịu đựng sự khắc nghiệt, cánh cửa phải sạch sẽ và những thứ khác, không ai muốn trang trí.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="about_gallery_section mb-55">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <article className="single_gallery_section">
                                <figure>
                                    <div className="gallery_thumb">
                                        <img src={ab7} alt="" style={{maxWidth:'100%',height:'400px'}}/>
                                    </div>
                                    <figcaption className="about_gallery_content">
                                        <h3>Chúng tôi làm gì?</h3>
                                        <p>TPHCM mua giày chạy bộ thể thao adidas/ nike chính hãng ở đâu? đến KING SHOES - 192/2 Nguyễn Thái Bình, phường 12, quận Tân Bình, Tp. Hồ Chí Minh. KING SHOES chuyên sneaker bán giày Nike/ Adidas chính hãng tại quận Tân Bình... hàng từ USA, Úc và các nước trong khu vực với giá thấp hơn store.</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <article className="single_gallery_section">
                                <figure>
                                    <div className="gallery_thumb">
                                        <img src={ab8} alt=""style={{height:'400px'}} />
                                    </div>
                                    <figcaption className="about_gallery_content">
                                        <h3>Sứ mệnh của chúng tôi</h3>
                                        <p>Cửa Hàng KING SHOES là một trong những nơi sưu tầm có khối lượng giày hiếm siêu khủng. Có những mẫu giày cực kì hype được giới sưu tầm săn lùng, thậm chí bạn sẽ bắt gặp nhiều mẫu lạ mới mà hiếm shop nào có. Có những mẫu chỉ có độc nhất 1 đôi. Ngoài ra những mẫu đang rất HOT trên thị trường sneaker về liên tục nên các bạn cứ yên tâm không sợ hết hàng.</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <article className="single_gallery_section">
                                <figure>
                                    <div className="gallery_thumb">
                                        <img src={ab9} alt=""style={{height:'400px'}} />
                                    </div>
                                    <figcaption className="about_gallery_content">
                                        <h3>Lịch sử của chúng tôi</h3>
                                        <p>Nỗi sợ vì mua phải giày kém chất lượng, giày fake, từ nay không còn lo lắng nữa vì đã có #KINGSHOES.VN: hàng chính hãng nhập trực tiếp từ US, fullbox, nguyên tem.

giày sneaker nam chính hãng, giày sneaker nam giá rẻ tphcm, giày sneaker nữ, giày sneaker nữ chính hãng, giày sneaker giá rẻ tại KING SHOES.</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

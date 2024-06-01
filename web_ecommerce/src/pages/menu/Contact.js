import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="breadcrumbs_area">
        <div className="container">
          <div className="row">
            <div className="col-12" >
              <div className="breadcrumb_content" style={{ marginTop: '10px' }}>
                <ul>
                  <li><a href="/">Trang chủ</a></li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_page_bg" style={{ marginTop: '-40px' }}>
        <div className="contact_map">
          <div className="map-area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4660.729357591252!2d106.65131197089624!3d10.796708639788218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a490ac0839%3A0x95c47664bcd7d113!2zS0lORyBTSE9FUyAtIEPhu61hIGjDoG5nIGdpw6B5IFNuZWFrZXIgY2jDrW5oIGjDo25nIHThuqFpIEhDTQ!5e0!3m2!1svi!2s!4v1716286238567!5m2!1svi!2s"
              width="1500"
              height="550"
              style={{ border: 0 }}
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="container">
          <div className="contact_area">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="contact_message content">
                  <h3>Liên hệ chúng tôi</h3>
                  <p>Sự rõ ràng cũng là một quá trình năng động tuân theo những thói quen luôn thay đổi của người đọc. Thật đáng ngạc nhiên khi lưu ý rằng văn học Gothic, thứ mà ngày nay chúng ta cho là ít rõ ràng, đã có trước các hình thức văn học của con người. kéo theo sự thay đổi trong thói quen của độc giả. Thật đáng ngạc nhiên khi nhận thấy làm thế nào    </p>
                  <ul >
                    <li style={{ display: 'flex' }}><i className="fa fa-fax"></i> Địa chỉ: Địa chỉ của bạn.</li>
                    <li style={{ display: 'flex' }}><i className="fa fa-phone"></i> <a href="mailto:demo@example.com">demo@example.com</a></li>
                    <li style={{ display: 'flex' }}><i className="fa fa-envelope-o"></i> 0123456789</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="contact_message form">
                  <h3>Hãy cho chúng tôi biết về sản phẩm của bạn</h3>
                  <form id="contact-form" method="POST" action="https://htmldemo.net/antomi/antomi/assets/mail.php">
                    <p>
                      <label style={{ display: 'flex' }}> Tên của bạn (bắt buộc)</label>
                      <input name="name" placeholder="Tên *" type="text" />
                    </p>
                    <p>
                      <label style={{ display: 'flex' }}>  Email của bạn (bắt buộc)</label>
                      <input name="email" placeholder="Email *" type="email" />
                    </p>
                    <p>
                      <label style={{ display: 'flex' }}> Chủ đề</label>
                      <input name="subject" placeholder="Chủ đề *" type="text" />
                    </p>
                    <div className="contact_textarea">
                      <label style={{ display: 'flex' }}> Tin nhắn của bạn</label>
                      <textarea placeholder="Tin nhắn *" name="message" className="form-control2"></textarea>
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: '80px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      Gửi
                    </button>
                    <p className="form-messege"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .breadcrumbs_area {
          background: #f6f6f6;
          padding: 20px 0;
        }
        .breadcrumb_content ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        .breadcrumb_content ul li {
          margin-right: 10px;
        }
        .breadcrumb_content ul li a {
          color: #333;
          text-decoration: none;
        }
        .breadcrumb_content ul li::after {
          content: '>';
          margin-left: 10px;
        }
        .breadcrumb_content ul li:last-child::after {
          content: '';
        }
        .contact_page_bg {
          padding: 60px 0;
        }
        .contact_map .map-size {
          width: 100%;
          height: 400px;
          border: none;
        }
        .contact_area {
          margin-top: 40px;
        }
        .contact_message {
          background: #fff;
          padding: 30px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .contact_message h3 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .contact_message p {
          margin-bottom: 20px;
          line-height: 1.8;
        }
        .contact_message ul {
          list-style: none;
          padding: 0;
        }
        .contact_message ul li {
          margin-bottom: 10px;
          font-size: 16px;
        }
        .contact_message ul li i {
          margin-right: 10px;
        }
        .contact_message form p {
          margin-bottom: 20px;
        }
        .contact_message form input,
        .contact_message form textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .contact_message form .contact_textarea textarea {
          height: 150px;
        }
        .contact_message form button {
          background: #333;
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 4px;
        }
        .contact_message form button:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Contact;

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyAccount = () => {
    const [userInfo, setUserInfo] = useState({
        id: '',
        fullname: '',
        email: '',
        phone_number: '',
        address: '',
        password: ''
    });
    // lấy thông tin user từ localstorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (user) {
            setUserInfo({
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                phone_number: user.phone_number,
                address: user.address,
                password: user.password
            });
        }
    }, []);
    // hàm input change thông tin user
    const handleChange = async (e) => {
        let { name, value } = e.target;
        setUserInfo((pre) => ({ ...pre, [name]: value }));
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = { ...userInfo };
            const response = await axios.put(`http://localhost:8080/api/users/${userInfo.id}`, updatedUser);
            alert("Thông tin của bạn đã được cập nhật thành công!");
            localStorage.setItem("currentUser", JSON.stringify(response.data));   // Cập nhật lại localStorage 
        } catch (error) {
            alert("Cập nhật thông tin thất bại, vui lòng thử lại!");
        }
    };

     // logout
     const handleLogout = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
    };
return (
    <div>
        <div className="breadcrumbs_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul style={{ display: 'flex' }}>
                                <li><a href="/">Trang chủ</a></li>
                                <li>Thông tin người dùng</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="account_page_bg">
            <div className="container">
                <section className="main_content_area">
                    <div className="account_dashboard">
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <div className="dashboard_tab_button">
                                    <ul role="tablist" className="nav flex-column dashboard-list">
                                        <li><a href="#account-details" data-bs-toggle="tab" className="nav-link">Thông Tin Cá Nhân</a></li>
                                       <div onClick={handleLogout}>
                                        <li><a href="#" className="nav-link">Đăng xuất</a></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <div className="tab-content dashboard_content">
                                    <div className="tab-pane fade show active" id="account-details" >
                                        <h3 style={{ display: 'flex' }} >Thông tin cá nhân </h3>
                                        <div className="login">
                                            <div className="login_form_container">
                                                <div className="account_login_form">
                                                    <form onSubmit={handleUpdate} >

                                                        <label style={{ display: 'flex' }}>Họ và tên</label>
                                                        <input type="text" name="fullname" value={userInfo.fullname} onChange={handleChange} />
                                                        <label style={{ display: 'flex' }}>Email</label>
                                                        <input type="text" name="email" value={userInfo.email} onChange={handleChange} />
                                                        <label style={{ display: 'flex' }}>Số điện thoại</label>
                                                        <input type="text" name="phone_number" value={userInfo.phone_number} onChange={handleChange} />
                                                        <label style={{ display: 'flex' }}>Địa chỉ</label>
                                                        <input type="text" name="address" value={userInfo.address} onChange={handleChange} />
                                                        <label style={{ display: 'flex' }} value={userInfo.password} onChange={handleChange}>Mật khẩu</label>
                                                        <input type="password" name="password" />
                                                        <span className="custom_checkbox">
                                                            <input type="checkbox" value="1" name="optin" style={{marginTop:'-3px'}} />
                                                            <label>Nhận ưu đãi từ các đối tác của chúng tôi</label>
                                                        </span>
                                                        <div className="save_button primary_btn default_button">
                                                            <button type="submit" style={{ display: 'flex' }}>Lưu thông tin</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
)
}

export default MyAccount;

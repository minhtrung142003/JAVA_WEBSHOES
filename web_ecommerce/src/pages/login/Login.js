import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
const Login = () => {
    const [state, setState] = useState();
    const navigate = useNavigate();

    // handle input change
    const handleChange = (e) => {  // Khi user onchange trong input thì gọi hàm này và update state
        let { name, value } = e.target;
        setState((pre) => ({ ...pre, [name]: value }));
    }

    // handle login
    const handleLogin = async (e) => {
        e.preventDefault() // ngăn chặn hành vi mặc định, tức là sẽ ko gửi yêu cầu đến server, ko tải lại pages
        try {
            const response = await axios.post(baseURL + "users/login", state);
            const userData = response.data;

            // localStorage là 1 đối tượng trong js, dùng để lưu trữ thông tin dưới dạng cặp key, value
            localStorage.setItem("currentUser", JSON.stringify({ id: userData?.id, loginType: 'normal' }));
            window.location.href = "/"
        } catch (error) {
            alert("Đăng nhập thất bại, vui lòng thử lại!");
        }
    }
    // login google
    const handleLoginSuccess = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const userData = {
                id: decoded.sub,
                loginType: 'google'
            };
            localStorage.setItem('currentUser', JSON.stringify(userData));
            navigate("/");
        } catch (error) {
            console.error("Error JWT:", error);
        }
    };

    return (
        <GoogleOAuthProvider clientId="1052161616352-l029l5odc7hoq31qhu6nhv871dgbf12u.apps.googleusercontent.com">
            <div className="login-container">
                <h2>Đăng nhập</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">

                        <input onChange={handleChange} type="text" id="fullname" name="fullname" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="form-group">

                        <input onChange={handleChange} type="password" id="password" name="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="form-group">
                        <button type="submit1">Đăng nhập</button>
                    </div>
                </form>
                <div className="social-login">
                    <button className="social-button facebook" style={{ marginBottom: "2px" }}>
                        <i className="fab fa-facebook-f"></i>
                        Đăng nhập với Facebook
                    </button>
                    <div className="social-button google" style={{ marginBottom: "2px" }}  >
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={(error) => console.log(error)}
                            useOneTap
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div className="signup-link">
                    <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;

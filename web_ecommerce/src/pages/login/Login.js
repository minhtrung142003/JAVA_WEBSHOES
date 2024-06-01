    import React, { useEffect, useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom'; // Đảm bảo import thư viện Link từ react-router-dom nếu bạn sử dụng routing
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
            // dùng axios.post để gửi cầu đến server thông qua url và dữ liệu là state,
            try {
                const response = await axios.post(baseURL + "users/login", state);
                const userData = response.data;

                // localStorage là 1 đối tượng trong js, dùng để lưu trữ thông tin dưới dạng cặp key, value
                // setItem là 1 method trong localStorage và đặt currentUser là dữ liệu của user đã login
                localStorage.setItem("currentUser", JSON.stringify({ id: userData?.id, loginType: 'normal' })); 
                window.location.href = "/"
            } catch (error) {
                alert("Đăng nhập thất bại, vui lòng thử lại!");
            }
        }
        // login google
        const handleLoginSuccess = (credentialResponse) => {
            const decode = jwtDecode(credentialResponse.credential);
            localStorage.setItem('currentUser', JSON.stringify({ id: decode.sub, loginType: 'google' }));
            console.log(decode);
            navigate("/");
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

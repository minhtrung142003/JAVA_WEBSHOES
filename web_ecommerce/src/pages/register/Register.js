import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Register.css";
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import Swal from 'sweetalert2';
const Register = () => {
    const [state, setState] = useState({
        fullname: '',
        email: '',
        phone_number: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    // khởi tạo validation
    const [errors, setErrors] = useState({
        fullname: '',
        email: '',
        phone_number: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    // hàm input change
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState((pre) => ({ ...pre, [name]: value }));
    }

    // check validation
    const validate = () => {
        let newErrors = {};
        let isValid = true;

        if (!state.fullname) {
            newErrors.fullname = "Vui lòng nhập tên đăng nhập.";
            isValid = false;
        } else if (/\d/.test(state.fullname)) {
            newErrors.fullname = "Tên không được chứa số.";
            isValid = false;
        } else if (state.fullname.length < 5) {
            newErrors.fullname = "Tên đăng nhập phải ít nhất 5 kí tự.";
            isValid = false;
        }
        // Thực hiện kiểm tra tên người dùng đã tồn tại
        axios.post(baseURL + "users/check-fullname", { fullname: state.fullname })
            .then(response => {
                if (response.data.exists) {
                    newErrors.fullname = "Tên người dùng đã tồn tại.";
                    setErrors(newErrors);
                    isValid = false; 
                }
            })
            .catch(error => {
                console.log(error);
            });

        if (!state.email) {
            newErrors.email = "Vui lòng nhập email.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{3}$/.test(state.email)) {
            newErrors.email = "Email không hợp lệ.";
            isValid = false;
        }

        if (!state.phone_number) {
            newErrors.phone_number = "Vui lòng nhập số điện thoại.";
            isValid = false;
        } else if (!/^\d+$/.test(state.phone_number)) {
            newErrors.phone_number = "Số điện thoại chỉ được chứa số.";
            isValid = false;
        } else if (state.phone_number.length !== 10) {
            newErrors.phone_number = "Số điện thoại chỉ có đúng 10 số.";
            isValid = false;
        }

        if (!state.address) {
            newErrors.address = "Vui lòng nhập địa chỉ.";
            isValid = false;
        }

        if (!state.password) {
            newErrors.password = "Vui lòng nhập mật khẩu.";
            isValid = false;
        }
        if (!state.confirmPassword) {
            newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu.";
            isValid = false;
        } else if (state.confirmPassword !== state.password) {
            newErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    }
    // handle register
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        try {
            const data = await axios.post(baseURL + "users/register", state);
            console.log(data)
            await Swal.fire({
                title: 'Đăng ký thành công!',
                icon: 'success',
                showConfirmButton: false,
                timer: 500
            })
            window.location.href = "/login";
        } catch (error) {
            alert("Đăng ký thất bại, vui lòng thử lại!");
        }
    }

    return (
        <div className="register-container">
            <h2>Đăng ký</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">

                    <input onChange={handleChange} type="text" id="fullname" name="fullname" placeholder="Tên đăng nhập" />
                    {errors.fullname && <p style={{ color: 'red' }} className="error">{errors.fullname}</p>}

                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="email" id="email" name="email" placeholder="Email" />
                    {errors.email && <p style={{ color: 'red' }} className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="text" id="phone_number" name="phone_number" placeholder="Số điện thoại" />
                    {errors.phone_number && <p style={{ color: 'red' }} className="error">{errors.phone_number}</p>}

                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="text" id="address" name="address" placeholder="Địa chỉ" />
                    {errors.address && <p style={{ color: 'red' }} className="error">{errors.address}</p>}
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="password" id="password" name="password" placeholder="Mật khẩu" />
                    {errors.password && <p style={{ color: 'red' }} className="error">{errors.password}</p>}
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="password" id="confirmPassword" name="confirmPassword" placeholder="Xác nhận mật khẩu" />
                    {errors.confirmPassword && <p style={{ color: 'red' }} className="error">{errors.confirmPassword}</p>}
                </div>
                <div className="form-group">
                    <button type="submit22">Đăng ký</button>
                </div>
            </form>
            <div className="login-link">
                <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
            </div>
        </div>
    );
};


export default Register
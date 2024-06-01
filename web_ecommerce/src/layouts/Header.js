
import React, { useEffect, useState } from 'react'
import logo from "../assets/img/logo/logo1.png";
import { getListCart } from '../pages/cart/CartApi';
import axios from 'axios';
import baseURL from '../api/BaseUrl';
import "./Header.css";
const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [stateValue, setStateValue] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(currentUser !== null); // check thử đã login chưa

    // handle toogle
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    // Hàm search
    const handleSearch = async (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        try {
            const response = await axios.get(`http://localhost:8080/api/products/search?search=${searchTerm}`);
            window.location.href = `/search?searchTerm=${searchTerm}`;
            setSearchTerm('')
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    // get cart
    const search = async () => {
        try {
            const data = await getListCart(currentUser?.id);
            setStateValue((pre) => ({ ...pre, listData: data?.data }));
        } catch (error) { }
    };

    // categories
    const fetchCategories = async () => {
        try {
            const response = await axios(baseURL + "categories");
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    // logout
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
    };

    // render component
    useEffect(() => {
        search();
        fetchCategories();
    }, []);
    return (
        <>
            <header>
                <div className="main_header header_four m-0">
                    <div className="container">

                        <div className="header_middle header_middle_style4">
                            <div className="row align-items-center">
                                <div className="column1 col-lg-3 col-md-3 col-4">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="" /></a>
                                    </div>
                                </div>
                                <div className="column2 col-lg-6 col-md-12">
                                    <div className="search_container">
                                        <form action="#">
                                            <div className="search_box">
                                                <input placeholder="Tìm kiếm" type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                                                <button onClick={handleSearch} type="submit" style={{ backgroundColor: "orange ", color: "white" }}>Tìm kiếm</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="column3 col-lg-3 col-md-7 col-6">
                                    <div className="header_configure_area header_configure_four">
                                        <div className='dropdown-content'>
                                            <div className="header_wishlist" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                                <a href={isLoggedIn ? "#" : "/login"}>
                                                    <i className="ion-person"></i>
                                                </a>
                                                {isDropdownOpen && currentUser && (
                                                    <div className="dropdown-content">
                                                        <div onClick={handleLogout}>Đăng xuất</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="header_wishlist">
                                            <a href="/history">
                                                <span className="cart_price"> <i className="fa fa-history"></i></span>
                                            </a>
                                        </div>
                                        <div className="mini_cart_wrapper">
                                            <a href="/cart">
                                                <i className="fa fa-shopping-bag"></i>
                                                <span className="cart_price"> <i className="ion-ios-arrow-down"></i></span>
                                                <span className="cart_count">{stateValue?.listData?.length || 0}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_bottom">
                            <div className="row align-items-center">
                                {/*  */}
                                <div className="column1 col-lg-3 col-md-6">
                                    <div className={`categories_menu ${isActive ? 'active' : ''}`}>
                                        <div className="categories_title" onClick={handleToggle}>
                                            <h2 className="categori_toggle">DANH MỤC SẢN PHẨM</h2>
                                        </div>
                                        <div className="categories_menu_toggle">
                                            <ul className={`categories_mega_menu ${isActive ? 'active' : ''}`}>
                                                {categories.map((category, index) => (
                                                    <li key={index} >
                                                        <a href={`/category?cateName=${category.categoryName}`}>{category.categoryDescription}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="column2 col-lg-6 ">
                                    <div className="main_menu menu_four menu_position text-center">
                                        <nav>
                                            <ul>
                                                <li><a className="active" href="/">Trang chủ<i className="fa fa-angle-down"></i></a>
                                                </li>

                                                <li><a href="/about">GIỚI THIỆU</a></li>
                                                <li><a href="/contact"> LIÊN HỆ</a></li>
                                                <li><a href="/blog"> TIN TỨC</a></li>
                                                <li><a href="/tuyendung">TUYỂN DỤNG</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="column3 col-lg-3 col-md-6">

                                    <div class="header_wishlist">
                                        <a href="/myAccount"><i class="ion-social-whatsapp-outline"></i>
                                        </a>
                                    </div>
                                    <a href="/myAccount" style={{ color: 'yellow', marginLeft: '-30px' }}>Thông Tin Cá Nhân</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
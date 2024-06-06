import React, { useEffect, useState } from 'react';
import './New.css';
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { Link } from 'react-router-dom';
import ImageProduct from './ImageProduct';

const New = () => {
    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("NIKE"); // ban đầu để là NIKE rồi filter theo 

    // Gọi API để lấy danh sách product theo category khi component render or khi category change
    useEffect(() => {
        axios.get(`${baseURL}products/category/${currentCategory}`)
            .then(response => {
                console.log("product", response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [currentCategory]);

    return (
        <div className="NewArrivals" style={{ marginTop: "-25px" }} >
            <div className="product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="section_title s_title_style3">
                                    <h2>SẢN PHẨM BÁN CHẠY</h2>
                                </div>
                                <div className="product_tab_btn">
                                    <ul className="nav" role="tablist" id="nav-tab2">
                                        {['NIKE', 'ADIDAS', 'JORDAN', 'YEEZY'].map(category => (
                                            <li key={category}>
                                                <a
                                                    className={currentCategory === category ? 'active' : ''}
                                                    onClick={() => setCurrentCategory(category)}
                                                    role="tab"
                                                    aria-controls={category} // xác định cái nạo dc chọn bởi tab
                                                    aria-selected={currentCategory === category} // check xem tab có dc chọn ko
                                                >
                                                    {category}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id={currentCategory} role="tabpanel">
                        <div className="product_carousel product_style product_column5 owl">
                            <div className="product_list">
                                {products && products.slice(5, 10).map((product) => (
                                    <article className="single_product" key={product.id}>
                                        <figure>
                                            <div className="product_thumb">
                                                <Link className="primary_img" to={`/detailproduct?productId=${product.id}`}>
                                                    <ImageProduct
                                                        id={product.id}
                                                        name={product.title}
                                                        tagName={"moi"}
                                                    />
                                                </Link>
                                                <Link className="secondary_img" to={`/detailproduct?productId=${product.id}`}>
                                                    <ImageProduct
                                                        id={product.id}
                                                        name={product.title}
                                                        tagName={"moi"}
                                                    />
                                                </Link>
                                                <div className="label_product">
                                                    <span className="label_sale" style={{ backgroundColor: 'orange' }}>{product.discount}</span>
                                                </div>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-tippy="Add to Wishlist"><i className="ion-android-favorite-outline"></i></a></li>
                                                        <li className="compare"><a href="#" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-tippy="Add to Compare"><i className="ion-ios-settings-strong"></i></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" data-tippy="quick view"><i className="ion-ios-search-strong"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_content">
                                                <div className="product_content_inner">
                                                    <h4 className="product_name"><Link to={`/detailproduct?productId=${product.id}`}>{product.title}</Link></h4>
                                                    <div className="price_box">
                                                        <span className="old_price">{product.discount.toLocaleString()}đ</span>
                                                        <span className="current_price">{product.price.toLocaleString()}đ</span>
                                                    </div>
                                                </div>
                                                <div className="add_to_cart">
                                                    <Link to={`/detailproduct?productId=${product.id}`} title="Add to cart">Thêm vào giỏ hàng</Link>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;

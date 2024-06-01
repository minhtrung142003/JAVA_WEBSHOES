import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { Link } from 'react-router-dom';
import ImageProduct from './ImageProduct';
import './New.css';

const Phukien = () => {
    const [products, setProducts] = useState([]);

    // Gọi API để lấy danh sách sản phẩm phụ kiện khi component được render
    useEffect(() => {
        axios.get(`${baseURL}products/category/Phụ Kiện`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="NewArrivals" style={{ marginTop: "60px" }}>
            <div className="product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="section_title s_title_style3">
                                    <h2>PHỤ KIỆN</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="tab-content">
                    <div className="tab-pane fade show active" role="tabpanel">
                        <div className="product_carousel product_style product_column5 owl">
                            <div className="product_list">
                                {products && products.map((product) => (
                                    <article className="single_product" key={product.id}>
                                        <figure>
                                            <div className="product_thumb">
                                                <Link className="primary_img" to={`/detailproduct?productId=${product.id}`}>
                                                    <ImageProduct
                                                        id={product.id}
                                                        name={product.title}
                                                        tagName={"PHỤ KIỆN"}
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
                                                        <span className="old_price">$80.00</span>
                                                        <span className="current_price">{product.price}</span>
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

export default Phukien;

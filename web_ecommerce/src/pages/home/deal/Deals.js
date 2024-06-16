
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../../api/BaseUrl';
import { Link } from 'react-router-dom';
import ImageProduct from '../ImageProduct';
const Deals = () => {
    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("NIKE");
    // Gọi API để lấy danh sách product theo category khi component render hoặc khi category change
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
        <div  >
            {/* Bonus style css */}
            <style>
                {`
          .product_area.deals_product_style2 {
            padding: 90px 0;
          }

          .product_area .product_items {
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
          }

          .product_area .product_items .single_product {
            width: calc(50% - 30px);
            margin-bottom: 30px;
            padding-left: 15px;
            padding-right: 15px;
          }

          /* Đảm bảo các sản phẩm được hiển thị trên cùng một hàng */
          @media (max-width: 768px) {
            .product_area .product_items .single_product {
              width: calc(50% - 20px);
            }
          }

          @media (max-width: 576px) {
            .product_area .product_items .single_product {
              width: 100%;
            }
          }
        `}
            </style>
            
            {/* UI HERE */}
            <div className="product_area deals_product_style2" style={{ marginBottom: "-45px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="section_title">
                                    <h2>SẢN PHẨM HOT</h2>
                                </div>
                                <div className="product_tab_btn">
                                    <ul className="nav" role="tablist" id="nav-tab2" style={{ paddingLeft: "-60px" }} >
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
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id={currentCategory} role="tabpanel">
                            <div className="product_carousel product_style product_column2">
                                <div className="product_items" >
                                    {products && products.slice(0, 4).map((product) => (
                                        <article className="single_product" style={{ width: "50%" }} key={product.id} >
                                            <figure>
                                                <div className="product_thumb" key={product.id}>
                                                    <Link className="primary_img" to={`/detailproduct?productId=${product.id}`}>
                                                        <ImageProduct
                                                            id={product.id}
                                                            name={product.title}
                                                            tagName={"banchay"}
                                                             loading = "lazy"
                                                        />
                                                    </Link>
                                                    <Link className="secondary_img" to={`/detailproduct?productId=${product.id}`}>
                                                        <ImageProduct
                                                            id={product.id}
                                                            name={product.title}
                                                            tagName={"banchay"}
                                                             loading = "lazy"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="product_content">
                                                    <div className="product_content_inner">
                                                        <h4 className="product_name"><Link to={`/detailproduct?productId=${product.id}`}>{product.title}</Link></h4>
                                                        <div className="product_rating">
                                                            <ul>
                                                                <li><a href="#"><i className="ion-android-star-outline"></i></a></li>
                                                                <li><a href="#"><i className="ion-android-star-outline"></i></a></li>
                                                                <li><a href="#"><i className="ion-android-star-outline"></i></a></li>
                                                                <li><a href="#"><i className="ion-android-star-outline"></i></a></li>
                                                                <li><a href="#"><i className="ion-android-star-outline"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="price_box">
                                                            <span className="old_price">{product.discount.toLocaleString()}đ</span>
                                                            <span className="current_price">{product.price.toLocaleString()}đ</span>
                                                        </div>
                                                        <div className="countdown_text">
                                                            <p><span style={{ width: "40px", fontSize: "20px", color: 'red' }}>
                                                                <Link to={`/detailproduct?productId=${product.id}`}>
                                                                    Thêm vào giỏ hàng
                                                                </Link>
                                                            </span>
                                                            </p>
                                                        </div>
                                                        <div className="product_timing">
                                                            <div data-countdown="2023/12/15"></div>
                                                        </div>
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
        </div>
    );
}

export default Deals;

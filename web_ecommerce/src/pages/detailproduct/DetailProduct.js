import React, { useEffect, useState } from 'react';
import './DetailProduct.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { addCard } from "./DetailApi";

const DetailProduct = () => {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [product, setProduct] = useState({});
    const [mainImage, setMainImage] = useState('');  // set image chính 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");
    const [colors, setColors] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);

    // hàm change color
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    // render UI
    useEffect(() => {
        const GET_ID = async (endpoint, id) => {
            try {
                const response = await axios.get(`${baseURL}${endpoint}/${id}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching product:", error);
                throw error;
            }
        };
        GET_ID(`products`, productId)
            .then((item) => {
                setProduct(item);
                setMainImage(item?.galleries?.length ? `http://localhost:8080/upload/${item.galleries[0].imagePath}` : '');
            })
            .catch((error) => console.error("Error setting product:", error));

        // Fetch color data
        const fetchColors = async () => {
            try {
                const response = await axios.get(`${baseURL}colors`);
                setColors(response.data);
            } catch (error) {
                console.error("Error fetching colors:", error);
            }
        };
        fetchColors();
    }, [productId, baseURL]);

    // hàm change quantity
    const handleChange = (e) => {
        let { name, value } = e.target;
        setProduct((pre) => ({ ...pre, [name]: value }));
    };

    // prepare data product cho hàm addtocart
    const convertDataSubmit = (value) => {
        return {
            productId: value?.id,
            quantity: value?.quantity,
            userId: currentUser?.id,
            color: selectedColor,
        };
    };
    console.log(selectedColor);
    // hàm addCart
    const handleAddToCard = async () => {
        try {
            if (!currentUser?.id) {
                alert("Chưa có tài khoản đăng nhập!");
                navigate("/login");
                return;
            }
            if (product.quantity > 0 && currentUser?.id && selectedColor) {
                const response = await addCard(convertDataSubmit(product));
                console.log(response);
                alert("Thêm vào giỏ hàng thành công!");
            } else {
                alert("Vui lòng chọn màu sản phẩm!");
            }
        } catch (e) {
            console.log("Error adding card", e)
        }
    };

    return (
        <>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content" style={{ marginLeft: "-1205px", marginBottom: "-30px", paddingBottom: "30px" }}>
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li>Trang sản phẩm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_details">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="product-details-tab">
                            <div id="img-1" className="zoomWrapper single-zoom">
                                <a href="#">
                                    <img id="zoom1" src={mainImage} alt="big-1" />
                                </a>
                            </div>
                            <div className="product-thumbnail">
                                {product?.galleries?.map((gallery, index) => (
                                    <img
                                        key={index}
                                        src={`http://localhost:8080/upload/${gallery.imagePath}`}
                                        alt={`thumb-${index}`}
                                        onClick={() => setMainImage(`http://localhost:8080/upload/${gallery.imagePath}`)}
                                        className="thumbnail-img"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="product_d_right">
                            <form action="#">
                                <h3><a href="#">{product?.title}</a></h3>
                                <div className="product_nav">
                                    <ul>
                                        <li className="prev"><a href="product-details.html"><i className="fa fa-angle-left"></i></a></li>
                                        <li className="next"><a href="variable-product.html"><i className="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </div>
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
                                    <span className="old_price">{product?.discount}</span>
                                    <span className="current_price">{product?.price}</span>
                                </div>
                                <p>{product?.shortDescription} </p>
                                <div className="product_desc">
                                    <p>{product?.description} </p>
                                </div>
                                <div className="product_variant color">
                                    <h3 style={{ marginBottom: '10px' }}>Màu sắc</h3>
                                    <ul>
                                        {colors.map((color, index) => (
                                            <li key={index}
                                                style={{ padding: '15px', border: '2px solid #333', marginRight: '10px', textAlign: 'center', transition: 'border-color 0.3s ease' }}
                                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ff6b00')}
                                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#333')}
                                                className={selectedColor === color ? 'selected-color' : ''}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleColorChange(color)
                                                }
                                                }
                                            >
                                                <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>{color.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="product_variant quantity">
                                    <label style={{ padding: "10px", float: "left" }}>Số lượng</label>
                                    <input
                                        min="1"
                                        max="20"
                                        value={product?.quantity}
                                        type="number"
                                        name="quantity"
                                        defaultValue="1"
                                        onChange={handleChange}
                                        style={{ width: 800, marginTop: "5px" }}
                                    />
                                    <button className="button" style={{ marginTop: "5px" }} type="submit" onClick={(e) => { e.preventDefault(); handleAddToCard(); }}>Thêm vào giỏ hàng</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;

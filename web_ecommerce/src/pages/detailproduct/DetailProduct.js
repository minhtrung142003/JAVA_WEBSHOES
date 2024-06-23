import React, { useEffect, useState } from 'react';
import './DetailProduct.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import Swal from 'sweetalert2';
import { addToCart } from '../cart/cartSlice';
import { useDispatch } from 'react-redux';

const DetailProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [product, setProduct] = useState({});
    const [mainImage, setMainImage] = useState('');  // set image chính 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [colors, setColors] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const colorMap = {
        "xanh": "blue",
        "Đỏ": "#FF0000",
        "Vàng": "#FFFF00",
        "Trắng": "#FFF8DC",
        "Đen": "#000000"
    };
    // hàm change color
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    // hàm change size
    const handleSizeChange = (size) => {
        setSelectedSize(size);
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

        const fetchSizes = async () => {
            try {
                const response = await axios.get(`${baseURL}sizes`);
                setSizes(response.data);
            } catch (error) {
                console.error("Error fetching sizes:", error);
            }
        };

        fetchColors();
        fetchSizes();
    }, [productId, baseURL]);


    // hàm change quantity
    const handleChange = (e) => {
        let { name, value } = e.target;
        setProduct((pre) => ({ ...pre, [name]: value }));
    };
    // Handle adding to cart
    const handleAddToCart = async () => {
        try {
            if (!currentUser?.id) {
                return Swal.fire({
                    title: "Bạn chưa đăng nhập!",
                    text: "Bạn cần đăng nhập để thực hiện chức năng này!",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Đăng nhập"
                }).then((response) => {
                    if (response.isConfirmed) {
                        navigate('/login')
                    }
                });
            }
            if (product.quantity < 1) {
                return Swal.fire({
                    title: "Số lượng không hợp lệ!",
                    icon: "warning"
                });
            }
            if (product.quantity > 0 && currentUser?.id && selectedColor && selectedSize) {
                const payload = {
                    productId: product?.id,
                    quantity: product?.quantity,
                    userId: currentUser?.id,
                    color: selectedColor,
                    size: selectedSize,
                };
                await dispatch(addToCart(payload)); // Dispatch addToCart action
                Swal.fire({
                    position: "top-end",
                    title: 'Đã thêm vào giỏ hàng!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 800 
                }).then(() => {
                });
            } else {
                Swal.fire({
                    title: "Vui lòng chọn Phân loại hàng!",
                    icon: "warning"
                  });
            }
        } catch (error) {
            console.log("Error adding to cart:", error);
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
                                    {
                                        product && product.discount && (
                                            <span className="old_price">{product?.discount.toLocaleString()}đ</span>
                                        )
                                    }
                                    {
                                        product && product.price && (
                                            <span className="current_price">{product?.price.toLocaleString()}đ</span>
                                        )
                                    }
                                </div>
                                <p>{product?.shortDescription} </p>
                                <div className="product_desc">
                                    <p>{product?.description} </p>
                                </div>
                                <div className="product_variant color" style={{ marginTop: '-20px' }}>
                                    <ul>
                                        {colors.map((color, index) => (
                                            <li key={index}
                                                style={{
                                                    padding: '15px',
                                                    border: '2px solid #333',
                                                    marginRight: '11px',
                                                    textAlign: 'center',
                                                    transition: 'border-color 0.3s ease',
                                                    backgroundColor: selectedColor === color ? colorMap[color.name] : ''
                                                }}
                                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ff6b00')}
                                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#333')}
                                                className={selectedColor === color ? 'selected-color' : ''}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleColorChange(color)
                                                }}
                                            >
                                                <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>{color?.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="product_variant size" style={{ marginTop: '-10px' }}>
                                    <ul>
                                        {sizes.map((size, index) => (
                                            <li key={index}
                                                style={{
                                                    padding: '21px',
                                                    border: '2px solid #333',
                                                    marginRight: '10px',
                                                    textAlign: 'center',
                                                    transition: 'border-color 0.3s ease',
                                                    backgroundColor: selectedSize === size ? '#A9A9A9' : ''
                                                }}
                                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ff6b00')}
                                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#333')}
                                                className={selectedSize === size ? 'selected-size' : ''}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSizeChange(size)
                                                }}
                                            >
                                                <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>{size?.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="product_variant quantity" style={{ marginTop: '-8px' }}>
                                    <label style={{ padding: "10px", float: "left" }}>Số lượng</label>
                                    <input
                                        min="1"
                                        max="10"
                                        value={product.quantity || ""}
                                        type="number"
                                        name="quantity"         
                                        onChange={handleChange}
                                        style={{ width: 800, marginTop: "5px" }}
                                    />
                                    <button className="button" style={{ marginTop: "5px" }} type="submit" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>Thêm vào giỏ hàng</button>
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

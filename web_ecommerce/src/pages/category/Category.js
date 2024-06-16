import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchByCateName } from './CateApi';

function Category() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cateName = queryParams.get("cateName");
    const navigate = useNavigate();
    const [state, setState] = useState({
        listItems: [],
        currentPage: 1,
    });
    const [totalPages, setTotalPages] = useState(0);
    const [priceRange, setPriceRange] = useState([0, 20000000]); // khoảng giá
    const ITEMS_PER_PAGE = 5;

    // hàm filter by categoryName
    const handleSearch = async () => {
        try {
            const data = await searchByCateName(cateName);
            setState((pre) => ({ ...pre, listItems: data?.data, currentPage: 1 }));
            setTotalPages(Math.ceil(data?.data.length / ITEMS_PER_PAGE));
        } catch (error) {
            console.log("Error:", error);
        }
    };

    // xử lý khi user chuyển trang
    const handlePageChange = (pageNumber) => {
        setState((prev) => ({
            ...prev,
            currentPage: pageNumber,
        }));
        window.scrollTo({   // thanh cuộn khi change page
            top: 0,
            behavior: 'smooth',
        });
    };

    // hàm filter theo price and page change
    const getCurrentPageItems = () => {
        const filteredItems = state.listItems.filter(item =>
            item.price >= priceRange[0] && item.price <= priceRange[1]
        );
        const startIndex = (state.currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredItems.slice(startIndex, endIndex);
    };

    // check điều kiện page change
    const canGoPrevious = state.currentPage > 1;
    const canGoNext = state.currentPage < totalPages;

    // render UI
    useEffect(() => {
        handleSearch();
        window.scrollTo(0, 0);
    }, [cateName]);

    // filter by cateogryName
    const handleCategoryClick = (category) => {
        navigate(`/category?cateName=${category}`);
    };

    // filter by price
    const handlePriceRangeChange = (event) => {
        const { name, value } = event.target;
        setPriceRange((prev) => {
            if (name === 'minPrice') {
                return [Number(value), prev[1]];
            } else {
                return [prev[0], Number(value)];
            }
        });
    };
    
    return (
        <>
            <section className="section-content padding-y">
                <div className="container">
                    <div className="card mb-3">
                        <div className="card-body">
                            <ol className="breadcrumb float-left">
                                <li className="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                                <li className="breadcrumb-item">{cateName || ""}</li>
                                <li className="breadcrumb-item active">Chi tiết sản phẩm</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <aside className="col-md-2">
                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">Danh mục sản phẩm </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_1">
                                    <div className="inner">
                                        <ul className="list-menu">
                                            <li><a href="#" onClick={() => handleCategoryClick('NIKE')}>NIKE</a></li>
                                            <li><a href="#" onClick={() => handleCategoryClick('ADIDAS')}>ADIDAS</a></li>
                                            <li><a href="#" onClick={() => handleCategoryClick('JORDAN')}>JORDAN</a></li>
                                            <li><a href="#" onClick={() => handleCategoryClick('YEEZY')}>YEEZY</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3">Khoảng giá</a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_3">
                                    <div className="inner">
                                        <input type="range" className="custom-range" min="0" max="20000000" name="maxPrice" onChange={handlePriceRangeChange} value={priceRange[1]} />
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Nhỏ</label>
                                                <input className="form-control" placeholder="1,500,000" type="number" name="minPrice" value={priceRange[0]} onChange={handlePriceRangeChange} />
                                            </div>
                                            <div className="form-group text-right col-md-6">
                                                <label>Lớn</label>
                                                <input className="form-control" placeholder="20,000,000" type="number" name="maxPrice" value={priceRange[1]} onChange={handlePriceRangeChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </aside>
                        <main className="col-md-10">
                            <header className="mb-3">
                                <div className="form-inline">
                                    <strong className="mr-md-auto">{state?.listItems?.length} Sản phẩm </strong>
                                    <select className="mr-2 form-control">
                                        <option>Mục mới nhất</option>
                                        <option>Bán chạy</option>
                                        <option>Phổ biến nhất</option>
                                        <option>Rẻ nhất</option>
                                    </select>
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-light" data-toggle="tooltip" title="List view">
                                            <i className="fa fa-bars"></i></a>
                                        <a href="#" className="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                            <i className="fa fa-th"></i></a>
                                    </div>
                                </div>
                            </header>
                            <div style={{ minHeight: 550 }}>
                                {getCurrentPageItems()?.map((i, index) => {
                                    return (
                                        <article className="card card-product-list" key={index}>
                                            <div className="row no-gutters">
                                                <aside className="col-md-3">
                                                    <Link to={`/detailproduct?productId=${i.id}`} className="img-wrap">
                                                        <span className="badge badge-danger"> NEW </span>
                                                        <img src={
                                                            i?.galleries[0]?.imagePath
                                                                ? "http://localhost:8080/upload/" +
                                                                i?.galleries[0]?.imagePath
                                                                : ""
                                                        } />
                                                    </Link>
                                                </aside>
                                                <div className="col-md-6">
                                                    <div className="info-main">
                                                        <Link to={`/detailproduct?productId=${i.id}`} className="h5 title">{i?.title}</Link>
                                                        <div className="rating-wrap mb-2">
                                                            <ul className="rating-stars">
                                                                <li style={{ width: "100%" }} className="stars-active">
                                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <div className="label-rating">9/10</div>
                                                        </div>
                                                        <p> {i?.shortDescription} </p>
                                                        <p> {i?.description} </p>
                                                    </div>
                                                </div>
                                                <aside className="col-sm-3">
                                                    <div className="info-aside">
                                                        <div className="price-wrap">
                                                            <span className="h5 price" style={{ color: "black" }}>{i?.price}đ</span>
                                                            <small className="text-muted">/Sản phẩm</small>
                                                        </div>
                                                        <small className="text-warning">Phí vận chuyển miễn phí</small>
                                                        <p className="text-muted mt-3">Nhà cung cấp {i?.brand}</p>
                                                        <p className="mt-3">
                                                            <Link to={`/detailproduct?productId=${i.id}`} className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Liên hệ ngay</Link>
                                                            <Link to={`/detailproduct?productId=${i.id}`} className="btn btn-primary"> <i className="fa fa-cart-plus"></i> Mua ngay </Link>
                                                        </p>
                                                    </div>
                                                </aside>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                            <nav className="mb-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className={`page-item ${!canGoPrevious ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(state.currentPage - 1)}>Trước</button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li className={`page-item ${state.currentPage === i + 1 ? 'active' : ''}`} key={i}>
                                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${!canGoNext ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(state.currentPage + 1)}>Sau</button>
                                    </li>
                                </ul>
                            </nav>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;

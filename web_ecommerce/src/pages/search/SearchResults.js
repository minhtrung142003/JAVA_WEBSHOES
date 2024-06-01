import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import "./css/bootstrap.css"
import "./css/bootstrap.css.map"
import "./css/responsive.css"
import "./css/ui.css"
import "./css/ui.css.map"

const SearchResults = () => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [state, setState] = useState({
        listItems: [], // lưu trữ danh sách sp
        currentPage: 1 // trang hiện tại và tổng trang
    })

    // tạo và lưu tổng trang
    const [totalPages, setTotalPages] = useState(0);
    const ITEMS_PER_PAGE = 5;

    // xử lý khi user chuyển trang
    const handlePageChange = (pageNumber) => {
        setState((prev) => ({
            ...prev,
            currentPage: pageNumber
        }));
        window.scrollTo({   // thanh cuộn khi change page
            top: 0,
            behavior: 'smooth',
        });
    };
    // call api filter theo search
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('searchTerm');
        setSearchTerm(searchQuery);
        console.log('Search term:', searchQuery);
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/search?search=${searchQuery}`);
                setSearchResults(response.data);
                setTotalPages(Math.ceil(response?.data.length / ITEMS_PER_PAGE));

            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };
        fetchSearchResults();
    }, [location.search]);

    // hiển thị kết quả tìm kiếm với page
    const displayResults = searchResults.slice(
        (state.currentPage - 1) * ITEMS_PER_PAGE,
        state.currentPage * ITEMS_PER_PAGE
    );
    return (
        <div>
            <section className="section-content padding-y">
                <div className="container">
                    <div className="card mb-3">
                        <div className="card-body">
                            <ol className="breadcrumb float-left">
                                <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                <li className="breadcrumb-item"><a href="#" >Tìm kiếm</a></li>
                                <li className="breadcrumb-item"><a href="#" >{searchTerm}</a></li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <aside className="col-md-2">
                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> DANH MỤC SẢN PHẨM </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_2">
                                    <div className="inner">
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" className="custom-control-input" />
                                            <div className="custom-control-label">Nike
                                                <b className="badge badge-pill badge-light float-right">120</b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" className="custom-control-input" />
                                            <div className="custom-control-label">Adidas
                                                <b className="badge badge-pill badge-light float-right">15</b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" className="custom-control-input" />
                                            <div className="custom-control-label">Jordan
                                                <b className="badge badge-pill badge-light float-right">35</b>
                                            </div>
                                        </label>
                                        <label className="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" className="custom-control-input" />
                                            <div className="custom-control-label">Yeezy
                                                <b className="badge badge-pill badge-light float-right">89</b>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </article>

                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Size giày </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_4">
                                    <div className="inner">
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> 39 </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> 40 </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> 41 </span>
                                        </label>
                                        <label className="checkbox-btn">
                                            <input type="checkbox" />
                                            <span className="btn btn-light"> 42 </span>
                                        </label>
                                    </div>
                                </div>
                            </article>
                        </aside>

                        <main className="col-md-10">
                            <header className="mb-3">
                                <div className="form-inline">
                                    <strong className="mr-md-auto">
                                        {searchResults.length} Sản phẩm
                                    </strong>
                                    <div className="btn-group">
                                        <a href="page-listing-grid.html" className="btn btn-light" data-toggle="tooltip" title="List view">
                                            <i className="fa fa-bars"></i>
                                        </a>
                                        <a href="page-listing-large.html" className="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                            <i className="fa fa-th"></i>
                                        </a>
                                    </div>
                                </div>
                            </header>
                            {displayResults.map(product => (
                                <article className="card card-product-list" key={product.id}>
                                    <div className="row no-gutters">
                                        <aside className="col-md-3">
                                            <div className="img-wrap">
                                                <Link to={`/detailproduct?productId=${product.id}`} className="img-wrap">
                                                    <span className="badge badge-danger"> NEW </span>
                                                    <img src={product?.galleries?.length > 0 ? `http://localhost:8080/upload/${product.galleries[0].imagePath}` : ''} alt={product.title} />
                                                </Link>
                                            </div>
                                        </aside>
                                        <div className="col-md-6">
                                            <div className="info-main">
                                                <Link to={`/products/${product.id}`} className="h5 title">{product.title}</Link>
                                                <div className="rating-wrap mb-2">
                                                    <ul className="rating-stars">
                                                        <li style={{ width: '100%' }} className="stars-active">
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
                                                <p className="mb-3">
                                                    {product.shortDescription}
                                                </p>
                                                <div className="price mt-1 " style={{ color: 'red' }}>{product.price}đ</div>
                                                <p> {product.description} </p>
                                            </div>
                                        </div>
                                        <aside className="col-sm-3">
                                            <div className="info-aside">
                                                <div className="price-wrap">
                                                    <span className="h5 price">{product.price}đ</span>
                                                    <small className="text-muted">/per item</small>
                                                    <p className="h5 price" style={{ color: 'red' }}>10%</p>
                                                </div>
                                                <small className="text-warning">Phí vận chuyển</small>
                                                <p className="mt-3">
                                                    <a href="#" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Liên hệ nhà cung cấp </a>
                                                </p>
                                                <label className="custom-control mt-3 custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <div className="custom-control-label">Thêm vào để so sánh
                                                    </div>
                                                </label>
                                            </div>
                                        </aside>
                                    </div>
                                </article>
                            ))}
                            <nav className="mb-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className={`page-item ${state.currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(state.currentPage - 1)}>Trang trước</button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i} className={`page-item ${state.currentPage === i + 1 ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${state.currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(state.currentPage + 1)}>Trang sau</button>
                                    </li>
                                </ul>
                            </nav>
                            <div className="box text-center">
                                <p>Bạn đã tìm thấy những gì bạn đang tìm kiếm?</p>
                                <a href="" className="btn btn-light">Có</a>
                                <a href="" className="btn btn-light">Không</a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <section className="padding-y-lg bg-light border-top">
                <div className="container">

                    <p className="pb-2 text-center">Cung cấp các xu hướng sản phẩm mới nhất và tin tức trong ngành ngay tới hộp thư đến của bạn</p>

                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-sm-6">
                            <form className="form-row">
                                <div className="col-8">
                                    <input className="form-control" placeholder="Email của bạn" type="email" />
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-block btn-warning"> <i className="fa fa-envelope"></i> Đăng ký </button>
                                </div>
                            </form>
                            <small className="form-text">Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ ba. </small>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SearchResults

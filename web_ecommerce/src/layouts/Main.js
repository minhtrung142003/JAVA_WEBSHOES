
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import DetailProduct from '../pages/detailproduct/DetailProduct';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Cart from '../pages/cart/Cart';
import Payment from '../pages/payment/Payment';
import History from '../pages/history/History';
import SearchResults from '../pages/search/SearchResults';
import Category from '../pages/category/Category';
import Checkout from '../pages/payment/Checkout';
import Verify from '../pages/register/Verify';
import About from '../pages/menu/About';
import Blog from '../pages/menu/Blog';
import Contact from '../pages/menu/Contact';
import Tuyendung from '../pages/menu/Tuyendung';
import MyAccount from '../pages/account/MyAccount';

const Main = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detailproduct" element={<DetailProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/payment" element={<Payment />} /> */}
      <Route path="/history" element={<History />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/category" element={<Category />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tuyendung" element={<Tuyendung />} />
      <Route path="/myAccount" element={<MyAccount />} />
    </Routes>
  </Router>
  )
}

export default Main


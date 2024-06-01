import React from 'react';
import './Tuyendung.css';

const Tuyendung = () => {
  return (
    <div className="recruitment-container">
      <h1 className="heading">Tham Gia Đội Ngũ Của Chúng Tôi</h1>
      <p className="subheading">Chúng tôi đang tìm kiếm những cá nhân tài năng để gia nhập đội ngũ năng động của chúng tôi.</p>

      <div className="job-listings">
        <div className="job-card">
          <h2 className="job-title">Nhân Viên Bán Hàng</h2>
          <p className="job-description">
            Chúng tôi cần tuyển Nhân Viên Bán Hàng với kinh nghiệm trong lĩnh vực bán lẻ và chăm sóc khách hàng. 
            Yêu cầu khả năng giao tiếp tốt và làm việc theo ca.
          </p>
          <button className="apply-button">Ứng Tuyển Ngay</button>
        </div>
        
        <div className="job-card">
          <h2 className="job-title">Nhân Viên Kho</h2>
          <p className="job-description">
            Tìm kiếm Nhân Viên Kho với kinh nghiệm quản lý hàng hóa và sắp xếp kho. 
            Yêu cầu cẩn thận, tỉ mỉ và có sức khỏe tốt.
          </p>
          <button className="apply-button" style={{marginTop:'20px'}}>Ứng Tuyển Ngay</button>
        </div>

        <div className="job-card">
          <h2 className="job-title">Nhân Viên Marketing</h2>
          <p className="job-description">
            Cần tuyển Nhân Viên Marketing sáng tạo và năng động, có kinh nghiệm trong quảng cáo trực tuyến và quản lý mạng xã hội. 
            Thành thạo công cụ quảng cáo và có khả năng làm việc độc lập.
          </p>
          <button className="apply-button">Ứng Tuyển Ngay</button>
        </div>
      </div>
    </div>
  );
}

export default Tuyendung;

import React from "react";
import { NavLink } from "react-router-dom";

export default function BaiDang() {
  return (
    <div id="news">
      <div className="container">
        <div className="noidungBaiDang">
          <h1>News</h1>
        </div>
        <div className="row">
          <div className="cot1 col-sm-6 .col-12  ">
            <div className="baiDang1 khungHinh">
              <div className="noiDung1 text-center">
                <h3>KEM CHỐNG NẮNG</h3>
              </div>
              <div className="overLayBaiDang1">
                <h3>CHÚNG TA CẦN KEM CHỐNG NẮNG HƠN BAO GIỜ HẾT</h3>
                <p>Biến đổi khí hậu ảnh hưởng đến da như thế nào?</p>
                <p>Cách chọn kem chống nắng phù hợp với loại da</p>
                <p>Kem chống nắng có an toàn không?</p>
                <p>. . .</p>
                <NavLink to="/slide1" className="">
                  <button className="btn btn-success">
                    <a>XEM THÊM</a>
                    <i className="fas fa-arrow-circle-right mx-2"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="cot2 col-sm-6 .col-12 ">
            <div className="baiDang2 khungHinh">
              <div className="noiDung2 text-center">
                <h3>KEM CHỐNG NẮNG</h3>
              </div>
              <div className="overLayBaiDang2">
                <h3>CHÚNG TA CẦN KEM CHỐNG NẮNG HƠN BAO GIỜ HẾT</h3>
                <p>Biến đổi khí hậu ảnh hưởng đến da như thế nào?</p>
                <p>Cách chọn kem chống nắng phù hợp với loại da</p>
                <p>Kem chống nắng có an toàn không?</p>
                <p>. . .</p>
                <NavLink to="/slide1" className="">
                  <button className="btn btn-success">
                    <a>XEM THÊM</a>
                    <i className="fas fa-arrow-circle-right mx-2"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

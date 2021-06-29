import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { themSanPham } from "../../Redux/Action/QuanLySanPhamAction";

import { NavLink  } from "react-router-dom";
import DetailProducts from "./DetailProducts";

import {IMAGE_API} from "../../Redux/Const/Api"

export default function ProductOfCategory(m) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <div className="pro1  m-3">
      <div className="card khungHinh p-3 "style={{width:"270px"}}>
        <div className="imgProduct1">
          <img alt="hinh anh san pham" className="w-100" 
          src={m.imageUrl[1]? IMAGE_API + m.imageUrl[1].split("/")[1] : "https://picsum.photos/images"}  />
          <button
            className="xem1 btn btn-light"
            onClick={() => setModalIsOpen(true)}
          >
            XEM NHANH
          </button>

          <Modal isOpen={modalIsOpen}>
            <div className="nutThoatModal text-right">
              <button
                className=" mt-4 btn btn-danger"
                style={{ borderRadius: "0" }}
                onClick={() => setModalIsOpen(false)}
              >
                X
              </button>
            </div>

            <div className="container">
              <div className="row khungHinh p-4">
                <div className="col-xl-6 imgModal">
                  <img
                  alt="hinh anh san pham"
                    className=""
                    src={m.imageUrl[0]? IMAGE_API + m.imageUrl[0].split("/")[1] : "https://picsum.photos/images"}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-xl-6 contentModal">
                  <h3>{m.tenSanPham}</h3>

                  <p style={{ fontWeight: 700 }}>Thông tin </p>
                  <p>{m.thanhPhan}</p>
                  <p style={{ fontWeight: 700 }}>Công dụng</p>
                  <p>{m.congDung}</p>

                  <p style={{ fontWeight: 700 }}>Loại da</p>
                  <p>{m.loaiDaPhuhop}</p>
                  <div className=" d-flex">
                    <p
                      className=" fw-bolder text-danger"
                      style={{ fontWeight: 700 }}
                    >
                      {m.donGiaMoi}
                    </p>
                    <p
                      className=" mx-2"
                      style={{ textDecoration: "line-through" }}
                    >
                      {m.donGiaCu}
                    </p>
                  </div>
                  <button
                    className=" btn btn-success w-100"
                    style={{ borderRadius: "0" }}
                    onClick={() => {
                      dispatch(themSanPham(m));
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>

        <div className="card-body">
          <NavLink  to={`detail/${m._id}`} className="text-dark">

            <h6 className="tieuDeCard">LA ROCHE POSAY</h6>
            <p className="noiDungCard">{m.tenSanPham}</p>
            <div className="gia d-flex">
              <p className="giaHienTai fw-bolder text-danger">{m.donGiaMoi}</p>
              <p className="giaCu mx-2 text-decoration-line-through">
                {m.donGiaCu}
              </p>
            </div>
            
          </NavLink >
          <button
              className="btn btn-success w-100"
              onClick={() => {
                dispatch(themSanPham(m));
              }}
            >
              Thêm vào giỏ hàng
            </button>
        </div>
      </div>
    </div>
  );
}

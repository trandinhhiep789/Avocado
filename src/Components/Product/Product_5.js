import React, { useState } from "react";
import Modal from "react-modal";
import nam from "../../Asset/Carousel/xit_chong_nang_1.png";
import DSSP from "../../Data/data.json";
import { useSelector, useDispatch } from "react-redux";
import { themSanPham } from "../../Redux/Action/QuanLySanPhamAction";

const sp = DSSP.filter((spham) => spham.maSanPham == 4);

export default function Product_5() {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="pro5 m-3">
      <div className="card khungHinh p-3" >
        {/* <img src={nam} className="card-img-top" alt="..." /> */}
        <div className="imgProduct5">
          <button
            className="xem5 btn btn-light"
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
              <div className="row khungHinh">
                <div className="col-xl-6 imgModal">
                  <img className="" src={nam} style={{ width: "100%" }} />
                </div>
                <div className="col-xl-6 contentModal">
                  <h3>{sp[0].tenSanPham}</h3>

                  <p style={{ fontWeight: 700 }}>Thông tin</p>
                  <p>{sp[0].thongTinSanPham}</p>
                  <p style={{ fontWeight: 700 }}>Công dụng</p>
                  <p>{sp[0].congDung}</p>

                  <p style={{ fontWeight: 700 }}>Loại da</p>
                  <p>{sp[0].loaiDaPhuhop}</p>
                  <div className=" d-flex">
                    <p className=" fw-bolder text-danger" style={{ fontWeight: 700 }}>420,000đ</p>
                    <p
                      className=" mx-2"
                      style={{ textDecoration: "line-through" }}
                    >
                      500,000đ
                    </p>
                  </div>
                  <button
                    className="btn btn-success w-100"
                    style={{ borderRadius: "0" }}
                    onClick={() => {
                      dispatch(themSanPham(sp));
                    }}
                  >
                    Thêm vào giò hàng
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="card-body">
          <h6 className="tieuDeCard">LA ROCHE POSAY</h6>
          <p className="noiDungCard">
          {sp[0].tenSanPham}
          </p>
          <div className="gia d-flex">
            <p className="giaHienTai fw-bolder text-danger">420,000đ</p>
            <p className="giaCu mx-2 text-decoration-line-through">500,000đ</p>
          </div>
          <button
            href="#"
            className="btn btn-success w-100"
            onClick={() => {
              dispatch(themSanPham(sp));
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

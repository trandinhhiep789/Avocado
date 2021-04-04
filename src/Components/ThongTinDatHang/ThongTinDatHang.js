import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import GioHang from "../GioHang/GioHang";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../Util/history";

import { setLaiGioHang } from "../../Redux/Action/QuanLySanPhamAction";

export default function ThongTinDatHang() {
  const dispatch = useDispatch();
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);

  const locThongTinChinh = () => {
    return mangGioHang.map((sp, i) => {
      return (
        <>
          `ma san pham :{sp.maSanPham}, so luong: {sp.soLuong} ||`
        </>
      );
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4jtx9bp",
        "template_20l6u1s",
        e.target,
        "user_nkVTtGK1ffFC3r91hyDiR"
      )
      .then(
        (result) => {
          Swal.fire("Thông báo", "Đặt hàng thành công", "success");
          console.log(result.text);
          dispatch(
            setLaiGioHang([
              {
                maSanPham: 0,
                tenSanPham: "",
                thongTinSanPham: "thongTinSanPham",
                congDung: "congDung",
                loaiDaPhuHop: "loaiDaPhuHop",
                huongDanSuDung: "huongDanSuDung",
                soLuong: 0,
                donGia: 0,
              },
            ])
          );

          history.push("/trangchu");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contentDatHang">
      <div className="container">
        <div>
          <form onSubmit={sendEmail}>
            <h1>Thông tin thanh toán</h1>
            <div className="my-3">
              Họ và tên
              <input type="text" name="tenKhachHang" className="form-control" />
            </div>
            <div className="my-3">
              Số điện thoại
              <input type="text" name="soDienThoai" className="form-control" />
            </div>
            <div className="my-3">
              Địa chỉ
              <input type="text" name="diaChi" className="form-control" />
            </div>
            <div className="my-3">
              Thông tin đơn hàng
              <textarea
                type="text"
                name="thongTinDonHang"
                className="form-control"
                // value={locThongTinChinh().map((sp, i) => {
                //   return (
                //     <>
                //       `ma san pham :{sp.maSanPham}, so luong: {sp.soLuong} ||`
                //     </>
                //   );
                // })}
              />
            </div>
            <button
              className="btn btn-success w-100"
              style={{ borderRadius: "0" }}
            >
              Đặt hàng!
            </button>
          </form>
        </div>
        <div>{locThongTinChinh()}</div>
      </div>
    </div>
  );
}

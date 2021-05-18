import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import GioHang from "../GioHang/GioHang";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../Util/history";

import { setLaiGioHang } from "../../Redux/Action/QuanLySanPhamAction";

//formik

import { Formik, Form } from 'formik';


//validations
import * as Yup from 'yup'
import { thongTinDatHang_SChema } from "../../Validations/ThongTinDatHang_Validations"

export default function ThongTinDatHang() {

  const dispatch = useDispatch();
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);
  const mangGioHangDaDat = useSelector((state) => state.stateSanPham.gioHang);

  const renderGiohang = () => {
    return mangGioHangDaDat.map((sp, i) => {
      return (
        <tr key={i}>
          <td>
            <img width={100} height={100} src={sp.hinhAnh} />
            {/* {sp.hinhAnh} */}
          </td>
          <td>{sp.tenSanPham}</td>
          <td>
            {/* <button
              className=""
              onClick={() => {
                dispatch(tangGiamSanPham(sp.maSanPham, false));
              }}
            >
              -
            </button> */}
            Số lượng:
            {sp.soLuong}
            {/* <button
              className=""
              onClick={() => {
                dispatch(tangGiamSanPham(sp.maSanPham, true));
              }}
            >
              +
            </button> */}
          </td>
          {/* <td>{sp.donGia}</td> */}
          {/* <td>{sp.soLuong * sp.donGia}</td> */}
          {/* <td>
            <button
              onClick={() => {
                dispatch(xoaSanPham(sp.maSanPham));
              }}
            >
              Xóa
            </button>
          </td> */}
        </tr>
      );
    });
  };
  const tongTien = () => {
    return mangGioHang.reduce((tong, mangGioHang, i) => {
      return (tong += mangGioHang.soLuong * mangGioHang.donGia);
    }, 0);
  };

  let maHaThongTin = mangGioHang.reduce((thongTin, sp, index, mangGioHang) => {
    return `${thongTin} Mã sản phẩm:${sp.maSanPham} || Số lượng: ${sp.soLuong}, `;
  }, "");

  const sendEmail = async (e) => {
    e.preventDefault();

    let formData = {
      tenKhachHang: e.target[0].value,
      soDienThoai: e.target[1].value,
      diaChi: e.target[2].value,
    }

    const isValid = await thongTinDatHang_SChema.isValid(formData);

    console.log(isValid);
    console.log(formData);

    if (isValid) {
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
  }



  //   emailjs
  //     .sendForm(
  //       "service_4jtx9bp",
  //       "template_20l6u1s",
  //       e.target,
  //       "user_nkVTtGK1ffFC3r91hyDiR"
  //     )
  //     .then(
  //       (result) => {
  //         Swal.fire("Thông báo", "Đặt hàng thành công", "success");
  //         console.log(result.text);
  //         dispatch(
  //           setLaiGioHang([
  //             {
  //               maSanPham: 0,
  //               tenSanPham: "",
  //               thongTinSanPham: "thongTinSanPham",
  //               congDung: "congDung",
  //               loaiDaPhuHop: "loaiDaPhuHop",
  //               huongDanSuDung: "huongDanSuDung",
  //               soLuong: 0,
  //               donGia: 0,
  //             },
  //           ])
  //         );

  //         history.push("/trangchu");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }

  return (
    <div className="contentDatHang">
      <div className="container">
        <div className="row">

          <div className="col-12 col-xl-6">
            <Formik
              initialValues={{
                tenKhachHang: '',
                soDienThoai: '',
                diaChi: '',
              }}
              
              // validationSchema={}

              >
              {formik => (
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
                      value={maHaThongTin}
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

              )}

            </Formik>

          </div>



          <div className="col-12 col-xl-6">
            {renderGiohang()}
            <br></br>
            <div style={{ fontWeight: "700" }}>
              Tổng tiền (chưa tính phí ship):
            </div>
            <div style={{ fontWeight: "700", fontSize: "40px" }}>
              {tongTien()},000 vnđ
            </div>
          </div>
        </div>
        {/* <div>{maHaThongTin}</div> */}
      </div>
    </div>
  );
}

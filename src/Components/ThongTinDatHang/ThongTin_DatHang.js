import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import GioHang from "../GioHang/GioHang";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../Util/history";
import { IMAGE_API } from "../../Redux/Const/Api";
import { setLaiGioHang } from "../../Redux/Action/QuanLySanPhamAction";
import {tongTienNguoiDungAction} from "../../Redux/Action/QuanLyNguoiDungActions"
import {GET_TONG_TIEN} from "../../Redux/Const/Api"
import PayPal from "./PayPal"


//formik

import { Formik, Form } from "formik";

//validations
import * as Yup from "yup";
import { thongTinDatHang_SChema } from "../../Validations/ThongTinDatHang_Validations";
import { TextField } from "../../Validations/TextField";

export default function ThongTin_DatHang() {
  const dispatch = useDispatch();
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);
  const mangGioHangDaDat = useSelector((state) => state.stateSanPham.gioHang);

  const [checkout, setCheckOut] = useState(false)

  const renderGiohang = () => {
    return mangGioHangDaDat.map((sp, i) => {
      return (
        <div>
          <tr key={i}>
            <td>
              {sp.imageUrl ? (
                <img
                  alt="hinh anh san pham"
                  width={100}
                  height={100}
                  src={
                    sp.imageUrl[0]
                      ? IMAGE_API + sp.imageUrl[1].split("/")[1]
                      : "https://picsum.photos/images"
                  }
                />
              ) : (
                ""
              )}
            </td>
            <td className="tenSp_TrongGioHang">
              <p
                style={{
                  width: "240px",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {sp.tenSanPham}
              </p>
            </td>
            <td>
              S??? l?????ng:
              {sp.soLuong}
            </td>
          </tr>
        </div>
      );
    });
  };
  const tongTien = () => {
    return mangGioHang.reduce((tong, mangGioHang, i) => {
      return (tong += mangGioHang.soLuong * mangGioHang.donGiaMoi);
    }, 0);
  };
  var totalPrice
  if(tongTien() > 0){
    totalPrice = tongTien()
    console.log(totalPrice)
  }

  let maHoaThongTin = mangGioHang.reduce(
    (thongTin, sp, index, mangGioHang) => {
      return `${thongTin} T???ng ti???n:${tongTien()}, T??n:${
        sp.tenSanPham
      } || S??? l?????ng: ${sp.soLuong}, `;
    },
    ""
  );

  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
  console.log(userLogin);

  function sendEmail(e) {
    e.preventDefault();

    // console.log(e.target)

    if(userLogin){
      // let dataTongTien = {...userLogin._id,tongTien}
      // dispatch(tongTienNguoiDungAction(dataTongTien))
      console.log(userLogin)
    }

    emailjs
      .sendForm(
        "service_4jtx9bp",
        "template_20l6u1s",
        e.target,
        "user_nkVTtGK1ffFC3r91hyDiR"
      )
      .then(
        (result) => {
          Swal.fire("Th??ng b??o", "?????t h??ng th??nh c??ng", "success");
          console.log(result.text);
          dispatch(
            setLaiGioHang([
              {
                _id: 0,
                tenSanPham: "",
                thongTinSanPham: "thongTinSanPham",
                congDung: "congDung",
                loaiDaPhuHop: "loaiDaPhuHop",
                huongDanSuDung: "huongDanSuDung",
                soLuong: 0,
                donGia: 0,
                imagleUrl: [],
              },
            ])
          );

          history.push("/trangchu");
        },
        (error) => {
          Swal.fire("Th??ng b??o", error.text, "error");
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="contentDatHang">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6">
            <form className="khungHinh m-4 p-4" onSubmit={sendEmail}>
              <h3 className="m-4">Th??ng tin ?????t h??ng </h3>
              <div className="form-group">
                <h6 className="font-weight-light" style={{ padding: 0 }}>
                  T??n ng?????i nh???n
                </h6>
                <input
                  placeholder="T??n ng?????i nh???n"
                  type="text"
                  className="form-control "
                  name="tenKhachHang"
                />
              </div>
              <div className="form-group">
                <h6 className="font-weight-light" style={{ padding: 0 }}>
                  S??? ??i???n tho???i
                </h6>
                <input
                  placeholder="S??? ??i???n tho???i"
                  type="text"
                  className="form-control "
                  name="soDienThoai"
                />
              </div>
              <div className="form-group">
                <h6 className="font-weight-light" style={{ padding: 0 }}>
                  ?????a ch??? giao h??ng
                </h6>
                <input
                  placeholder="?????a ch??? giao h??ng"
                  type="text"
                  className="form-control "
                  name="diaChi"
                />
              </div>
              <div className="form-group">
                <h6 className="font-weight-light" style={{ padding: 0 }}>
                  Th??ng tin s???n ph???m
                </h6>
                <textarea
                  placeholder={maHoaThongTin}
                  name="thongTinDonHang"
                  value={maHoaThongTin}
                  type="text"
                  className="form-control "
                />
              </div>

              <button style={{fontSize:"30px"}} className="btn btn-info mt-5 w-100">Thanh to??n khi nh???n h??ng</button>
              <div className="text-center my-4"><i>Thanh to??n online</i></div>
              {/* {checkout ? ( (totalPrice > 0)?<PayPal tongTien={totalPrice}/>:""
              
            ):(<button className="btn btn-info mt-5 w-100"
                onClick={() => {setCheckOut(true)}}>Check out</button>)} */}
                <PayPal tongTien={totalPrice}/>
            </form>
            
          </div>

          <div className="col-12 col-xl-6">
            <h3 className="m-4">Th??ng tin s???n ph???m </h3>
            {renderGiohang()}
            <br></br>
            <div style={{ fontWeight: "700" }}>T???ng ti???n:</div>
            <div
              className="text-danger"
              style={{ fontWeight: "700", fontSize: "40px" }}
            >
              {tongTien()},000 vn??
            </div>
          </div>
        </div>
        {/* <div>{thongTinDonHang}</div> */}
      </div>
    </div>
  );
}

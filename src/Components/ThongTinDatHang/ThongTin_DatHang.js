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
import { TextField } from "../../Validations/TextField";

export default function ThongTin_DatHang() {

  const dispatch = useDispatch();
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);
  const mangGioHangDaDat = useSelector((state) => state.stateSanPham.gioHang);

  const renderGiohang = () => {
    return mangGioHangDaDat.map((sp, i) => {
      return (
        <div>
          <tr key={i}>
            <td>
              <img width={100} height={100} src={sp.hinhAnh} />
              {/* {sp.hinhAnh} */}
            </td>
            <td className="tenSp_TrongGioHang">{sp.tenSanPham}</td>
            <td>
              Số lượng:
            {sp.soLuong}
            </td>
          </tr>
        </div>
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

    //các khách, (cũng dc nhưng chưa show lỗi lên màn hình choa user)
    // let formData = {
    //   tenKhachHang: e.target[0].value,
    //   soDienThoai: e.target[1].value,
    //   diaChi: e.target[2].value,
    // }

    // const isValid = await thongTinDatHang_SChema.isValid(formData);

    // console.log(isValid);
    // console.log(formData);

    // if (isValid) {
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


    emailjs.sendForm(
      "service_4jtx9bp",
      "template_20l6u1s",
      e.target,
      "user_nkVTtGK1ffFC3r91hyDiR"
    ).then(
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

  const validate = Yup.object({
    tenKhachHang: Yup.string().required('Không được bỏ trống'),
    soDienThoai: Yup.number('Vui lòng nhập số điện thoại').required('Không được bỏ trống'),
    diaChi: Yup.string().required('Không được bỏ trống'),
  })


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

              validationSchema={validate}

              onSubmit={values => {
                console.log(values)
                emailjs.sendForm(
                  "service_4jtx9bp",
                  "template_20l6u1s",
                  values.target,
                  "user_nkVTtGK1ffFC3r91hyDiR"
                ).then(
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
            
                  values.target.reset();
              }}


            >
              {formik => (
                <Form >
                  <h1>Thông tin thanh toán</h1>

                  <TextField className="my-3" label="Họ và tên" name="tenKhachHang" type="text" />


                  <TextField className="my-3" label="Số điện thoai" name="soDienThoai" type="text" />


                  <TextField className="my-3" label="Địa chỉ" name="diaChi" type="text" />


                  <div className="my-3">
                    Thông tin đơn hàng
                  <textarea
                      type="text"
                      name="thongTinDonHang"
                      className="form-control"
                      value={maHaThongTin}
                    />
                  </div>

                  <button
                    className="btn btn-success w-100"
                    style={{ borderRadius: "0" }}
                    type="submit"
                  >
                    Đặt hàng!
                  </button>

                </Form>

              )}

            </Formik>

          </div>



          <div className="col-12 col-xl-6">

            <h3 className="m-4">Thông tin sản phẩm </h3>
            {renderGiohang()}
            <br></br>
            <div style={{ fontWeight: "700" }}>
              Tổng tiền:
            </div>
            <div className="text-danger" style={{ fontWeight: "700", fontSize: "40px" }}>
              {tongTien()},000 vnđ
            </div>
          </div>
        </div>
        {/* <div>{maHaThongTin}</div> */}
      </div>
    </div>
  );
}

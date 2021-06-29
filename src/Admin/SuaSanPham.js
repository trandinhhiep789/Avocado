/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { DETAIL_PRODUCT_API } from "../Redux/Const/Api";
import { suaSanPhamAction } from "../Redux/Action/QuanLySanPhamAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const loginUserSchema = yup.object().shape({
  //   tenSanPham: yup.string().required("*tenSanPham không được bỏ trống!"),
  //   thongTinThuongHieu: yup.string().required("*Mật khẩu không được bỏ trống!"),
  donGiaCu: yup.string().matches(/^[0-9]+$/, '*Bắt buộc kí tự số! '),
  donGiaMoi: yup.string().matches(/^[0-9]+$/, '*Bắt buộc kí tự số! '),
});
export default function SuaSanPham({ match }) {
  let params = match.params;
  console.log(match.params);

  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);

  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.onresize = function () {
      setHeight(window.innerHeight);
    };
  }, []);
  const handleSubmit = async (values) => {
    const newValues = { ...values, product_id: detail._id };
    console.log(newValues);
    dispatch(await suaSanPhamAction(newValues));
  };
  const [onOff, setOnOff] = useState(true);
  let onOffPassword = () => {
    setOnOff(!onOff);
  };

  // GET DETAIL PRODUCT
  useEffect(async () => {
    const { data } = await axios.get(
      `${DETAIL_PRODUCT_API}${params.maSanPham}`
    );
    console.log("data detail");
    console.log(data.data._id);
    setDetail(data.data);
    console.log(data.data);
  }, [params.maSanPham]);

  return (
    <div
      className="login"
      style={{
        backgroundImage: "url('./img/bgDangKy.jpg')",
        height,
        color: "white",
      }}
    >
      <Formik
        initialValues={{
          tenSanPham: "",
          thongTinThuongHieu: "",
          congDung: "",
          loaiDaPhuHop: "",
          huongDanSuDung: "",
          donGiaCu: "",
          donGiaMoi: "",
          thanhPhan: "",
        }}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="login__form khungHinh w-100">
            <i className="text-dark d-flex">
              Bạn đang chỉnh sửa sản phẩm:{" "}
              {<p style={{ fontWeight: "700" }}>{detail.tenSanPham}</p>}
            </i>

            <div className="row">
            <div className="col-md">
              {/* sua ten san pham */}
              <div className="login__form-input">
                <div className="formLogin">
                  <i className="fa fa-user-alt"></i>
                  <Field
                    name="tenSanPham"
                    className="form-control"
                    aria-describedby="tenSanPham"
                    placeholder="Sửa tên của sản phẩm"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <span style={{ color: "red", fontStyle: "italic" }}>
                  <ErrorMessage name="tenSanPham" />
                </span>
              </div>

              {/* Sửa tên thông tin thương hiệu */}
              <div className="login__form-input">
                <div className="formLogin">
                  <i className="fa fa-user-alt"></i>
                  <Field
                    name="thongTinThuongHieu"
                    className="form-control"
                    aria-describedby="thongTinThuongHieu"
                    placeholder="Sửa tên thông tin thương hiệu"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <span style={{ color: "red", fontStyle: "italic" }}>
                  <ErrorMessage name="thongTinThuongHieu" />
                </span>
              </div>

              {/* Sửa công dụng */}
              <div className="login__form-input">
                <div className="formLogin">
                  <i className="fa fa-user-alt"></i>
                  <Field
                    name="congDung"
                    className="form-control"
                    aria-describedby="congDung"
                    placeholder="Sửa công dụng"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <span style={{ color: "red", fontStyle: "italic" }}>
                  <ErrorMessage name="congDung" />
                </span>
              </div>

              {/* Sửa loại da phù hợp */}
              <div className="login__form-input">
                <div className="formLogin">
                  <i className="fa fa-user-alt"></i>
                  <Field
                    name="loaiDaPhuHop"
                    className="form-control"
                    aria-describedby="loaiDaPhuHop"
                    placeholder="Sửa loại da phù hợp"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <span style={{ color: "red", fontStyle: "italic" }}>
                  <ErrorMessage name="loaiDaPhuHop" />
                </span>
              </div>
            </div>
            <div className="col-md">
              {/* Sửa hướng dẫn sử dụng */}
            <div className="login__form-input">
              <div className="formLogin">
                <i className="fa fa-user-alt"></i>
                <Field
                  name="huongDanSuDung"
                  className="form-control"
                  aria-describedby="huongDanSuDung"
                  placeholder="Sửa hướng dẫn sử dụng"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="huongDanSuDung" />
              </span>
            </div>

            {/* Sửa đơn gia cũ */}
            <div className="login__form-input">
              <div className="formLogin">
                <i className="fa fa-user-alt"></i>
                <Field
                  name="donGiaCu"
                  className="form-control"
                  aria-describedby="donGiaCu"
                  placeholder="Sửa đơn gia cũ"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="donGiaCu" />
              </span>
            </div>

            {/* Sửa đơn giá mới */}
            <div className="login__form-input">
              <div className="formLogin">
                <i className="fa fa-user-alt"></i>
                <Field
                  name="donGiaMoi"
                  className="form-control"
                  aria-describedby="donGiaMoi"
                  placeholder="Sửa đơn giá mới"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="donGiaMoi" />
              </span>
            </div>

            {/* Sửa thành phần */}
            <div className="login__form-input">
              <div className="formLogin">
                <i className="fa fa-user-alt"></i>
                <Field
                  name="thanhPhan"
                  className="form-control"
                  aria-describedby="thanhPhan"
                  placeholder="Sửa thành phần"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="thanhPhan" />
              </span>
            </div>

            </div>
      
            </div>

            
            
            <div className="login__form-input ">
              <button className="btn" type="submit">
                Sửa
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}

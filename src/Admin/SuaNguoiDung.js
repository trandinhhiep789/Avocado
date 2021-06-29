/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GET_USER_BY_ID} from "../Redux/Const/Api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {suaNguoiDungAction} from "../Redux/Action/QuanLyNguoiDungActions"
import * as yup from "yup";
const loginUserSchema = yup.object().shape({
//   tenUser: yup.string().required("*tenUser không được bỏ trống!"),
//   loaiUser: yup.string().required("*Mật khẩu không được bỏ trống!"),
});
export default function SuaNguoiDung({ match }) {
  let params = match.params;
  console.log(match.params);

  const [detail, setDetail] = useState([]);

  const dispatch = useDispatch();
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.onresize = function () {
      setHeight(window.innerHeight);
    };
  }, []);
  const handleSubmit = async (values) => {
    const newValues = {...values, user_id:detail._id}
    console.log(newValues)
    dispatch(await suaNguoiDungAction(newValues));
  };
  const [onOff, setOnOff] = useState(true);
  let onOffPassword = () => {
    setOnOff(!onOff);
  };

  // GET DETAIL USER
  useEffect(async () => {
    const { data } = await axios.get(
      `${GET_USER_BY_ID}${params.maNguoiDung}`
    );
    console.log("data detail");
    console.log(data.data._id);
    setDetail(data.data);
    console.log(data.data);
  }, [params.maNguoiDung]);

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
          tenUser: "",
          loaiUser: "",
        }}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
            
          <Form className="login__form khungHinh">
               <i className="text-dark d-flex">Bạn đang chỉnh sửa tài khoản: {<p style={{fontWeight:"700"}}>{detail.tenUser}</p>}</i>
            <div className="login__form-logo ">
              {/* <a href='/'><img style={{width:'200px'}} className='logo' alt='...' src='./img/Header/logo_covid.jpg' /></a> */}
            </div>
            <h5 className="">
              {/* Bạn đang chỉnh sữa người dùng có địa chỉ id: {params.maNguoiDung}/ */}
            </h5>
            
            <div className="login__form-input">
              <div className="formLogin">
                <i className="fa fa-user-alt"></i>
                <Field
                  name="tenUser"
                  className="form-control"
                  aria-describedby="tenUser"
                  placeholder="Sửa tên của khách hàng"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="tenUser" />
              </span>
            </div>

            <div className="login__form-input">
              <div className="formLogin">
                <i className="fa fa-user-alt"></i>
                <Field
                  name="loaiUser"
                  className="form-control"
                  aria-describedby="loaiUser"
                  placeholder="Sửa loại người dùng"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="loaiUser" />
              </span>
            </div>
            <div className="login__form-remember">
              {/* <div className='remember__left'>
                                <input id='remember' type='checkbox' className='mr-1' />
                                <label htmlFor="remember" style={{ margin: 0 }}>Ghi nhớ đăng nhập</label>
                            </div>
                            <div className='remember__right'>
                                <a href='/'>Quên mật khẩu?</a>
                            </div> */}
            </div>
            <div className="login__form-input ">
              <button className="btn" type="submit">
                Sửa
              </button>
            </div>
            <div className="login__form-note">
              {/* <span>Bạn chưa có tài khoản?<NavLink to='/signup'> Đăng ký</NavLink></span> */}
            </div>
          </Form>
        )}
      />
    </div>
  
  );
}

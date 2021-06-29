/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState }  from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import axios from "axios";
import {GETALL_CATEGORY} from "../Redux/Const/Api"
import Swal from 'sweetalert2';

// import { animateScroll as stroll } from "react-scroll";
// onClick={() => {
//   stroll.scrollToTop();
// }}


import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
  console.log(userLogin);
  const logOut = () => {
    Swal.fire({
        title: 'Bạn có chắc muốn đăng xuất?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Có',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            window.location.href = '/';
        }
    })
}

  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);

  const tongSoLuongSanPham = () => {
    return mangGioHang.reduce((tong, mangGioHang, i) => {
      return (tong += mangGioHang.soLuong);
    }, 0);
  };

  return (
    <header>
      <div id="header" className="header_main">
        <nav className="navbar navbar-expand-md no-gutters">
          <div className="gioHang">
            <NavLink
              to="/giohang"
              className=""
              style={{ position: "relative" }}
            >
              <i
                className=" mx-1 fas fa-shopping-bag"
                style={{ color: "#428C27" }}
              />
              <p
                className="btn bg-danger text-center "
                style={{
                  position: "absolute",
                  right: "-2px",
                  top: "21px",

                  color: "wheat",
                  fontSize: "12px",
                  width: "22px",
                  height: "22px",
                  fontWeight: "500px",
                  borderRadius: "50%",
                  padding: "1px",
                }}
              >
                {tongSoLuongSanPham()}
              </p>
            </NavLink>
          </div>

          {/* logo */}
          <div className="col-2 text-left">
            <NavLink to="/trangchu">
              <img src="/img/Header/logo_covid.jpg" alt="image" />
              {/* logo tết */}
              {/* <img src="/img/Header/onlinelogomaker-051921-2133-4036-500.jpg" alt="image" /> */}
            </NavLink>
          </div>

          <button
            className="navbar-toggler text-dark"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse-1"
            aria-controls="navbarNav6"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fs-1" style={{ fontSize: "35px" }}></i>
          </button>

          <div className="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1">
            <ul className="navbar-nav justify-content-center">
              {/* <li className="nav-item active" >
                <Link
                  className="nav-link "
                  to="header"
                  smooth={true}
                  duration={1000}
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="products"
                  smooth={true}
                  duration={1000}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="news"
                  smooth={true}
                  duration={1000}
                >
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="aboutus"
                  smooth={true}
                  duration={1000}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="contactus"
                  smooth={true}
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1">
            <ul className="navbar-nav ">
              <li className="nav-item text-right">
                {userLogin.data? (
                  <>
                    <img
                      src="https://picsum.photos/40/40"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                    <br></br>Xin chào {userLogin.data[0].tenUser} <br></br>

                    {userLogin.data[0].loaiUser[0] === "admin"?
                    <NavLink style={{fontSize:"15px"}}  to='/admin/quanlynguoidung'>Admin   </NavLink>:""
                    }

                    
                    <NavLink style={{fontSize:"10px"}}  to='/' className='user__item-link' onClick={() => logOut()}>Đăng xuất</NavLink>
                  </>
                ) : (
                  <NavLink to="/login" className="">
                    <i
                      className=" mx-1 fas fa-user"
                      style={{ color: "#428C27" }}
                    />
                  </NavLink>
                )}
              </li>
              <li>
                <div className="gioHangSau ">
                  <NavLink
                    to="/giohang"
                    className=""
                    style={{ position: "relative" }}
                  >
                    <i
                      className=" mx-1 fas fa-shopping-bag"
                      style={{ color: "#428C27" }}
                    />
                    <p
                      className="btn bg-danger text-center "
                      style={{
                        position: "absolute",
                        right: "-2px",
                        top: "21px",

                        color: "wheat",
                        fontSize: "12px",
                        width: "22px",
                        height: "22px",
                        fontWeight: "500px",
                        borderRadius: "50%",
                        padding: "1px",
                      }}
                    >
                      {tongSoLuongSanPham()}
                    </p>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

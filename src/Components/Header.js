import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
// import { animateScroll as stroll } from "react-scroll";
// onClick={() => {
//   stroll.scrollToTop();
// }}

import { useSelector, useDispatch } from "react-redux";

export default function Header() {
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
                className="text-dark mx-1 fas fa-shopping-bag"
                style={{ color: "#428C27" }}
              />
              <p
                className="btn bg-danger text-center "
                style={{
                  position: "absolute",
                  right: "-2px",
                  top: "5px",

                  color: "wheat",
                  fontSize: "15px",
                  borderRadius: "30%",
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
              <img src="/img/Header/nen_trong.png" alt="image" />
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
              <li className="nav-item ">
                <NavLink to="/login" className="">
                  <i
                    className=" mx-1 fas fa-user"
                    style={{ color: "#428C27" }}
                  />
                </NavLink>
              </li>
              <li>
                <div className="gioHangSau">
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
                        top: "5px",

                        color: "wheat",
                        fontSize: "15px",
                        borderRadius: "30%",
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

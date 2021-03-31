import React from "react";

export default function Footer() {
  return (
    <footer className="fdb-block footer-small bg-dark">
      <div className="footer_main">
        <div className="row text-center align-items-center">
          <div className="cot_1 col-12 col-lg-2 text-lg-left">
            <img
              className="mt-3"
              alt="image"
              src="/img/Footer/logo_chu_Trang.png"
            />
          </div>

          <div className="cot_2 col mt-4 mt-lg-0 text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="cot_3 col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right">
            <a href="#" className="icon_mot mx-2">
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/avocado.com.vn/"
              className="icon_hai mx-2"
              target="_blank"
            >
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/Avocado-112035807606509"
              className="icon_ba mx-2"
              target="_blank"
            >
              <i className="fab fa-facebook" aria-hidden="true" />
            </a>

            {/* <a href="#" className="mx-2">
              <i className="fab fa-pinterest" aria-hidden="true" />
            </a> */}
            <a href="#" className="icon_bon mx-2">
              <i className="fab fa-google" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center text-white ELTR">© 2021 ELTR.SC</div>
        </div>
      </div>
    </footer>
  );
}

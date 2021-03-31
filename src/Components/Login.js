import React from "react";

export default function Login() {
  return (
    <div className="tong">
      <section className="fdb-block py-0">
        <div
          className="container py-5 my-5"
          style={{ backgroundImage: "url(/src/Asset/Login/login2.png)" }}
        >
          <div className=" row justify-content-end">
            <div className="form_login col-12 col-md-8 col-lg-6 col-xl-5 text-center">
              <div className="fdb-box text-center">
                <div className="row">
                  <div className="col">
                    <h1 className="text-light">Đăng nhập</h1>
                    <p className="lead"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-4">
                    <label class="custom-field two">
                      <input type="text" required />
                      <span class="placeholder">Tài khoản</span>
                    </label>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <label class="custom-field two">
                      <input type="text" required />
                      <span class="placeholder">Mật khẩu</span>
                    </label>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button className="btn btn-success" type="button">
                      Đăng nhập
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  xoaSanPham,
  tangGiamSanPham,
} from "../../Redux/Action/QuanLySanPhamAction";

import gioHangTrong from "../../Asset/GioHang/empty_cart.png";

//validate
import isEmpty from "validator/lib/isEmpty";

export default function GioHang() {
  const dispatch = useDispatch();
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);

  console.log("mangGioHang");
  console.log(mangGioHang);

  if (mangGioHang.length == []) {
    return (
      <div
        className="text-center"
        style={{ paddingTop: "130px", paddingBottom: "130px" }}
      >
        <div className="emptycart">
          <div className="emptycartImg"></div>
          <img src={gioHangTrong} />
        </div>
        <p className="m-3 p-3">Không có sản phẩm nào trong giỏ hàng của bạn</p>
        <NavLink
          to="/trangchu"
          className="bg-success text-light p-3"
          style={{ textDecoration: "none" }}
        >
          Tiếp tục mua hàng
        </NavLink>
      </div>
    );
  } else {
    if (mangGioHang[0].maSanPham == 0) {
      console.log("mangGioHang[0].maSanPham == 0");
      return (
        <div
          className="text-center"
          style={{ paddingTop: "130px", paddingBottom: "130px" }}
        >
          <div className="emptycart">
            <div className="emptycartImg"></div>
            <img src={gioHangTrong} />
          </div>
          <p className="m-3 p-3">
            Không có sản phẩm nào trong giỏ hàng của bạn
          </p>
          <NavLink
            to="/trangchu"
            className="bg-success text-light p-3"
            style={{ textDecoration: "none" }}
          >
            Tiếp tục mua hàng
          </NavLink>
        </div>
      );
    }
  }

  const renderGiohang = () => {
    return mangGioHang.map((sp, i) => {
      return (
        <tr key={i}>
          <td>
            <img width={100} height={100} src={sp.hinhAnh} />
            {/* {sp.hinhAnh} */}
          </td>
          <td>{sp.tenSanPham}</td>
          <td>
            <button
              className=""
              onClick={() => {
                dispatch(tangGiamSanPham(sp.maSanPham, false));
              }}
            >
              -
            </button>
            {sp.soLuong}
            <button
              className=""
              onClick={() => {
                dispatch(tangGiamSanPham(sp.maSanPham, true));
              }}
            >
              +
            </button>
          </td>
          <td>{sp.donGia}</td>
          <td>{sp.soLuong * sp.donGia}</td>
          <td>
            <button
              onClick={() => {
                dispatch(xoaSanPham(sp.maSanPham));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  const tongTien = () => {
    return mangGioHang.reduce((tong, mangGioHang, i) => {
      return (tong += mangGioHang.soLuong * mangGioHang.donGia);
    }, 0);
  };

  return (
    <div className="contentGioHang">
      <div className="container">
        <h1 className="mt-4">Giỏ hàng</h1>
        <div className="">
          <div className="">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{renderGiohang()}</tbody>
            </table>
          </div>
          <div className="">
            <h3>Tổng tiền</h3>
            <h1>{tongTien()},000đ</h1>
            <NavLink
              to="/thongtindathang"
              className="bg-success mt-2 p-2 text-light"
              style={{ textDecoration: "none" }}
            >
              Thanh Toán
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

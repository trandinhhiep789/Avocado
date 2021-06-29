import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  xoaSanPham,
  tangGiamSanPham,
} from "../../Redux/Action/QuanLySanPhamAction";

import gioHangTrong from "../../Asset/GioHang/empty_cart.png";

// thu vien ant
import { Popconfirm, Button } from "antd";
import GioHangChiTiet from "./GioHangChiTiet";

export default function GioHang() {
  // thong bao neu khach hang muon huy bo san pham

  // const [visible, setVisible] = useState({
  //   visible : true
  // })
  // const [confirmLoading, setConfirmLoading] = useState({
  //   confirmLoading : true
  // })
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

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
          <img alt="gio hang trong" className="" src={gioHangTrong} />
        </div>
        <p className="m-3 p-3">Không có sản phẩm nào trong giỏ hàng của bạn</p>
        <NavLink
          to="/danhsachsanpham"
          className="bg-success text-light p-3"
          style={{ textDecoration: "none" }}
        >
          Tiếp tục mua hàng
        </NavLink>
      </div>
    );
  } else {
    if (mangGioHang[0]._id == 0) {
      console.log("mangGioHang[0].maSanPham == 0");
      return (
        <div
          className="text-center"
          style={{ paddingTop: "130px", paddingBottom: "130px" }}
        >
          <div className="emptycart">
            <div className="emptycartImg"></div>
            <img alt="gio hang trong" className="" src={gioHangTrong} />
          </div>
          <p className="m-3 p-3">
            Không có sản phẩm nào trong giỏ hàng của bạn
          </p>
          <NavLink
            to="/danhsachsanpham"
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
            <img width={100} height={100} src={sp.hinhAnh[0]} />
            {/* {sp.hinhAnh} */}
          </td>
          <td className="tenSanPham" style={{ width: "10%" }}>
            {sp.tenSanPham}
          </td>
          <td>
            <div className="d-flex">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  dispatch(tangGiamSanPham(sp.maSanPham, false));
                }}
              >
                -
              </button>
              <div className="btn">{sp.soLuong}</div>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  dispatch(tangGiamSanPham(sp.maSanPham, true));
                }}
              >
                +
              </button>
            </div>
          </td>
          <td>
            <div className="btn">{sp.donGiaMoi}</div>
          </td>
          <td>
            <div className="btn">{sp.soLuong * sp.donGiaMoi}</div>
          </td>
          <td>
            {/* <button
              className="btn btn-outline-danger"
              onClick={() => {
                dispatch(xoaSanPham(sp.maSanPham));
              }}
            >
              Xóa
            </button> */}
            <Popconfirm
              title="Bạn có thực sự muốn xóa?"
              visible={visible}
              onConfirm={() => {
                // handleOk
                setConfirmLoading(true);
                setTimeout(() => {
                  setVisible(false);
                  setConfirmLoading(false);
                  dispatch(xoaSanPham(sp.maSanPham));
                }, 1000);
              }}
              okButtonProps={{ loading: confirmLoading }}
              onCancel={handleCancel}
              maSanPham={sp.maSanPham}
            >
              <Button type="primary" onClick={showPopconfirm}>
                Xóa
              </Button>
            </Popconfirm>
          </td>
        </tr>
      );
    });
  };

  const tongTien = () => {
    return mangGioHang.reduce((tong, mangGioHang, i) => {
      return (tong += mangGioHang.soLuong * mangGioHang.donGiaMoi);
    }, 0);
  };

  return (
    <div className="contentGioHang">
      <div className="container">
        <h1 className="mt-4">Giỏ hàng</h1>
        <div className="">
          <div className="w-100" style={{ overflowX: "auto" }}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>Hình ảnh</th>
                  <th style={{ width: "10%" }}>Tên sản phẩm</th>
                  <th style={{ width: "10%" }}>Số lượng</th>
                  <th style={{ width: "10%" }}>Đơn giá</th>
                  <th style={{ width: "10%" }}>Thành tiền</th>
                  <th style={{ width: "10%" }} className="text-center">
                    <i className="fas fa-cogs"></i>
                  </th>
                </tr>
              </thead>
              <tbody>{mangGioHang.map((sp, i) => <GioHangChiTiet {...sp}/>) }</tbody>
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

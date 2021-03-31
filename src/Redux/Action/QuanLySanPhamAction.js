import Swal from "sweetalert2";

export const themSanPham = (spGH) => {
  let spgh = { ...spGH[0], soLuong: 1 };

  return {
    type: "THEM_GIO_HANG",
    spGH: spgh,
  };
};

export const xoaSanPham = (maSanPhamDuocClick) => {
  return {
    type: "XOA_SAN_PHAM",
    maSanPhamDuocClick: maSanPhamDuocClick,
  };
};

export const tangGiamSanPham = (maSanPham, tangGiam) => {
  return {
    type: "TANG_GIAM_SANPHAM",
    maSanPham: maSanPham,
    tangGiam: tangGiam,
  };
};

export const setLaiGioHang = (dsRong) => {
  return {
    type: "XET_LAI_GIOHANG",
    dsRong: dsRong,
  };
};

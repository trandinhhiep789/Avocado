import Swal from "sweetalert2";
import axios from "axios";
import { GETALL_API, UPDATE_PRODUCT_API, DELETE_PRODUCT_API} from "../Const/Api";
import { history } from "../../Util/history";

export const themSanPham = (spGH) => {
  let spgh = { ...spGH, soLuong: 1 };

  console.log("spgh trong action")
  console.log(spgh)
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
    _id: maSanPham,
    tangGiam: tangGiam,
  };
};

export const setLaiGioHang = (dsRong) => {
  return {
    type: "XET_LAI_GIOHANG",
    dsRong: dsRong,
  };
};

export const layDanhSachSanPhamApiAction = async () => {
  return async (dispatch) => {
      try {
          const { data, status } = await axios({
              url: GETALL_API,
              method: "GET",
          });
          if (status === 200) {
              dispatch({
                  type: "LAY_DANH_SACH_SANPHAM_ACTION",
                  danhSachPhim: data,
              });
          }
      } catch (err) {
          console.log(err);
      }
  }
}


export const suaSanPhamAction = async (spUpdate) => {
  return async (dispatch) => {
    console.log(spUpdate)
    try {
      let result = await axios({
        url: UPDATE_PRODUCT_API,
        method: "PUT",
        data: spUpdate,
      });
      console.log(result.data.message);
      Swal.fire("Thông báo", "Sửa thành công", "success");
      history.push("/admin/quanlysanpham");
    } catch (err) {
      Swal.fire("Thông báo", err.response.data, "error");
    }
  }
}

export const xoaSanPhamAction = async (productIdDelete) => {
  return async (dispatch) => {
    console.log("userDelete");
    console.log(productIdDelete);
    try {
      let result = await axios({
        url: DELETE_PRODUCT_API + productIdDelete,
        method: "DELETE"
      });
      console.log(result.data);
      Swal.fire("Thông báo", "Xóa thành công", "success");
    } catch (err) {
      Swal.fire("Thông báo", err.response.data, "error");
    }
  };
};
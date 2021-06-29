import Axios from "axios";
import Swal from "sweetalert2";
import { history } from "../../Util/history";

import { DANGKI_API, DANGNHAP_API, DO_COMMENT_API, UPDATE_USER, DELETE_USER_ID, GET_TONG_TIEN} from "../Const/Api";

export const dangNhapApiAction = async (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: DANGNHAP_API,
        method: "POST",
        data: userLogin,
      });

      console.log(result.data.status);

      if (result.data.status == "SUCCESS") {
        localStorage.setItem("USER_LOGIN", JSON.stringify(result.data));
        localStorage.setItem("ACCOUNTLOGIN", JSON.stringify(userLogin));

        if (result.data.data[0].loaiUser[0] == "admin") {
          history.push('/trangchu')
          dispatch({
            type: "DANG_NHAP",
            data: result.data,
            account: userLogin,
          });

          Swal.fire(
            "Thông báo",
            `Xin chào ${result.data.data[0].tenUser}`,
            "success"
          );
        } else {
          history.push("/");
          dispatch({
            type: "DANG_NHAP",
            data: result.data,
            account: userLogin,
          });
          Swal.fire(
            "Thông báo",
            `Xin chào ${result.data.data[0].tenUser}`,
            "success"
          );
        }
      }else{
          Swal.fire("Thông báo", `${result.data.message}`,"error")
          return
      }
    } catch (err) {
      Swal.fire("Thông báo", err, "error");
    }
  };
};

export const binhLuanApiAction = async (comment) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: DO_COMMENT_API,
        method: "POST",
        data: comment,
      });

      console.log("result");
      console.log(result.data);
      if(result.data.result == "ok"){
        alert("Bình luận thành công cảm ơn bạn đã góp ý")
      }

      console.log(comment)
    
          
    } catch (err) {
      Swal.fire("Thông báo", err, "error");
    }
  };
};

export const dangKyApiAction = async (userSignup) => {
  return async (dispatch) => {
    console.log("userSignup");
    console.log(userSignup);
    try {
      let result = await Axios({
        url: DANGKI_API,
        method: "POST",
        data: userSignup,
      });
      console.log(result.data.message);
      Swal.fire("Thông báo", "Đăng ký thành công", "success");
      history.push("/login");
    } catch (err) {
      Swal.fire("Thông báo", err.response.data, "error");
    }
  };
};

export const suaNguoiDungAction = async (userUpdate) => {
  return async (dispatch) => {
    console.log("userUpdate");
    console.log(userUpdate);
    try {
      let result = await Axios({
        url: UPDATE_USER,
        method: "PUT",
        data: userUpdate,
      });
      console.log(result.data.message);
      Swal.fire("Thông báo", "Sửa thành công", "success");
      history.push("/admin/quanlynguoidung");
    } catch (err) {
      Swal.fire("Thông báo", err.response.data, "error");
    }
  };
};

export const xoaNguoiDungAction = async (userIdDelete) => {
  return async (dispatch) => {
    console.log("userUpdate");
    console.log(userIdDelete);
    try {
      let result = await Axios({
        url: DELETE_USER_ID + userIdDelete,
        method: "DELETE"
      });
      console.log(result.data);
      Swal.fire("Thông báo", "Xóa thành công", "success");
    } catch (err) {
      Swal.fire("Thông báo", err.response.data, "error");
    }
  };
};

export const tongTienNguoiDungAction = async (tongTien) => {
  return async (dispatch) => {
    console.log("tongTien");
    console.log(tongTien);
    // try {
    //   let result = await Axios({
    //     url: GET_TONG_TIEN,
    //     method: "POST",
    //     data: tongTien,
    //   });
    //   console.log(result.data.message);
    //   history.push("/login");
    // } catch (err) {
    //   Swal.fire("Thông báo", err.response.data, "error");
    // }
  };
};
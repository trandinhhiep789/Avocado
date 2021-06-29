import { combineReducers } from "redux";
import QuanLySanPhamReducer from "./QuanLySanPhamReducer";
import QuanLyNguoiDungReducer from "./QuanLyNguoiDungReducer"
export const rootReducer = combineReducers({
  stateSanPham: QuanLySanPhamReducer,
  stateUser : QuanLyNguoiDungReducer,
});

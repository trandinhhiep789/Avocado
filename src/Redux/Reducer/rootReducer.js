import { combineReducers } from "redux";
import QuanLySanPhamReducer from "./QuanLySanPhamReducer";
export const rootReducer = combineReducers({
  stateSanPham: QuanLySanPhamReducer,
});

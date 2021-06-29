/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-pascal-case */
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Slide_1 from "./Components/Slide/Slide_1";
import { HomeTemplate } from "./Template/HomeTemplate";
import { HomeTemplate_1 } from "./Template/HomeTemplate_1";
import TrangChu from "./Components/TrangChu/TrangChu";
import ScrollToTop from "./Components/ScrollToTop";
import GioHang from "./Components/GioHang/GioHang";
import ThongTin_DatHang from "./Components/ThongTinDatHang/ThongTin_DatHang";

import { useSelector } from "react-redux";
import DetailProducts from "./Components/Product/DetailProducts";
import DangKi from "./Components/DangKi";
import DanhSachSanPham from "./Components/Product/DanhSachSanPham";
import Category_product from "./Components/CategoryProduct/Category_product";

import { AdminTemplate } from "./Template/AdminTemplate";
import QuanLyNguoiDung from "./Admin/QuanLyNguoiDung";
import QuanLySanPham from "./Admin/QuanLySanPham";
import Admin from "./Admin/Admin";
import SuaNguoiDung from "./Admin/SuaNguoiDung";
import SuaSanPham from "./Admin/SuaSanPham";
import ThemSanPham from "./Admin/ThemSanPham";

function App() {
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);

  // console.log(mangGioHang[0].maSanPham);
  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
  if(userLogin.data){
    console.log(userLogin.data[0].loaiUser[0]);
  }

  return (
    // component khac Component nay
    
    <>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0&appId=199663805249114&autoLogAppEvents=1"
        nonce="GiXHRQAt"
      ></script>
      <ScrollToTop />
      <Switch>
        <HomeTemplate exact path="/trangchu" Component={TrangChu} />

        <HomeTemplate exact path="/" Component={TrangChu} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={DangKi} />
        <HomeTemplate_1 exact path="/giohang" Component={GioHang} />
        <HomeTemplate_1
          exact
          path="/danhsachsanpham"
          Component={DanhSachSanPham}
        />

        {mangGioHang.length != [] ? (
          mangGioHang[0]._id != 0 ? (
            <Switch>
              <HomeTemplate_1
                exact
                path="/thongtindathang"
                Component={ThongTin_DatHang}
              />
            </Switch>
          ) : (
            "not"
          )
        ) : (
          "not"
        )}

        <HomeTemplate exact path="/slide1" Component={Slide_1} />

        <HomeTemplate_1 path="/detail/:maSanPham" Component={DetailProducts} />
        {/* <HomeTemplate_1 exact path="/category/detail/:maSanPham" Component={DetailProducts}/>   */}
        <HomeTemplate_1
          exact
          path="/category/:maCategory"
          Component={Category_product}
        />
            {(userLogin?.data)?(userLogin.data[0].loaiUser[0] == "admin" ?
            <Switch>
              <AdminTemplate exact path='/admin' Component={Admin} />
              <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />
              <AdminTemplate exact path='/admin/suanguoidung/:maNguoiDung' Component={SuaNguoiDung} />

              <AdminTemplate exact path='/admin/quanlysanpham' Component={QuanLySanPham} />
              <AdminTemplate exact path='/admin/suasanpham/:maSanPham' Component={SuaSanPham} />
              <AdminTemplate exact path='/admin/themsanpham' Component={ThemSanPham} />
            </Switch>
            : 'not'):""}

      </Switch>
    </>
  );
}

export default App;

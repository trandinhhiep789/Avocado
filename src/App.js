import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Carousel_main from "./Components/Carousel_main";
import Slide_1 from "./Components/Slide/Slide_1";
import { HomeTemplate } from "./Template/HomeTemplate";
import { HomeTemplate_1 } from "./Template/HomeTemplate_1";
import Product_1 from "./Components/Product/Product_1";
import Carousel from "./Components/Carousel";
import TrangChu from "./Components/TrangChu/TrangChu";
import BaiDang from "./Components/BaiDang/BaiDang";
import AboutUS from "./Components/AboutUS";
import ScrollToTop from "./Components/ScrollToTop";
import GioHang from "./Components/GioHang/GioHang";
import ThongTinDatHang from "./Components/ThongTinDatHang/ThongTinDatHang";
import ThongTin_DatHang from "./Components/ThongTinDatHang/ThongTin_DatHang";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const mangGioHang = useSelector((state) => state.stateSanPham.gioHang);

  // console.log(mangGioHang[0].maSanPham);

  return (
    // component khac Component nay
    <>
      <ScrollToTop />
      <Switch>
        <HomeTemplate exact path="/trangchu" Component={TrangChu} />
        

        <HomeTemplate exact path="/" Component={TrangChu} />

        <HomeTemplate_1 exact path="/login" Component={Login} />
        <HomeTemplate_1 exact path="/giohang" Component={GioHang} />

        {mangGioHang.length != [] ? (
          mangGioHang[0].maSanPham != 0 ? (
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
      </Switch>
    </>
  );
}

export default App;

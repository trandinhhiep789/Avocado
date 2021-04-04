import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Carousel_main from "./Components/Carousel_main";
import Slide_1 from "./Components/Slide/Slide_1";
import { HomeTemplate } from "./Template/HomeTemplate";
import Product_1 from "./Components/Product/Product_1";
import Carousel from "./Components/Carousel";
import TrangChu from "./Components/TrangChu/TrangChu";
import BaiDang from "./Components/BaiDang/BaiDang";
import AboutUS from "./Components/AboutUS";
import ScrollToTop from "./Components/ScrollToTop";
import GioHang from "./Components/GioHang/GioHang";
import ThongTinDatHang from "./Components/ThongTinDatHang/ThongTinDatHang";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    // component khac Component nay
    <>
      <ScrollToTop />
      <Switch>
        <HomeTemplate exact path="/trangchu" Component={TrangChu} />

        <HomeTemplate exact path="/" Component={TrangChu} />
        {/* <Route exact path="/baidang" component={BaiDang} /> */}

        {/* <HomeTemplate exact path="/carouselmain" Component={Carousel_main} /> */}
        {/* <HomeTemplate exact path="/carousel" Component={Carousel} /> */}

        <HomeTemplate exact path="/login" Component={Login} />
        <HomeTemplate exact path="/giohang" Component={GioHang} />
        <HomeTemplate
          exact
          path="/thongtindathang"
          Component={ThongTinDatHang}
        />

        <HomeTemplate exact path="/slide1" Component={Slide_1} />
      </Switch>
      {/* <MessengerCustomerChat pageId="112035807606509" appId="313735936845071" /> */}
    </>
  );
}

export default App;

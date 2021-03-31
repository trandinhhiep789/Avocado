import React from "react";
import Carousel from "../Carousel";
import Carousel_main from "../Carousel_main";
import BaiDang from "../BaiDang/BaiDang";
import AnhBia from "../AnhBia";
import AboutUS from "../AboutUS";
import ContactUS from "../ContactUS";
import BackToTop from "../BackToTop/BackToTop";

export default function TrangChu() {
  return (
    <div>
      <Carousel_main />
      <Carousel />
      <BackToTop />
      <BaiDang />
      <AnhBia />
      <AboutUS />
      <ContactUS />
    </div>
  );
}

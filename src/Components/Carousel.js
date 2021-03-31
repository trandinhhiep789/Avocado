import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Product_1 from "./Product/Product_1";
import Product_2 from "./Product/Product_2";
import Product_3 from "./Product/Product_3";
import Product_4 from "./Product/Product_4";
import Product_5 from "./Product/Product_5";
import Product_6 from "./Product/Product_6";

export default function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow nextProduct"
        style={{ backgroundColor: "initial" }}
        onClick={onClick}
      >
        <i
          className="fas fa-chevron-right"
          style={{
            // fontSize: "35px",
            color: "grey",
          }}
        ></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prevProduct"
        style={{ backgroundColor: "initial" }}
        onClick={onClick}
      >
        <i
          class="fas fa-chevron-left"
          style={{
            // fontSize: "35px",
            color: "grey",
          }}
        ></i>
      </div>
    );
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="products" className="carouselProduct container">
      <div className="contentProduct text-center">
        <h1>Products</h1>
      </div>
      <Slider {...settings}>
        {/* product 1 */}
        <Product_1 />
        {/* product 2 */}
        <Product_2 />
        {/* product 3 */}
        <Product_3 />
        {/* product 4 */}
        <Product_4 />
        {/* product 5 */}
        <Product_5 />
        {/* product 6 */}
        <Product_6 />
      </Slider>
    </div>
  );
}

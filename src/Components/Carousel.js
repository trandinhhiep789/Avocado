import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Product from "./Product/Product";
// import Product_1 from "./Product/Product_1";
// import Product_2 from "./Product/Product_2";
// import Product_3 from "./Product/Product_3";
// import Product_4 from "./Product/Product_4";
// import Product_5 from "./Product/Product_5";
// import Product_6 from "./Product/Product_6";

import axios from "axios";

import { GETALL_API } from "../Redux/Const/Api";

// import DSSP from "../Data/data.json";;

// import mot from "../Asset/Carousel/chong_nang_1.png";

export default function Carousel() {
  const [product, setProduct] = useState([]);

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

  // const product = DSSP.map((m, index) => {
  //   return(
  //     <Product {...m} key={index}/>
  //   )
  // })

  // GET ALL PRODUCT
  //GET LIST FILM
  useEffect(() => {
    // fetch(LISTFILM_API)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     alert("có vô day");
    //     console.log(data);
    //     setMovies(data.results);
    //   });

    const promise = axios({
      url: GETALL_API,
      method: "GET",
    });
    promise.then((res) => {
      console.log(res.data);
      setProduct(res.data.data);
    });

  }, []);

  return (
    <div id="products" className="carouselProduct container">
      <div className="contentProduct text-center">
        <h1>Products</h1>
        {/* <img src={mot}/> */}
      </div>
      <div className="text-right">
          <NavLink to="/danhsachsanpham" className="text-dark" style={{fontWeight:'500', fontSize:"20px"}}>
            Xem tất cả sản phẩm <i className="fas fa-arrow-circle-right"></i>
          </NavLink>
        </div>
      <Slider {...settings}>
        {/* <Product_1 />
        <Product_2 />
        <Product_3 />
        <Product_4 />
        <Product_5 />
        <Product_6 /> */}

        {product?.length > 0 &&
          product?.map((m, key) => <Product {...m} key={m._id} />)}

        {/* {product} */}
      </Slider>
    </div>
  );
}

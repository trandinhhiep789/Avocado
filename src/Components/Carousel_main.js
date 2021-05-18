import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

import mot from "../Asset/CarouselMain/1.png";

export default function Carousel_main() {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow nextMain"
        style={{ backgroundColor: "initial" }}
        onClick={onClick}
      >
        <i
          className="fas fa-chevron-right"
          style={{
            // fontSize: "35px",
            color: "white",
          }}
        ></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prevMain"
        style={{ backgroundColor: "initial" }}
        onClick={onClick}
      >
        <i
          class="fas fa-chevron-left"
          style={{
            // fontSize: "35px",
            color: "white",
          }}
        ></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carouselMain" id="carousel">
      <Slider {...settings}>
        {/* slide 1 */}
        <div className="carouselMainItem">
          <div className="item1">
            <div className="bg-white item2">
              <div className="itemContent">
                <h5 className="">
                  Chúng ta cần kem chống nắng hơn bap giờ hết
                </h5>

                <h6 className="">Tác dụng của kem chống nắng</h6>

                <p className=" text-muted">
                  SKIN Cũng như cách chiếc mặt nạ bảo vệ cơ thể khỏi virus, kem
                  chống nắng có thể cứu sống bạn, theo nghĩa đen. Sau đây là tất
                  cả những gì bạn cần biết về kem chống nắng và những ảnh hưởng
                  ngày càng nghiêm trọng do ánh nắng mặt trời gây lên da do biến
                  đổi khí hậu.
                </p>

                <div>
                  <NavLink to="/slide1" className="navv">
                    <a>XEM THÊM</a>
                    <i className="fas fa-arrow-circle-right mx-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide 2 */}
        <div className="carouselMainItem">
          <div className="item1">
            <div className="bg-white item2">
              <div className="itemContent">
                <h5 className="">
                  Chúng ta cần kem chống nắng hơn bap giờ hết
                </h5>

                <h6 className="">Tác dụng của kem chống nắng</h6>

                <p className=" text-muted">
                  SKIN Cũng như cách chiếc mặt nạ bảo vệ cơ thể khỏi virus, kem
                  chống nắng có thể cứu sống bạn, theo nghĩa đen. Sau đây là tất
                  cả những gì bạn cần biết về kem chống nắng và những ảnh hưởng
                  ngày càng nghiêm trọng do ánh nắng mặt trời gây lên da do biến
                  đổi khí hậu.
                </p>

                <div>
                  <NavLink to="/slide1" className="">
                    <a>XEM THÊM</a>
                    <i className="fas fa-arrow-circle-right mx-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide 3 */}
        <div className="carouselMainItem">
          <div className="item1">
            <div className="bg-white item2">
              <div className="itemContent">
                <h5 className="">
                  Chúng ta cần kem chống nắng hơn bap giờ hết
                </h5>

                <h6 className="">Tác dụng của kem chống nắng</h6>

                <p className=" text-muted">
                  SKIN Cũng như cách chiếc mặt nạ bảo vệ cơ thể khỏi virus, kem
                  chống nắng có thể cứu sống bạn, theo nghĩa đen. Sau đây là tất
                  cả những gì bạn cần biết về kem chống nắng và những ảnh hưởng
                  ngày càng nghiêm trọng do ánh nắng mặt trời gây lên da do biến
                  đổi khí hậu.
                </p>

                <div>
                  <NavLink to="/slide1" className="">
                    <a>XEM THÊM</a>
                    <i className="fas fa-arrow-circle-right mx-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

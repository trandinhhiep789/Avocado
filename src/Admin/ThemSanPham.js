import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "antd/dist/antd.css";
import { Image } from "antd";
import { UPLOAD_IMAGE_SANPHAM } from "../Redux/Const/Api";

export default function ThemSanPham() {

  const [hinh, setHinh] = useState([]);
  const [manghinh, setMangHinh] = useState([]);

  const handleSubmitImageUrl = (e) => {
      console.log(manghinh)
      var form_data = new FormData()
    //   form_data.append(manghinh)
    //   for (var key in manghinh) {
        // form_data.append("files", manghinh)
    // }
    
    //   axios({
    //     url: UPLOAD_IMAGE_SANPHAM,
    //     method: 'POST',
    //     data: form_data
    // }).then(res => {
    //     console.log(res)
    //     console.log("Thêm phim thành công")
    //     // Swal.fire('Thông báo', 'Thêm phim thành công', 'success')
    //     // e.target.reset()

    // }).catch(err => {
    //     console.log("Thêm phim thất bại")
    //     console.log(err)
    //     // Swal.fire('Thông báo', err, 'error')
    // })
  };

  const handleChangeImageUrl = (e) => {
    // let newPhim = { ...phim, hinhAnh: e.target.files[0] };
    // setPhim(newPhim)
    // console.log(newPhim);

    var mangImg = []

    for(var i = 0; i < e.target.files.length; i++){
        mangImg.push(e.target.files[i])
    }
    setMangHinh(mangImg)
    

    if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
      console.log(e.target.files);
      console.log("filesArray: ", filesArray);

        setHinh((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
          (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
    }
  };

  // hiện ảnh xem trước
  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <img
          className="mx-1 khungHinh"
          style={{ width: "10%" }}
          src={photo}
          alt=""
          key={photo}
        />
      );
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // var form_data = new FormData();
    // for (var key in phim) {
    //   console.log(key, phim[key]);
    //   form_data.append(key, phim[key]);
    // }
    // e.preventDefault();
    // axios({
    //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
    //   method: "POST",
    //   data: form_data,
    // })
    //   .then((res) => {
    //     console.log(res);
    //     console.log("Thêm phim thành công");
    //     Swal.fire("Thông báo", "Thêm phim thành công", "success");
    //     e.target.reset();
    //   })
    //   .catch((err) => {
    //     console.log("Thêm phim thất bại");
    //     Swal.fire("Thông báo", err.response.data, "error");
    //   });
  };
  const handleChange = (e) => {};

  return (
    <div className="pt-4 mb-4" style={{ width: "90%", margin: "0 auto" }}>
      <form className="pt-4" >
        <input type="file" multiple onChange={handleChangeImageUrl} />
        
        <div className="border d-flex text-center" style={{ flexWrap: "wrap" }}>
          {/* <img src={hinh.profileImg} style={{ height: 240, width: 185 }} /> */}
          {/* <img src={hinh.profileImg} style={{ width: "50%" }} /> */}
          {renderPhotos(hinh)}
        </div>
        <button type='button' onClick={handleSubmitImageUrl} className="btn-success">Upload</button>
      </form>
      <form onSubmit={handleSubmit} className="p-3 khungHinh">
        <div className="form-group ">
          <h6 className="font-weight-light" style={{ padding: 0 }}>
            Hình ảnh
          </h6>
        </div>
        <div className="d-flex ">
          <div>
            <div className=" form-group ">
              <h6 className="font-weight-light" style={{ padding: 0 }}>
                Mã phim
              </h6>
              <input
                type="text"
                className="form-control "
                name="maPhim"
                onChange={handleChange}
              />
            </div>
            <div className=" form-group ">
              <h6 className="font-weight-light" style={{ padding: 0 }}>
                Tên phim
              </h6>
              <input
                type="text"
                className="form-control "
                name="tenPhim"
                onChange={handleChange}
              />
            </div>
            <div className=" form-group ">
              <h6 className="font-weight-light" style={{ padding: 0 }}>
                Bí danh
              </h6>
              <input
                type="text"
                className="form-control "
                name="biDanh"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="t">
            <div className=" form-group ">
              <h6 className="ml-5 font-weight-light" style={{ padding: 0 }}>
                Đánh giá
              </h6>
              <input
                type="text"
                className="ml-5 form-control "
                name="danhGia"
                onChange={handleChange}
              />
            </div>

            <div className=" form-group ">
              <h6 className="ml-5 font-weight-light" style={{ padding: 0 }}>
                Mã nhóm
              </h6>
              <input
                type="text"
                className="ml-5 form-control "
                name="maNhom"
                value="GP01"
                onChange={handleChange}
                placeholder="GP01"
                disabled
              />
            </div>
            <div className=" form-group ">
              <h6 className="ml-5 font-weight-light" style={{ padding: 0 }}>
                Trailer
              </h6>
              <input
                type="text"
                className="ml-5 form-control "
                name="trailer"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <h6 className=" font-weight-light" style={{ padding: 0 }}>
            Mô tả
          </h6>
          <textarea
            className="form-control text-overflow "
            rows="5"
            cols="13"
            name="moTa"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-secondary mt-5" type="reset">
          <i className="fa fa-sync"></i>
        </button>
        <button className="btn btn-outline-success mt-5  w-100">Thêm</button>
      </form>
    </div>
  );
}

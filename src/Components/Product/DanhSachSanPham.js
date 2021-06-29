import React, { useEffect, useState } from "react";
import ProductOfAllProduct from "./ProductOfAllProduct";
import axios from "axios";
import { GETALL_API, GETALL_CATEGORY } from "../../Redux/Const/Api";
import Category from "../CategoryProduct/Category"

export default function DanhSachSanPham(props) {
  const [category, setCategory] = useState([]);

  // lấy danh sách loai san pham
  useEffect(() => {
    const promise = axios({
      url: GETALL_CATEGORY,
      method: "GET",
    });
    promise.then((res) => {
      console.log("category");
      console.log(res.data.data);
      console.log(res.data.data.lenght);
      setCategory(res.data.data);
    });
  }, []);

  const [product, setProduct] = useState([]);

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
    <>
      <h5 className="container" style={{ paddingTop: "130px", paddingBottom:"", fontWeight:"500"}}>Danh mục sản phẩm</h5>
      <div className="d-flex" style={{ flexWrap: "wrap", justifyContent: "center"}}>
        
        {category.map((m) => (
            <div className="m-4 khungHinh p-3" style={{cursor:"pointer"}} ><Category {...m}/></div>
        ))}
      </div>
      <div
        className="container d-flex"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {product?.length > 0 &&
          product?.map((m, key) => <ProductOfAllProduct {...m} key={m._id} />)}
      </div>
    </>
  );
}

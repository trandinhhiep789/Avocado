/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  GET_PRODUCT_BY_CATEGORY,
  DETAIL_CATEGORY,
} from "../../Redux/Const/Api";
import ProductOfCategory from "../Product/ProductOfCategory";

export default function Category_product({ match }) {
  const dispatch = useDispatch();
  let params = match.params;
  console.log("params.maCategory");
  console.log(params.maCategory);
  const [productCategory, setProductCategory] = useState([]);
  const [category, setCategory] = useState([]);

  //   GET DETAIL_CATEGORY
  useEffect(async () => {
    const { data } = await axios.get(
      `${DETAIL_CATEGORY}${params.maCategory}`
    );
    console.log("category detail");
    console.log(data.data);
    setCategory(data.data);
    console.log(data.data);
  }, [params.maSanPham]);

  //   GET PRODUCT BY CATEGPRY
  useEffect(async () => {
    const { data } = await axios.get(
      `${GET_PRODUCT_BY_CATEGORY}${params.maCategory}`
    );
    console.log("data detail");
    console.log(data.data);
    setProductCategory(data.data);
    console.log(data.data);
  }, [params.maSanPham]);

  return (
    <div>
      {/* <div className="container"><h5>{`Danh sách san phẩm ${}`}</h5></div> */}
      <h5 className="container" style={{
          paddingTop: "130px"
        }}>Danh mục sản phẩm {category.tenLoai}</h5>
      <div
        className="d-flex"
        style={{
          paddingBottom: "",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        
        {productCategory?.map((m) => {
          return <ProductOfCategory {...m} key={m._id} />;
        })}
      </div>
    </div>
  );
}

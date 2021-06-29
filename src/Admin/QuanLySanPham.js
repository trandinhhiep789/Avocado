import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductAdmin from "./ProductAdmin"
import { GETALL_API, GET_PRODUCT_BY_TENPRODUCT} from "../Redux/Const/Api";
import { NavLink } from "react-router-dom";
import {IMAGE_API} from "../Redux/Const/Api"
import { Image } from 'antd';
import { xoaSanPhamAction } from "../Redux/Action/QuanLySanPhamAction";

export default function QuanLySanPham() {

  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  // TIM KIEM
  const [search, setSearch] = useState([]);
  const [product, setProduct] = useState([]);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFistPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(GETALL_API);
      console.log(res.data.data);
      setPosts(res.data.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  // submit information for search
  const submit = (e) => {
    e.preventDefault();

    if (search) {
      const promise = axios({
        url: GET_PRODUCT_BY_TENPRODUCT + search,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      });

      setSearch("");
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="mt-4" style={{ width: "90%", margin: "0 auto" }}>
        <h4 className="mr-4">Danh sách sản phẩm</h4>
        <NavLink className="text-white bg-success p-2" to="/admin/themsanpham">+ Thêm sản phẩm mới</NavLink>

        <form className="d-flex my-4" onSubmit={submit}>
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Nhập tên sản phầm"
                aria-label="Search"
                value={search}
                onChange={handleChange}
                style={{border:"none"}}
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
              

            </form>
            {product.length > 0?(
                  <div className="khungHinh mb-4 " style={{ overflowX: "auto" }}>
                    <i className="d-flex">Tìm thấy: <i className="mx-2" style={{fontWeight:"700"}}>{product.length}</i> sản phẩm phù hợp</i>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                      <th style={{ width: "15%" }}>Id</th>
                <th style={{ width: "10%" }}>Sản phẩm</th>
                <th style={{ width: "15%" }}>Hình ảnh</th>
                <th style={{ width: "10%" }}>Thương hiệu</th>
                <th style={{ width: "15%" }}>Công dụng</th>
                <th style={{ width: "10%" }}>Giá cũ</th>
                <th style={{ width: "10%" }}>Giá mới</th>
                <th style={{ width: "15%" }}>Thành phàn</th>
                      </tr>
                    </thead>
                    <tbody>
                    {product.map((product) => (
                  <tr>
                    <td><p
              style={{
                width: "100px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product._id}
            </p></td>
          <td><p
              style={{
                width: "100px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product.tenSanPham}
            </p></td>
          <td>

          <Image
                  alt="hinh anh san pham"
                    className=""
                    src={product.imageUrl[0]? IMAGE_API + product.imageUrl[0].split("/")[1] : "https://picsum.photos/images"}
                    style={{ width: "100%" }}
                  />

          </td>
          <td>
            <p
              style={{
                width: "167px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product.thongTinThuongHieu}
            </p>
          </td>
          <td><p
              style={{
                width: "100px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product.congDung}
            </p></td>
          <td>{product.donGiaCu}</td>
          <td>{product.donGiaMoi}</td>
          <td>
          <p
              style={{
                width: "167px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product.thongTinThuongHieu}
            </p>
          </td>
          <td className="d-flex justify-content-center">
            <NavLink
              to={`suasanpham/${product._id}`}
              style={{ borderRadius: "5px" }}
              className="text-white bg-info p-2"
            >
              Sửa
            </NavLink>
            <button className="btn btn-danger" onClick={ async () => {
              dispatch(await xoaSanPhamAction(product._id));
            }}>Xóa</button>
          </td>
                  </tr>
                ))}
                    </tbody>
                  </table>
                  </div>):""}                        
        

        <div style={{ overflowX: "auto" }} className="khungHinh ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Id</th>
                <th style={{ width: "10%" }}>Sản phẩm</th>
                <th style={{ width: "15%" }}>Hình ảnh</th>
                <th style={{ width: "10%" }}>Thương hiệu</th>
                <th style={{ width: "15%" }}>Công dụng</th>
                <th style={{ width: "10%" }}>Giá cũ</th>
                <th style={{ width: "10%" }}>Giá mới</th>
                <th style={{ width: "15%" }}>Thành phàn</th>
              </tr>
            </thead>
            <tbody>
              <ProductAdmin posts={currentPosts} loading={loading} />
            </tbody>
          </table>
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { GETALL_USER_API, GET_USER_BY_TEN } from "../Redux/Const/Api";
import User from "./User";
import { NavLink } from "react-router-dom";
import { xoaNguoiDungAction } from "../Redux/Action/QuanLyNguoiDungActions";

import { useDispatch } from "react-redux";

export default function QuanLyNguoiDung() {

  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  // TIM KIEM
  const [search, setSearch] = useState([]);
  const [product, setProduct] = useState([]);

  console.log("posts");
  console.log(posts);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(GETALL_USER_API);
      setPosts(res.data.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFistPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // submit information for search
  const submit = (e) => {
    e.preventDefault();

    if (search) {
      const promise = axios({
        url: GET_USER_BY_TEN + search,
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
      {/* bảng danh sách tất cả người dùng */}
      <div className="mt-4" style={{ width: "90%", margin: "0 auto" }}>
        <h4>Danh sách người dùng</h4>

        <form className="d-flex mb-4" onSubmit={submit}>
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Nhập tên khách hàng"
            aria-label="Search"
            value={search}
            onChange={handleChange}
            style={{ border: "none" }}
          />
          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>

        {product.length > 0 ? (
          <div className="khungHinh mb-4 " style={{ overflowX: "auto" }}>
            <i className="d-flex">
              Tìm thấy:{" "}
              <i className="mx-2" style={{ fontWeight: "700" }}>
                {product.length}
              </i>{" "}
              user phù hợp
            </i>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Id</th>
                  <th style={{ width: "15%" }}>Tên khách hàng</th>
                  <th style={{ width: "15%" }}>Email</th>
                  <th style={{ width: "15%" }}>Password</th>
                  <th style={{ width: "15%" }}>Loại người dùng</th>
                  <th style={{ width: "15%" }}>Tổng tiền</th>
                  <th style={{ width: "10%" }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {product.map((product) => (
                  <tr>
                    <td>{product._id}</td>
                    <td>{product.tenUser}</td>
                    <td>{product.email}</td>
                    <td>
                      <p
                        style={{
                          width: "167px",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }}
                      >
                        {product.passWord}
                      </p>
                    </td>
                    <td>{product.loaiUser[0]}</td>
                    <td>{product.tongHoaDon}</td>
                    <td className="d-flex justify-content-center">
                      <NavLink
                        to={`suanguoidung/${product._id}`}
                        style={{ borderRadius: "5px" }}
                        className="text-white bg-info p-2"
                      >
                        Sửa
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={async () => {
                          dispatch(await xoaNguoiDungAction(product._id));
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}

        <div style={{ overflowX: "auto" }} className="khungHinh ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Id</th>
                <th style={{ width: "15%" }}>Tên khách hàng</th>
                <th style={{ width: "15%" }}>Email</th>
                <th style={{ width: "15%" }}>Password</th>
                <th style={{ width: "15%" }}>Loại người dùng</th>
                <th style={{ width: "15%" }}>Tổng tiền</th>
                <th style={{ width: "10%" }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <User posts={currentPosts} loading={loading} />
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

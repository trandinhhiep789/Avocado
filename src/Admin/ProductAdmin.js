import React from 'react'
import { useDispatch } from "react-redux";
import {IMAGE_API} from "../Redux/Const/Api"
import { NavLink } from "react-router-dom";
// thư viện ant-design
import "antd/dist/antd.css";
import { Image } from 'antd';
import { xoaSanPhamAction } from "../Redux/Action/QuanLySanPhamAction";

export default function ProductAdmin({ posts, loading }) {

    const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-danger " role="status"></div>
      </div>
    );
  }

    return (
        <>
      {posts.map((post) => (
        <tr>
          <td><p
              style={{
                width: "100px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {post._id}
            </p></td>
          <td><p
              style={{
                width: "100px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {post.tenSanPham}
            </p></td>
          <td>

          <Image
                  alt="hinh anh san pham"
                    className=""
                    src={post.imageUrl[0]? IMAGE_API + post.imageUrl[0].split("/")[1] : "https://picsum.photos/images"}
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
              {post.thongTinThuongHieu}
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
              {post.congDung}
            </p></td>
          <td>{post.donGiaCu}</td>
          <td>{post.donGiaMoi}</td>
          <td>
          <p
              style={{
                width: "167px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {post.thongTinThuongHieu}
            </p>
          </td>
          <td className="d-flex justify-content-center">
            <NavLink
              to={`suasanpham/${post._id}`}
              style={{ borderRadius: "5px" }}
              className="text-white bg-info p-2"
            >
              Sửa
            </NavLink>
            <button className="btn btn-danger" onClick={ async () => {
              dispatch(await xoaSanPhamAction(post._id));
            }}>Xóa</button>
          </td>
        </tr>
      ))}
    </>
  
    )
}

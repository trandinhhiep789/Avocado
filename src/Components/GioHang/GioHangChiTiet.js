import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  xoaSanPham,
  tangGiamSanPham,
} from "../../Redux/Action/QuanLySanPhamAction";

import {IMAGE_API} from "../../Redux/Const/Api"

// thu vien ant
import { Popconfirm, Button } from "antd";

export default function GioHangChiTiet(sp) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const dispatch = useDispatch();
  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  console.log("sp trong chi tiet gio hàng")
  console.log(sp)

  return (
    <>
      <tr>
        <td>
          {(sp.imageUrl) ? <img alt="hinh anh san pham" width={100} height={100} src={sp.imageUrl[0]? IMAGE_API + sp.imageUrl[1].split("/")[1] : "https://picsum.photos/images"} />: ""}
        </td>
        <td className="tenSanPham" style={{ width: "50px !important", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}} >
          <p style={{width:"167px", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}>
          {sp.tenSanPham}
          </p>
        </td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-outline-success"
              onClick={() => {
                dispatch(tangGiamSanPham(sp._id, false));
              }}
            >
              -
            </button>
            <div className="btn">{sp.soLuong}</div>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                dispatch(tangGiamSanPham(sp._id, true));
              }}
            >
              +
            </button>
          </div>
        </td>
        <td>
          <div className="btn">{sp.donGiaMoi}</div>
        </td>
        <td>
          <div className="btn">{sp.soLuong * sp.donGiaMoi}</div>
        </td>
        <td>
          {/* <button
              className="btn btn-outline-danger"
              onClick={() => {
                dispatch(xoaSanPham(sp._id));
              }}
            >
              Xóa
            </button> */}
          <Popconfirm
            title="Bạn có thực sự muốn xóa?"
            visible={visible}
            onConfirm={() => {
              // handleOk
              setConfirmLoading(true);
              setTimeout(() => {
                setVisible(false);
                setConfirmLoading(false);
                dispatch(xoaSanPham(sp._id));
              }, 1000);
            }}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
            _id={sp._id}
          >
            <Button type="primary" onClick={showPopconfirm}>
              Xóa
            </Button>
          </Popconfirm>
        </td>
      </tr>
    </>
  );
}

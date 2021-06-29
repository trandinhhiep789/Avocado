import React, { useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { history } from "../../Util/history";
import { useSelector, useDispatch } from "react-redux";
import { setLaiGioHang } from "../../Redux/Action/QuanLySanPhamAction";

export default function PayPal(tongTien) {
    
  const dispatch = useDispatch();
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: tongTien.tongTien,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

          Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })

          dispatch(
            setLaiGioHang([
              {
                _id: 0,
                tenSanPham: "",
                thongTinSanPham: "thongTinSanPham",
                congDung: "congDung",
                loaiDaPhuHop: "loaiDaPhuHop",
                huongDanSuDung: "huongDanSuDung",
                soLuong: 0,
                donGia: 0,
                imagleUrl: [],
              },
            ])
          );

          history.push("/trangchu");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  // alert(tongTien)
  // console.log((tongTien.tongTien)/23)
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

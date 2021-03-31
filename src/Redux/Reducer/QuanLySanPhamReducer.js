import swal from "sweetalert2";

const stateDefault = {
  gioHang: [
    {
      maSanPham: 0,
      tenSanPham: "",
      thongTinSanPham: "thongTinSanPham",
      congDung: "congDung",
      loaiDaPhuHop: "loaiDaPhuHop",
      huongDanSuDung: "huongDanSuDung",
      soLuong: 0,
      donGia: 0,
    },
  ],
};

const QuanLySanPhamReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //Xử lý cập nhật lại state
      let gioHangUpdate = [...state.gioHang];
      console.log("gioHangUpdate:");
      console.log(gioHangUpdate);

      console.log("spGH:");
      console.log(action.spGH);

      console.log("state.gioHang");
      console.log(state.gioHang.maSanPham);

      const index = gioHangUpdate.findIndex((card, i) => {
        return card.maSanPham == action.spGH.maSanPham;
      });

      console.log("index:");
      console.log(index);

      if (index != -1) {
        //tìm thấy
        //tăng số lượng
        gioHangUpdate[index].soLuong += 1;
      } else {
        //ko tìm thấy thì thêm vào mảng
        //copy thuộc tính SP rồi thêm số lượng
        // const newCard = { ...action.spGH, soLuong: 1 };
        // cardList = [...cardList, newCard];
        // gioHangUpdate = { ...newCard };
        gioHangUpdate.push(action.spGH);
      }

      swal.fire(
        "Thêm thành công",
        `Sản phẩm ${action.spGH.tenSanPham} đã được thêm vào giỏ`,
        "success"
      );

      //xóa cái sản phẩm thừa trong giỏ
      const indexDeleteAuto = gioHangUpdate.findIndex((card, i) => {
        return card.maSanPham == 0;
      });
      if (indexDeleteAuto != -1) {
        gioHangUpdate.splice(indexDeleteAuto, 1);
      }

      //Gán lại state cũ = giá trị mới tương đương việc setState tại component
      state.gioHang = gioHangUpdate;
      console.log(state.gioHang);

      return { ...state };
    }
    case "XOA_SAN_PHAM": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex((card, i) => {
        return card.maSanPham == action.maSanPhamDuocClick;
      });
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }

    case "TANG_GIAM_SANPHAM": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex((card, i) => {
        return card.maSanPham == action.maSanPham;
      });

      if (index != -1) {
        if (action.tangGiam === true) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          if (gioHangUpdate[index].soLuong > 1) {
            gioHangUpdate[index].soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }

    case "XET_LAI_GIOHANG": {
      let gioHangUpdate = action.dsRong;

      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default QuanLySanPhamReducer;

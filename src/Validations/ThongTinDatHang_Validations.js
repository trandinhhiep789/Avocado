import * as yup from 'yup'

export const thongTinDatHang_SChema = yup.object().shape({
    tenKhachHang: yup.string().required('Không được bỏ trống'),
    soDienThoai: yup.string().min(10,'Số điện thoại gồm 10 chữ số').max(10, 'Số điện thoại gồm 10 chữ số').required('Không được bỏ trống'),
    diaChi: yup.string().required('Không được bỏ trống'),
})
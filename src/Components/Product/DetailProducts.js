/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {DETAIL_PRODUCT_API} from "../../Redux/Const/Api"
import {IMAGE_API} from "../../Redux/Const/Api"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { binhLuanApiAction } from '../../Redux/Action/QuanLyNguoiDungActions';

// import DSSP from "../../Data/data.json";
import { useSelector, useDispatch } from "react-redux";
import { themSanPham } from "../../Redux/Action/QuanLySanPhamAction";
import * as yup from 'yup';

// thư viện ant-design
import "antd/dist/antd.css";
import { Image } from 'antd';
import { Tabs } from "antd";
// rate
import { Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const emoji = [
  "far fa-dizzy",
  "far fa-frown",
  "far fa-grin",
  "far fa-grin-wink",
  "far fa-grin-stars",
];
// <i class="far fa-grin-wink"></i>

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

//xét màu cho icon được vote
const setVoteClass = (value) => {
  if (value >= 4) {
    return "green";
  } else if (value >= 2) {
    return "orange";
  } else {
    return "red";
  }
};


const loginUserSchema = yup.object().shape({
    comment: yup.string().required('*Nội dung bình luần không được bỏ trống!'),
})



export default function DetailProducts({ match }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
  // console.log(userLogin.data[0].tenUser);
  if(userLogin.data){
    console.log(userLogin.data[0].tenUser);
  }

  let params = match.params;
  const [value, setValue] = useState({
    value: 5,
  });
  
  const [detail, setDetail] = useState([]);
  const [resetComment, setResetComment] = useState([]);

  const handleChange = (value) => {
    console.log(value);
    console.log(desc[value - 1]);
    setValue(value);
  };

  console.log("maSanPham");
  console.log(params.maSanPham);

  const handleSubmit = async (values) => {
    var abc = value
    setResetComment(abc)
    console.log(`value: ${values}` )
    dispatch(await binhLuanApiAction(values))
  }

  // const all = JSON.parse(JSON.stringify(DSSP))

  // const sp = all.filter((spham) => spham.maSanPham == params.maSanPham);
  // const spThemGioHang = all.filter((spham) => spham.maSanPham == params.maSanPham);
  // console.log("san pham");
  // console.log(sp[0]);

  var n = {}
  // GET DETAIL PRODUCT
  useEffect(async () => {
    const { data } = await axios.get(`${DETAIL_PRODUCT_API}${params.maSanPham}`);
    console.log("data detail");
    console.log(data.data);
    setDetail(data.data);
    console.log(data.data);
  }, [params.maSanPham]);

  return (
    <div className="container" style={{paddingTop:"140px",paddingBottom:"100px"}}>
      
      <div className="row khungHinh p-4">
        <div className="col col-md-5 text">
          <Image src={(detail.imageUrl || detail.imageUrl != null || detail.imageUrl != undefined)? IMAGE_API + detail.imageUrl[0].split("/")[1] : "https://picsum.photos/images"}  style={{width:"90%", margin:"0 auto"}} />
          <hr className="mt-4"></hr>
          <div className="mt-4">
              {detail.binhLuan?.map((bl) => {
                return <>
                  <div className="d-flex">
                    <div style={{background:"url(https://picsum.photos/25)", width:'25px', height:'25px', borderRadius:"50%"}}></div>
                    <div className="ml-4">
                      <p className="text-left" style={{fontWeight:"700"}}>{bl.tenUser}</p>
                      <p className="text-left">{bl.comment}</p>
                    </div>
                  </div>
                </>
              })}
              
          </div>
          {/* < textarea className="form-control my-4" rows="4" cols="50"></textarea>
          <button className="btn btn-info text-left mb-4">Bình luận</button> */}
          <div>
          <Formik initialValues={{
                comment: '',
                tenUser:( userLogin.data ? userLogin.data[0].tenUser: ""),
                product_id: params.maSanPham
            }}
                validationSchema={loginUserSchema}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <Form className='login__form mt-4'>
                        <div className="login__form-input">
                            <div className='formLogin'>
                                <textarea name='comment' className="form-control" aria-describedby="comment" placeholder="Bình luận" onChange={formikProps.handleChange} />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="comment" /></span>
                        </div>
                        
                        
                        <div className="mt-4">
                          {!userLogin.data ? <div>
                            <button className='btn btn-info' type='submit' disabled>Bình luận</button><br></br>
                            <i className="text-danger">* Tính năng bình luận chỉ có khi bạn đăng nhập hoặc bạn có thể bình luận bên dưới</i>
                          </div> : <button className='btn btn-info' type='submit'>Bình luận</button>}
                          
                        </div>
                    </Form>)} />
                    <div className="fb-comments khungHinh" data-href={`http://localhost:3000/detail/${params.maSanPham}`} data-width="100%" data-numposts="5"></div>
          </div>
        </div>
        <div className="col col-md-7">
          <h4>LA ROCHE POSAY</h4>  
          <div className="row my-4">
            <div className="col">
              <span style={{fontWeight:"500"}}>{detail.tenSanPham}</span>
            </div>
            <div className="col">
              <button
                className="btn btn-success w-100"
                onClick={() => {
                  dispatch(themSanPham({...detail}));
                }}
              >
                Thêm vào giỏ hàng 
              </button>
            </div>
          </div>
          <Tabs defaultActiveKey="2" onChange={callback} className="py-4">
            <TabPane tab="Thông tin thương hiệu" key="1">
              <br></br>
              {detail.thongTinThuongHieu}
            </TabPane>
            <TabPane tab="Công dụng" key="2">
              <br></br>
              {detail.congDung}
            </TabPane>
            <TabPane tab="Loại da phù hợp" key="3">
              <br></br>
              {detail.loaiDaPhuHop}
            </TabPane>
            <TabPane tab="Đánh giá" key="4">
              <span>
                <Rate
                  tooltips={desc}
                  emo={emoji}
                  onChange={handleChange}
                  value={value}
                  className="mr-4"
                />

                {value ? (
                  <i
                    className={emoji[value - 1]}
                    style={{
                      color: `${setVoteClass(value)}`,
                      fontSize: "40px",
                    }}
                  ></i>
                ) : (
                  ""
                )}

                {/* ["terrible", "bad", "normal", "good", "wonderful"]; */}
                {value ? (
                  <span className="ant-rate-text">
                    {`It was ` + desc[value - 1]}!
                  </span>
                ) : (
                  ""
                )}
              </span>
            </TabPane>
          </Tabs>
        </div>
      </div>
      
    </div>
  );
}

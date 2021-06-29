import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Router } from "react-router-dom";
import "antd/dist/antd.css";
// import logo from './movie2.gif';

import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, ReconciliationOutlined } from "@ant-design/icons";

import { connect } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
  if (userLogin.data) {
    console.log(userLogin.data[0].loaiUser[0]);
  }

  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  const { Component, ...restParams } = props;

  return (
    <Route
      {...restParams}
      render={(propsRoute) => {
        const { collapsed } = state;
        return (
          <>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  {/* https://picsum.photos/50/50 */}
                  <div className="py-4 text-center">
                    {/* <img src={logo} style={{ borderRadius: '50%', width: 50, height: 50 }} /> */}

                    {userLogin.data? (
                  <>
                    <img
                      src="https://picsum.photos/40/40"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    /> <br></br>
                    <br></br><p className="mt-3">Xin chào {userLogin.data[0].tenUser}</p> <br></br></>):""}

                    {/* {!collapsed ? (
                      <div className="mt-3 ml-1">
                        <span>Xin chào {}</span>
                      </div>
                    ) : (
                      ""
                    )} */}
                  </div>

                  <SubMenu
                    key="sub1"
                    icon={<ReconciliationOutlined />}
                    title="Product"
                  >
                    <Menu.Item key="3">
                      <NavLink to="/admin/quanlysanpham">Quan lý sản phẩm</NavLink>
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub2" icon={<UserOutlined />} title="User">
                    <Menu.Item key="6">
                      <NavLink to="/admin/quanlynguoidung">
                        Quản lý người dùng
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>

              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                />
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <Component
                    {...propsRoute}
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  />
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  ELTR Design ©2018 Created by ELTR SC
                </Footer>
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
};

// const mapStateToProps = state => {
//     return {
//         userLogin: state.QuanLyNguoiDungReducer,
//     }
// }
// export default connect(mapStateToProps)(AdminTemplate)

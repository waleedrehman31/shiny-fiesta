import React from "react";
import "./Navbar.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function Navbar() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="logo">Waleed ur Rehman</Menu.Item>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;

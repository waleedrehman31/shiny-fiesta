import React from "react";
import "./Main.css";
import { Layout, Image } from "antd";

const { Content } = Layout;

function Main() {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 35px", marginTop: "2em" }}>
        <div className="container">
          <h1 className="main-name">Waleed ur Rehman</h1>
          <Image
            className="main-header-image"
            preview={false}
            src="https://cdn.pixabay.com/photo/2016/03/09/09/17/desktop-1245714_960_720.jpg"
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Main;

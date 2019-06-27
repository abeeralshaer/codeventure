import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>Header</Header>
      <Content style={{ backgroundColor: "pink" }}>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;

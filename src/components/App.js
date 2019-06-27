import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;

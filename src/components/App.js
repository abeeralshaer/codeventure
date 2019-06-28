import React from "react";
import { Layout } from "antd";
import styled, { ThemeProvider } from "styled-components";
import Slider from "./Slider";
import theme from "../styles";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Header";
import Team from "./Team";
import Services from "./Services";
import Footer from "./Footer";
const { Content } = Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: "Montserrat", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Navbar />

        <Content>
          <Slider />
          <Team />
          <Services />
        </Content>
        <Footer />
        <GlobalStyle />
      </StyledLayout>
    </ThemeProvider>
  );
}

export default App;

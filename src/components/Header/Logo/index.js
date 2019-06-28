import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo.png";
import { Col } from "antd";

const Logo = styled.img`
  height: 30px;
  margin-top: 10px;
  @media (max-width: 500px) {
    height: 25px;
  }
`;

const Container = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default () => (
  <Container span={8} xs={6}>
    <Logo src={logo} />
  </Container>
);

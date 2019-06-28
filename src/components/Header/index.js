import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;
const StyledHeader = styled(Header)`
  position: fixed;
  ${props =>
    props.offset
      ? `
  background-color: ${props.theme.colors.WHITE};
  border-bottom: 1px solid ${props.theme.colors.LIGHT_GREY}`
      : `
  background-color: transparent;
  `}
  z-index: 3;
  padding: 0px 50px;
  width: 100vw;
  @media (max-width: 500px) {
    padding: 20px 20px;
  }
`;
let offset = false;

export default () => {
  const [offset, setOffset] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset > 0);
    };
  });
  return (
    <StyledHeader offset={offset}>
      <Logo />
      <MenuBar offset={offset} />
    </StyledHeader>
  );
};

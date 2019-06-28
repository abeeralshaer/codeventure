import React, { useState } from "react";
import { Row, Typography, Col, Icon } from "antd";
import styled from "styled-components";
import { Transition } from "react-transition-group";

import { navBarItems } from "../../../utils";

const { Text } = Typography;

const Container = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavbarItemText = styled(Text)`
  color: ${props =>
    props.offset ? props.theme.colors.DARKBLUE : props.theme.colors.WHITE};
  margin: 0px 15px;
  font-size: 18px;
  font-weight: 500;
`;

const StyledIcon = styled(Icon)`
  font-size: 30px;
  font-weight: bold;
  display: none;
  color: ${props => props.theme.colors.WHITE};
  @media (max-width: 500px) {
    display: block;
  }
`;

const DesktopNavBar = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 500px) {
    display: none;
  }
`;
const MobileViewNavBar = styled(Col)`
  width: 100vw;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 30px;
  background-color: rgba(85, 86, 90, 0.98);
  text-align: center;
  @media (max-width: 500px) {
    flex-direction: column;
    ${props =>
      props.showNavBar
        ? ` 
        height: 100%;
    transition: height 0.25s ease-in;
    display: flex`
        : ` 
         height: 0px;
        transition: height 0.25s ease-out;
        display: none;
        ;`}
  }
`;

const ItemWrapper = styled(Row)``;

export default ({ offset }) => {
  const [showNavBar, onHamburgerMenuClick] = useState(false);
  return (
    <Container span={18}>
      <DesktopNavBar type="flex" justify="space-around">
        {navBarItems.map((item, key) => (
          <NavbarItemText offset={offset} key={key}>
            {item.label}
          </NavbarItemText>
        ))}
      </DesktopNavBar>
      <StyledIcon type="menu" onClick={() => onHamburgerMenuClick(true)} />
      <MobileViewNavBar showNavBar={showNavBar}>
        <ItemWrapper
          type="flex"
          justify="end"
          align="middle"
          style={{ paddingRight: "30px" }}
        >
          <StyledIcon
            type="close"
            onClick={() => onHamburgerMenuClick(false)}
          />
        </ItemWrapper>
        {navBarItems.map((item, key) => (
          <ItemWrapper key={key}>
            <NavbarItemText>{item.label}</NavbarItemText>
          </ItemWrapper>
        ))}
      </MobileViewNavBar>
    </Container>
  );
};

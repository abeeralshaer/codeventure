import React from "react";
import styled from "styled-components";
import { Row, Layout } from "antd";
import { SectionContainer } from "../../common/Containers";
import Address from "./Address";
import References from "./References";

const { Footer } = Layout;
const ListContainer = styled(Row)`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 100vw;
`;

const Container = styled(Footer)`
  border-top: 1px solid ${props => props.theme.colors.LIGHT_GREY};
  background-color: ${props => props.theme.colors.WHITE};
`;

export default () => (
  <Container>
    <SectionContainer>
      <ListContainer>
        <Address />
        <References />
      </ListContainer>
    </SectionContainer>
  </Container>
);

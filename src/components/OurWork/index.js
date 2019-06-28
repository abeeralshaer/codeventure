import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { servicesList } from "../../utils";
import { SectionContainer } from "../../common/Containers";
import { SectionTitle } from "../../common/Texts/Headings";
import ServiceCard from "./ServiceCard";
import Text from "antd/lib/typography/Text";

const ListContainer = styled(Row)`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 100vw;
`;

export default () => (
  <SectionContainer>
    <SectionTitle>Our Services</SectionTitle>
    <ListContainer>
      <Text>Our Work Section</Text>
    </ListContainer>
  </SectionContainer>
);

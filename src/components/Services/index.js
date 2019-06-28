import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { servicesList } from "../../utils";
import { SectionContainer } from "../../common/Containers";
import { SectionTitle } from "../../common/Texts/Headings";
import ServiceCard from "./ServiceCard";

const ListContainer = styled(Row)`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-flow: row wrap;
  width: 100vw;
`;

export default () => (
  <SectionContainer style={{ backgroundColor: "wheat" }}>
    <SectionTitle>Our Services</SectionTitle>
    <ListContainer>
      {servicesList.map((service, key) => (
        <ServiceCard key={key} service={service} />
      ))}
    </ListContainer>
  </SectionContainer>
);

import React from "react";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import IstanbulIcon from "./IstanbulIcon";
import { ServicesIcon } from "../../../common/Icons";

const { Text, Title } = Typography;
const Container = styled(Col)``;
const Heading = styled(Title)`
  font-weight: bold;
`;

const SubHeading = styled(Text)`
  font-size: 18px;
`;

export default () => (
  <Container span={10}>
    <Row type="flex" align="middle" justify="start">
      <IstanbulIcon />
    </Row>
    <Heading>Istanbul, Turkey</Heading>
    <Row type="flex" align="middle" justify="start">
      <ServicesIcon noMargin type="phone" />
      <SubHeading>+90 (216) 346 04 06</SubHeading>
    </Row>
    <Row type="flex" align="middle" justify="start">
      <ServicesIcon noMargin type="environment" />
      <SubHeading>Sarayardı cd. No:100/19 Kadıköy, İstanbul</SubHeading>
    </Row>
    <Row type="flex" align="middle" justify="start">
      <ServicesIcon noMargin type="mail" />
      <SubHeading underline>info@codeventure.com.tr</SubHeading>
    </Row>
  </Container>
);

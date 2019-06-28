import React from "react";
import styled from "styled-components";
import { Col, Row, Typography, Avatar } from "antd";
import member_image from "../../../assets/images/member.jpg";
import { ServicesIcon, FontAwesomeIcon } from "../../../common/Icons";

const { Text, Title, Paragraph } = Typography;
const Container = styled(Col)``;
const ClientNameText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const ClientRoleText = styled(Text)`
  font-size: 14px;
`;

const ClientInfoWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ClientAvatar = styled(Avatar)`
  width: 100px !important;
  height: 100px !important;
`;
export default () => (
  <Container span={10}>
    <Title>References</Title>
    <Row type="flex" align="top" justify="start">
      <FontAwesomeIcon className="fas fa-quote-left" />
    </Row>
    <Row type="flex" align="middle" justify="start">
      <Paragraph>
        Experience with Fluper was great. If I get any project in my future days
        I am sure I am going to work with Fluper which defined true meaning of
        professionalism and dedication. I am sure I am going to work with Fluper
        which defined true meaning of professionalism and dedication.
      </Paragraph>
    </Row>
    <Row type="flex" align="top" justify="end">
      <FontAwesomeIcon className="fas fa-quote-right" />
    </Row>
    <Row type="flex" align="middle" justify="start">
      <ClientAvatar shape="circle" src={member_image} />
      <ClientInfoWrapper>
        <ClientNameText>Şahin Bezeng </ClientNameText>
        <ClientRoleText>CEO of Kitchen</ClientRoleText>
      </ClientInfoWrapper>
    </Row>
  </Container>
);

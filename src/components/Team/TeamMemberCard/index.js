import React from "react";
import styled from "styled-components";
import { Col, Typography } from "antd";
const { Text, Paragraph } = Typography;
const CardContainer = styled(Col)`
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  height: 300px;
  width: 250px;
  margin: 15px 15px;
`;

const MemberImage = styled.img`
  object-fit: cover;
  over-flow: hidden;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  background-color: #282b305c;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 15px;
`;

const MemberNameText = styled(Text)`
  color: ${props => props.theme.colors.WHITE};
  font-weight: bold;
  font-size: 16px;
`;

const RoleText = styled(Paragraph)`
  color: ${props => props.theme.colors.WHITE};
`;

export default ({ member: { name, role, image } }) => (
  <CardContainer>
    <MemberImage src={image} />
    <Overlay>
      <MemberNameText>{name}</MemberNameText>
      <RoleText>{role}</RoleText>
    </Overlay>
  </CardContainer>
);

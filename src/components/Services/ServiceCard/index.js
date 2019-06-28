import React from "react";
import styled from "styled-components";
import { Row, Typography, Col } from "antd";
import { ServicesIcon, FontAwesomeIcon } from "../../../common/Icons";

const { Text } = Typography;

const Title = styled(Text)`
  color: ${props => props.theme.colors.LIGHT_BLUE};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DescriptionText = styled(Text)`
  text-align: left;
  font-size: 16px;
`;

const Image = styled.img``;

const StackListContainer = styled(Row)``;

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  margin: 20px;
  align-items: center;
  align-self: center;
  border: 1px solid ${props => props.theme.colors.GREY};
  border-radius: 5px;
  padding: 25px;
`;

export default ({ service: { name, description, stack } }) => (
  <Container span={4} xs={20} lg={6} md={10}>
    <ServicesIcon />
    <Title>{name}</Title>
    <DescriptionText>{description}</DescriptionText>
    <DescriptionText underline>Stack</DescriptionText>
    <StackListContainer>
      {stack.map((item, key) =>
        item.type === "image" ? (
          <FontAwesomeIcon key={key} className="fab fa-react" />
        ) : (
          <ServicesIcon key={key} type={item.name} />
        )
      )}
    </StackListContainer>
  </Container>
);

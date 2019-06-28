import React from "react";
import styled from "styled-components";
import slider_image from "../../assets/images/slider.jpg";
import { Typography, Row, Col } from "antd";
import Button from "./Button";
const { Title } = Typography;

const Container = styled(Row)`
  min-height: 90vh;
  min-width: 90vw;
`;

const FullWidthSliderImage = styled(Row)`
  background-image: url(${slider_image});
  height: auto;
  background-position-x: center;
  background-repeat-y: no-repeat;
  background-size: cover;
  min-height: 90vh;
  min-width: 90vw;
`;

const Overlay = styled.div`
  position: absolute;
  min-width: 90vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.TRANSPARENT_WHEAT_2};
  z-index: 2;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 5%;
`;

const HeadingText = styled(Title)`
  color: ${props => props.theme.colors.WHITE} !important;
`;

export default () => (
  <Container>
    <FullWidthSliderImage />
    <Overlay>
      <HeadingText>
        We specialise in design and development of premium iOS, Android and Web
        products.
      </HeadingText>
      <Col span={10}>
        <Row type="flex" align="middle" justify="space-around">
          <Button bordered label="See our work" />
          <Button label="Contact us" />
        </Row>
      </Col>
    </Overlay>
  </Container>
);

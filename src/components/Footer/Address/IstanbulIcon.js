import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import istanbul_icon from "../../../assets/images/istanbul.png";

const Image = styled.img`
  height: 150px;
`;

export default () => <Image src={istanbul_icon} />;

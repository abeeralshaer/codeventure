import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
  font-weight: 500;
  width: 200px;
`;

export default ({ label, bordered }) => (
  <StyledButton size="large" shape="round" ghost={bordered} type="primary">
    {label}
  </StyledButton>
);

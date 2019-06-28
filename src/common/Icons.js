import React from "react";
import styled from "styled-components";
import { Icon } from "antd";
import colors from "../styles/colors";

export const ServicesIcon = styled(props => {
  const { type, size, color } = props;
  return <Icon type={type} style={{ fontSize: size, color }} {...props} />;
})`
  font-size: ${props => props.size};
  color: ${props => props.theme.colors.DARKBLUE};
  margin: ${props => (props.noMargin ? `10px 10px 0px 0px` : `15px 25px`)};
`;

export const FontAwesomeIcon = styled.i`
  font-size: ${props => props.size};
  color: ${props => props.theme.colors.DARKBLUE};
`;

export const GeneralIcon = ({ type, name }) => <FontAwesomeIcon />;

ServicesIcon.defaultProps = {
  size: "30px",
  color: colors.DARK_BLUE,
  type: "code"
};

FontAwesomeIcon.defaultProps = {
  size: "30px",
  color: colors.DARK_BLUE
};

import styled from "styled-components";

const StyledButton = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-align: ${(props) => props.align};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin};
  background-color: #${(props) => props.backgroundcolor};
`;
const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;

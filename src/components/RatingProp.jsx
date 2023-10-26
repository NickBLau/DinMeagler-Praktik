import styled from "styled-components";

const StyledRating = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-top: ${(props) => props.margintop}px;
  margin-left: ${(props) => props.marginleft}px;
  background-color: #${(props) => props.backgroundcolor};
  text-align: center;
`;
const Rating = (props) => {
  return <StyledRating {...props}>{props.text}</StyledRating>;
};

export default Rating;

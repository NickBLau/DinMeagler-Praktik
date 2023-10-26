import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  width: ${(props) => props.width}px;
  margin-top: ${(props) => props.margintop}px;
`;
const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;

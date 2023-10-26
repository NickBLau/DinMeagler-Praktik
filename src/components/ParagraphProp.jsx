import styled from "styled-components";

const StyledParagraph = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-align: ${(props) => props.align};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  width: ${(props) => props.width}px;
  margin-top: ${(props) => props.margintop}px;
  margin: ${(props) => props.margin};
`;
const Paragraph = (props) => {
  return <StyledParagraph {...props}>{props.text}</StyledParagraph>;
};

export default Paragraph;

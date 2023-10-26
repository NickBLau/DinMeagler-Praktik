import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1920px;
  height: 90px;
  background-color: #162a41;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
`;

const LayoutBy = () => {
  return (
    <StyledDiv>
      <StyledP>Layout By Jit Banik 2020</StyledP>
    </StyledDiv>
  );
};

export default LayoutBy;

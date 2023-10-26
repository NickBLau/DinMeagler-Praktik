import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #ffffff;
  width: 30px;
  height: 30px;
  margin-top: 30px;
  text-align: center;
`;

const Rating = ({ value }) => {
  return (
    <StyledDiv
      style={{
        backgroundColor:
          value === "A"
            ? "#10AC84"
            : value === "B"
            ? "#F2C94C"
            : value === "C"
            ? "#F2994A"
            : "#EB5757",
      }}
    >
      <p>{value}</p>
    </StyledDiv>
  );
};

export default Rating;

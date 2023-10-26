import styled from "styled-components";

import ReactSlider from "react-slider";
import React, { useEffect } from "react";

import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
const StyledPriceP = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #7b7b7b;
`;

const PriceSlider = () => {
  // const [value, setValue] = useState([0, 12000000]);

  const [value, setValue] = useLocalStorage("value", "");
  return (
    <>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[value[0], value[1]]}
        min={100000}
        max={12000000}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        pearling
        onChange={(value, index) => {
          console.log(
            "🚀 ~ file: PriceSlider.jsx:28 ~ PriceSlider ~ value:",
            value
          );
          return setValue(value);
        }}
      />
      <div className="Flex Space-between width-100%">
        <StyledPriceP>{value[0].toLocaleString()} kr.</StyledPriceP>
        <StyledPriceP>{value[1].toLocaleString()}kr.</StyledPriceP>
      </div>
    </>
  );
};

export default PriceSlider;

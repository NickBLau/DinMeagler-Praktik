import styled from "styled-components";
import Heading from "../components/HeadingProp";

import PriceSlider from "../components/PriceSlider";
import PropertySelect from "../components/PropertySelect";
import PropteryCardsWithHearts from "../templates/PropteryCardsWithhearts.jsx";

const StyledWrapper = styled.div`
  max-width: 1920px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 50px;
`;

const SearchBox = styled.div`
  width: 1160px;
  height: 147px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 75px;
`;

const StyledDecorativeLine = styled.div`
  width: 43px;
  height: 2px;
  background-color: #162a41;
  margin-top: 10px;
  margin-bottom: 20px;
  outline: 2px solid #162a41;
`;

const StyledFlexWrap = styled.div`
  width: 1160px;
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const FilterProperty = () => {
  return (
    <>
      <StyledWrapper>
        <SearchBox>
          <Heading
            title={"Søg efter dit drømmehus"}
            size="20"
            weight="600"
            as="h3"
            color="2A2C30"
            lineheight="30"
          ></Heading>
          <StyledDecorativeLine></StyledDecorativeLine>
          <form className="Flex Gap-25 Align-items-center">
            <PropertySelect></PropertySelect>
            <div className="Flex-directionColumn ">
              <div className="Margin-top-5">
                <Heading
                  title={"Pris-interval"}
                  size="16"
                  weight="200"
                  as="h4"
                  color="333333"
                  lineheight="28"
                ></Heading>
              </div>
              <PriceSlider></PriceSlider>
            </div>
          </form>
        </SearchBox>
        <StyledFlexWrap>
          <PropteryCardsWithHearts></PropteryCardsWithHearts>
        </StyledFlexWrap>
      </StyledWrapper>
    </>
  );
};

export default FilterProperty;

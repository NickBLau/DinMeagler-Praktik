import styled from "styled-components";
import Heading from "./HeadingProp";

const StyledWrapper = styled.div`
  max-width: 1920px;
  height: 284px;
  background-image: url(NewsLetterBackground.png);
  background-position-y: 85%;
  background-position-x: 50%;
  background-color: #162a41;
`;

const NewsLetterFilter = styled.div`
  background-color: rgba(69, 84, 99, 0.9);
  height: 100%;
`;

const StyledSearch = styled.input`
  color: #7b7b7b;
  font-size: 18px;
  line-height: 30px;
  border: none;
  border-radius: 5px;
  width: 540px;
  height: 74px;
  padding-left: 20px;
  margin-left: 70px;
  background-image: url(Arrow.png);
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 95%;
`;

const NewsLetters = () => {
  return (
    <StyledWrapper>
      <NewsLetterFilter>
        <div className="Flex Center height-full">
          <Heading
            title={
              "Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet"
            }
            size="30"
            weight="bold"
            as="h2"
            color="FFFFFF"
            lineheight="42"
            width="540"
            height="84"
          ></Heading>
          <div className="Flex">
            <StyledSearch
              type="search"
              placeholder="Indtast din email adresse"
            />
          </div>
        </div>
      </NewsLetterFilter>
    </StyledWrapper>
  );
};

export default NewsLetters;

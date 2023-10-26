import styled from "styled-components";

import Heading from "../components/HeadingProp";
import NavMenu from "../templates/NavMenu";
import Paragraph from "../components/ParagraphProp";
import Button from "../components/ButtonProp";
import FooterErrorPage from "../components/FooterErrorPage";

import { Link } from "react-router-dom";
const StyledBG = styled.section`
  max-width: 1920px;
  height: 700px;

  background-color: #eef7ff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const StyledBoxElement = styled.div`
  width: 475px;
  height: 90px;
  position: relative;
  z-index: -1;
  background-color: #162a41;
`;

const HeaderBox = styled.div`
  height: 200px;
  display: grid;
  position: relative;
  z-index: 1;
  grid-template-rows: 115px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const ErrorPage = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <StyledBG onClick={scrollToTop}>
        <HeaderBox>
          <Heading
            className="Text-stroke-Black-Small Grid-column-1 Grid-row-1"
            title={"HOV!"}
            size="200"
            weight="bold"
            as="h1"
            color="FFFFFF"
            lineheight="200"
          ></Heading>{" "}
          <StyledBoxElement></StyledBoxElement>
        </HeaderBox>
        <StyledDiv>
          <Heading
            title={"Du er havnet på en side som ikke findes! "}
            size="30"
            weight="600"
            as="h2"
            color="2A2C30"
            lineheight="42"
          ></Heading>

          <Paragraph
            text={
              "Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen."
            }
            size="18"
            as="p"
            lineheight="30"
            color="333333"
            width="450"
          ></Paragraph>
          <Link to="/HomePage">
            <Button
              className="Pointer"
              text={"Tilbage til forsiden"}
              size="18"
              as="button"
              lineheight="30"
              color="FFFFFF"
              width="215"
              height="62"
              backgroundcolor="162A41"
            ></Button>
          </Link>
        </StyledDiv>
      </StyledBG>
      <FooterErrorPage></FooterErrorPage>
    </>
  );
};

export default ErrorPage;

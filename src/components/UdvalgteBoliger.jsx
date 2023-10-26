import styled from "styled-components";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";
import PropertyCards from "../templates/PropertyCards";
import Button from "./ButtonProp";
import { Link } from "react-router-dom";
const StyledWrapper = styled.div`
  background-color: #f8f8fb;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledFlexWrap = styled.div`
  width: 1160px;
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const UdvalgteBoliger = () => {
  return (
    <StyledWrapper>
      <div>
        <Heading
          title={"Udvalgte Boliger"}
          size="38"
          weight="bold"
          as="h2"
          color="263048"
          lineheight="54"
          margintop="125"
        ></Heading>

        <Paragraph
          text={
            "There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some"
          }
          size="18"
          weight="200"
          as="p"
          lineheight="30"
          color="333333"
          width="646"
          margin="30px auto"
        ></Paragraph>
        <StyledFlexWrap>
          <PropertyCards></PropertyCards>
        </StyledFlexWrap>
        <Link to="/PropertyList">
          <Button
            onClick={scrollToTop}
            text={"Se alle boliger"}
            size="18"
            weight="200"
            as="button"
            lineheight="30"
            color="FFFFFF"
            backgroundcolor="162A41"
            width="175"
            height="60"
            margin="60px auto"
          ></Button>
        </Link>
      </div>
    </StyledWrapper>
  );
};

export default UdvalgteBoliger;

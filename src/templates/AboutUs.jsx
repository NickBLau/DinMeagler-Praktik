import styled from "styled-components";
import Heading from "../components/HeadingProp";
import Paragraph from "../components/ParagraphProp";
import AboutUsCard from "../components/AboutUSCard";

const StyledGrid = styled.div`
  max-width: 1920px;
  height: 1022px;
  display: grid;
  grid-template-columns: 1fr 540px 570px 1fr;
  grid-template-rows: 120px 400px 172px 70px;
  background-color: white;
`;

const StyledIMG = styled.div`
  max-width: 477px;
  max-height: 502px;
  grid-column-start: 2;
  grid-row-start: 2;
`;

const StyledHeader = styled.div`
  width: 540px;
  color: #263048;
  font-size: 38px;
  line-height: 54px;
  font-weight: bold;
  grid-column-start: 3;
  grid-row-start: 2;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledIcon = styled.div`
  width: 42px;
  height: 42px;
`;

const StyledIconBG = styled.div`
  width: 70px;
  height: 70px;
  background-color: #eef7ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #2a2c30;
  line-height: 32px;
`;

const StyledIconParagraph = styled.p`
  font-size: 18px;
  color: #333333;
  line-height: 30px;
`;

const GrayBorder = styled.div`
  border-bottom: 1px solid #d3dee8;
  grid-row-start: 3;
  grid-column-start: 2;
  grid-column-end: 4;
`;

const AboutUs = () => {
  return (
    <StyledGrid className="">
      <StyledIMG>
        <img src="Image38+years.png" alt="" srcSet="" />
      </StyledIMG>

      <StyledHeader>
        <Heading
          title={"Vi har fulgt danskerne hjem i snart 4 årtier"}
          size="38"
          weight="bold"
          as="h2"
          color="263048"
          lineheight="54"
          width="500"
        />{" "}
        <StyledDiv>
          <Heading
            title={"Det synes vi siger noget om os!"}
            size="24"
            weight="700"
            as="h3"
            color="162A41"
            lineheight="32"
          />

          <Paragraph
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution."
            }
            size="18"
            weight="200"
            as="p"
            lineheight="30"
            color="333333"
          />
          <Paragraph
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
            size="18"
            weight="200"
            as="p"
            lineheight="30"
            color="333333"
          />
        </StyledDiv>
        <div className="Flex Space-between">
          <div className="Flex">
            <StyledIconBG>
              <StyledIcon>
                <img src="Home2.png" alt="" srcSet="" />
              </StyledIcon>
            </StyledIconBG>
            <div className="Margin-left-25">
              <StyledIconHeading>4829</StyledIconHeading>
              <StyledIconParagraph>boliger solgt</StyledIconParagraph>
            </div>
          </div>
          <div className="Flex">
            <StyledIconBG>
              <StyledIcon>
                <img src="Home2.png" alt="" srcSet="" />
              </StyledIcon>
            </StyledIconBG>
            <div className="Margin-left-25">
              <StyledIconHeading>158</StyledIconHeading>
              <StyledIconParagraph>boliger til salg</StyledIconParagraph>
            </div>
          </div>
        </div>
      </StyledHeader>
      <GrayBorder></GrayBorder>
      <AboutUsCard></AboutUsCard>
    </StyledGrid>
  );
};

export default AboutUs;

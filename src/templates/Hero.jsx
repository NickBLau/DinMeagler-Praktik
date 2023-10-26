import styled from "styled-components";
import Paragraph from "../components/ParagraphProp";
import Button from "../components/ButtonProp";

const StyledHero = styled.article`
  max-width: 1920px;
  height: 700px;
  margin-top: 20px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 920px 1fr;
  grid-template-rows: 230px 100px 1fr;
  background-image: url(Hero.jpg);
  background-position-y: 85%;
  background-position-x: 50%;
`;

const StyledImg = styled.img`
  margin-bottom: 150px;
  grid-column-start: 1;
`;

const StyledSection = styled.section`
  width: 920px;
  height: 220px;
  padding: 30px;
  background-color: white;
  grid-column-start: 2;
  grid-row-start: 3;
`;

const StyledHeader = styled.h1`
  color: white;
  text-align: center;
  font-size: 50px;
  line-height: 66px;
  font-weight: bold;
  grid-column-start: 2;
  grid-row-start: 2;
`;

const StyledSearch = styled.input`
  color: #7b7b7b;
  font-size: 16px;
  line-height: 26px;
  border: 1px solid #d3dee8;
  width: 728px;
  height: 48px;
  margin-top: 10px;
  padding-left: 10px;
`;

const StyledDecorativeLine = styled.div`
  width: 43px;
  height: 4px;
  background-color: #162a41;
  margin-top: 12px;
  margin-bottom: 30px;
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeader>Søg efter din drømmebolig</StyledHeader>
      <StyledSection>
        <Paragraph
          text={"Søg blandt 158 boliger til salg i 74 butikker "}
          size="20"
          weight="900"
          as="p"
          lineheight="30"
          color="2A2C30"
        ></Paragraph>
        <StyledDecorativeLine></StyledDecorativeLine>
        <Paragraph
          text={"Hvad skal din næste bolig indeholde"}
          size="16"
          weight="200"
          as="p"
          lineheight="28"
          color="333333"
        ></Paragraph>
        <div>
          <StyledSearch
            type="search"
            placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
          />
          <Button
            text={"Søg"}
            size="16"
            weight="200"
            as="button"
            lineheight="28"
            color="FFFFFF"
            backgroundcolor="162A41"
            width="120"
            height="48"
          ></Button>
        </div>
      </StyledSection>
    </StyledHero>
  );
};

export default Hero;

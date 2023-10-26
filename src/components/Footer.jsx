import styled from "styled-components";
import InfoArticle from "./InfoArticle";
import QuickLinks from "./QuickLinks";
import DMS from "./DMS";
const StyledBG = styled.div`
  max-width: 1920px;
  height: 560px;
  background-color: #f8f8fb;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
`;

const StyledSection = styled.section`
  width: 740px;
  height: 133px;
  grid-column-start: 2;
  margin-top: 78px;
  margin-bottom: 60px;
`;
const StyledP = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #333333;
  margin-top: 20px;
`;

const LinksGrid = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  margin-left: 80%;
`;

const DmsGrid = styled.div`
  margin-top: 40px;
  grid-column-end: 2;
  grid-row-start: 3;
`;

const Footer = () => {
  return (
    <>
      <StyledBG>
        <StyledSection>
          <img src="../Logo.svg" alt="" srcet="" />
          <StyledP>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </StyledP>
        </StyledSection>
        <InfoArticle></InfoArticle>
        <LinksGrid>
          <QuickLinks></QuickLinks>
        </LinksGrid>
      </StyledBG>
      <DmsGrid>
        <DMS></DMS>
      </DmsGrid>
    </>
  );
};

export default Footer;

import styled from "styled-components";
import FooterMenu from "../templates/FooterMenu";
import NavMenu from "../templates/NavMenu";
import BannerWithFilter from "../components/BannerWithFilter";
import Heading from "../components/HeadingProp";
import Paragraph from "../components/ParagraphProp";

import ContactUsForm from "../components/ContactUsForm";

import { BsFillTelephoneFill } from "react-icons/Bs";
import { BiSolidPaperPlane } from "react-icons/bi";
import { PiMapPinFill } from "react-icons/pi";

const StyledBanner = styled.div`
  max-width: 1920px;
  height: 192px;
  margin-top: 20px;
  background-image: url(BannerImage.png);
  background-position-y: 40%;
  background-position-x: 100%;
  background-color: #162a41;
`;

const StyledWrapper = styled.div`
  max-width: 1920px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: start;
`;

const StyledDecorativeLine = styled.div`
  width: 110px;
  height: 4px;
  background-color: #2a2c30;
  margin-top: 12px;
  margin-bottom: 32px;
`;

const StyledGrayDecorativeLine = styled.div`
  width: 381px;
  height: 2px;
  background-color: #d3dee8;
  margin: 0 auto 0 auto;
  padding: 0%;
`;

const StyledMapWrapper = styled.figure`
  max-width: 100vw;
  height: 500px;
  overflow: hidden;
`;

const StyledAside = styled.aside`
  width: 445px;
  height: 710px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
`;

const StyledArticle = styled.article`
  width: 150px;
  height: 136px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

const StyledIcon = styled.figure`
  width: 50px;
  min-height: 50px;
  background-color: #162a41;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBsFillTelephoneFill = styled(BsFillTelephoneFill)`
  width: 24px;
  height: 24px;
  color: white;
`;

const StyledBiSolidPaperPlane = styled(BiSolidPaperPlane)`
  width: 24px;
  height: 24px;
  color: white;
`;

const StyledPiMapPinFill = styled(PiMapPinFill)`
  width: 24px;
  height: 24px;
  color: white;
`;

const StyledSection = styled.section`
  width: 1110px;
  height: 186px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
`;

const ContactUs = () => {
  return (
    <>
      <NavMenu></NavMenu>{" "}
      <StyledBanner>
        <BannerWithFilter
          title={"Kontakt os"}
          size="60"
          weight="bolder"
          as="h2"
          color="FFFFFF"
          lineheight="80"
          width="713"
          height="80"
        ></BannerWithFilter>
      </StyledBanner>
      <StyledSection>
        <Heading
          title={"Vi sidder klar til at besvare dine spørgsmål"}
          size="30"
          weight="bold"
          as="h1"
          lineheight="42"
          color="2A2C30"
        ></Heading>

        <StyledDecorativeLine></StyledDecorativeLine>

        <Paragraph
          text={
            "Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig."
          }
          size="18"
          as="p"
          lineheight="30"
          color="333333"
        ></Paragraph>
        <Paragraph
          text={
            "Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål."
          }
          size="18"
          as="p"
          lineheight="30"
          color="333333"
        ></Paragraph>
      </StyledSection>
      <StyledWrapper>
        <div className="Flex Gap-30">
          <ContactUsForm></ContactUsForm>
          <StyledAside>
            <StyledArticle>
              <StyledIcon>
                <StyledBsFillTelephoneFill></StyledBsFillTelephoneFill>
              </StyledIcon>
              <Heading
                title={"Ring til os"}
                size="20"
                weight="bold"
                as="h3"
                lineheight="30"
                color="2A2C30"
              ></Heading>
              <Paragraph
                text={"++45 7070 4000"}
                size="18"
                as="p"
                lineheight="30"
                color="333333"
              ></Paragraph>
            </StyledArticle>
            <StyledGrayDecorativeLine></StyledGrayDecorativeLine>
            <StyledArticle>
              {" "}
              <StyledIcon>
                <StyledBiSolidPaperPlane></StyledBiSolidPaperPlane>
              </StyledIcon>
              <Heading
                title={"send en mail"}
                size="20"
                weight="bold"
                as="h3"
                lineheight="30"
                color="2A2C30"
              ></Heading>
              <Paragraph
                text={"4000@dinmaegler.dk"}
                size="18"
                as="p"
                lineheight="30"
                color="333333"
              ></Paragraph>
            </StyledArticle>
            <StyledGrayDecorativeLine></StyledGrayDecorativeLine>
            <StyledArticle>
              {" "}
              <StyledIcon>
                <StyledPiMapPinFill></StyledPiMapPinFill>
              </StyledIcon>
              <Heading
                title={"Besøg butikken"}
                size="20"
                weight="bold"
                as="h3"
                lineheight="30"
                color="2A2C30"
              ></Heading>
              <Paragraph
                text={"Stændertorvet 78, 4000 Roskilde"}
                size="18"
                as="p"
                lineheight="30"
                color="333333"
              ></Paragraph>
            </StyledArticle>
          </StyledAside>
        </div>
      </StyledWrapper>
      <StyledMapWrapper>
        <img src="Map.png" alt="" srcet="" />
      </StyledMapWrapper>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default ContactUs;

import styled from "styled-components";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";

const StyledWrapper = styled.section`
  max-width: 1920px;
  height: 553px;
  background-color: #25517a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1920px;
  height: 553px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 254px;
  color: white;
  gap: 20px;
`;

const LogoBox = styled.figure`
  width: 22px;
  height: 40px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 333px;
  height: 262px;
  gap: 20px;
  color: white;
`;

const StyledLi = styled.li`
  font-size: 18px;
  line-height: 40px;
  color: #d5e0ea;
  &:before {
    content: " >   ";
  }
`;

const StyledUl = styled.ul`
  width: 153px;
  height: 200px;
`;

const InstantgramBox = styled.div`
  width: 294px;
  height: 252px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFigure = styled.figure`
  width: 90px;
  height: 90px;
`;

const InstagramPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FooterErrorPage = () => {
  return (
    <>
      <StyledWrapper>
        <ContentWrapper className="Blue-border">
          <StyledArticle>
            <div className="Flex Gap-10">
              <LogoBox>
                <img src="GhorBariLogo.png" alt="" srcet="" />
              </LogoBox>

              <Heading
                title={"Ghor Bari"}
                size="28"
                weight="bold"
                as="h2"
                lineheight="40"
              ></Heading>
            </div>

            <Paragraph
              text={
                "There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration."
              }
              size="18"
              as="p"
              lineheight="30"
              color="D5E0EA"
            ></Paragraph>
            <div>
              <Heading
                title={"Business Hour"}
                size="20"
                weight="bold"
                as="h3"
                color="D5E0EA"
                lineheight="30"
              ></Heading>

              <Paragraph
                text={"Monday - Friday 10:00am - 06:00pm"}
                size="18"
                as="p"
                lineheight="30"
                color="D5E0EA"
              ></Paragraph>
            </div>
          </StyledArticle>

          <StyledNav>
            <Heading
              title={"Important Links"}
              size="24"
              weight="600"
              as="h2"
              color="white"
              lineheight="32"
            ></Heading>
            <div className="Flex">
              <StyledUl>
                <StyledLi>Our services</StyledLi>
                <StyledLi>Privacy</StyledLi>
                <StyledLi>Contacts</StyledLi>
                <StyledLi>Meet Our Team</StyledLi>
                <StyledLi>Help Desk</StyledLi>
              </StyledUl>
              <StyledUl>
                <StyledLi>Our services</StyledLi>
                <StyledLi>Privacy</StyledLi>
                <StyledLi>Contacts</StyledLi>
                <StyledLi>Meet Our Team</StyledLi>
                <StyledLi>Help Desk</StyledLi>
              </StyledUl>
            </div>
          </StyledNav>

          <InstantgramBox>
            <Heading
              title={"Follow Instagram"}
              size="24"
              weight="600"
              as="h3"
              color="FFFFFF"
              lineheight="32"
            ></Heading>

            <InstagramPhotos>
              <StyledFigure>
                <img src="Instagram/InstaPic1.png" alt="" />
              </StyledFigure>
              <StyledFigure>
                <img src="Instagram/InstaPic2.png" alt="" />
              </StyledFigure>
              <StyledFigure>
                <img src="Instagram/InstaPic3.png" alt="" />
              </StyledFigure>
              <StyledFigure>
                <img src="Instagram/InstaPic4.png" alt="" />
              </StyledFigure>
              <StyledFigure>
                <img src="Instagram/InstaPic5.png" alt="" />
              </StyledFigure>
              <StyledFigure>
                <img src="Instagram/InstaPic6.png" alt="" />
              </StyledFigure>
            </InstagramPhotos>
          </InstantgramBox>
        </ContentWrapper>
        <div className="Text-align-center">
          <Paragraph
            className="Margin-bottom-15 Margin-top-15 "
            text={"All Right Reserve By Jit Banik 2020"}
            size="18"
            as="p"
            lineheight="30"
            color="D5E0EA"
          ></Paragraph>
        </div>
      </StyledWrapper>
    </>
  );
};

export default FooterErrorPage;

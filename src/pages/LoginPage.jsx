import styled from "styled-components";
import NavMenu from "../templates/NavMenu";
import FooterMenu from "../templates/FooterMenu";
import BannerWithFilterLarge from "../components/BannerWithFilterLarge";
import Heading from "../components/HeadingProp";
import Button from "../components/ButtonProp";
import Paragraph from "../components/ParagraphProp";
import { Link } from "react-router-dom";

const StyledBanner = styled.div`
  max-width: 1920px;
  height: 350px;
  margin-top: 20px;
  background-image: url(BannerImageLarge.png);
  background-repeat: no-repeat;
  background-position-y: 40%;
  background-position-x: 100%;
  background-color: #162a41;
`;

const StyledBG = styled.div`
  max-width: 1920px;
  height: 986px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const StyledLoginBox = styled.section`
  width: 920px;
  height: 746px;
  padding: 75px 0;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  text-align: center;
  gap: 20px;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 5px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 575px;
  height: 50px;
  padding: 10px;
  font-size: 18;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
  margin-bottom: 24px;
`;
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
const LoginPage = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <StyledBanner>
        <BannerWithFilterLarge
          as="p"
          title={"Account Login"}
          text={"Home"}
          description={"Login"}
        ></BannerWithFilterLarge>
      </StyledBanner>
      <StyledBG onClick={scrollToTop}>
        <StyledLoginBox>
          <Heading
            title={"Log ind på din konto"}
            size="30"
            weight="600"
            as="h1"
            color="2A2C30"
            lineheight="42"
          ></Heading>
          <form className="Flex-directionColumn">
            <StyledLabel>
              Email
              <StyledInput type="email" placeholder="Email" />
            </StyledLabel>
            <StyledLabel>
              Password
              <StyledInput type="password" placeholder="Password" />
            </StyledLabel>
            <Button
              text={"Log ind"}
              size="20"
              as="button"
              lineheight="30"
              color="FFFFFF"
              width="575"
              height="60"
              backgroundcolor="162A41"
            ></Button>
          </form>

          <div>
            <div className="Text-align-start Margin-bottom-15 Margin-top-25">
              <Paragraph
                text={"Log ind med "}
                size="18"
                as="p"
                lineheight="30"
                color="333333"
              ></Paragraph>
            </div>
            <div className="Flex Gap-30 No-border">
              <Button
                className="No-border"
                text={"Google"}
                size="20"
                as="button"
                lineheight="30"
                color="FFFFFF"
                width="170"
                height="60"
                margin-top="1"
                backgroundcolor="DD4B39"
              ></Button>
              <Button
                className="No-border"
                text={"Facebook"}
                size="20"
                as="button"
                lineheight="30"
                color="FFFFFF"
                width="175"
                height="60"
                margin-top="1"
                backgroundcolor="3B5999"
              ></Button>
              <Button
                className="No-border"
                text={"Twitter"}
                size="20"
                as="button"
                lineheight="30"
                color="FFFFFF"
                width="170"
                height="60"
                margin-top="1"
                backgroundcolor="162A41"
              ></Button>
            </div>
          </div>
          <div className="Flex Margin-top-25 Gap-5">
            <Paragraph
              text={"Har du ikke en konto? "}
              size="18"
              as="p"
              lineheight="30"
              color="333333"
            ></Paragraph>{" "}
            <Link to="/RegisterPage">
              <Paragraph
                text={"Opret bruger. "}
                size="18"
                as="p"
                lineheight="30"
                color="2F80ED"
              ></Paragraph>
            </Link>
          </div>
        </StyledLoginBox>
      </StyledBG>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default LoginPage;

import styled from "styled-components";
import FooterMenu from "../templates/FooterMenu";
import NavMenu from "../templates/NavMenu";
import BannerWithFilterLarge from "../components/BannerWithFilterLarge";
import CreateAccount from "../templates/CreateAccount";

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

const Register = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <StyledBanner>
        <BannerWithFilterLarge
          as="p"
          title={"Account Register"}
          text={"Home"}
          description={"Register"}
        ></BannerWithFilterLarge>
      </StyledBanner>
      <CreateAccount></CreateAccount>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default Register;

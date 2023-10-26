import styled from "styled-components";

import FooterMenu from "../templates/FooterMenu";
import NavMenu from "../templates/NavMenu";
import AllWorkers from "../templates/AllWorkers";
import BannerWithFilter from "../components/BannerWithFilter";

const StyledBanner = styled.div`
  max-width: 1920px;
  height: 192px;
  margin-top: 20px;
  background-image: url(../BannerImage.png);
  background-position-y: 40%;
  background-position-x: 100%;
  background-color: #162a41;
`;
const WorkersPage = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <StyledBanner>
        <BannerWithFilter
          title={"Medarbejdere i Roskilde"}
          size="60"
          weight="bolder"
          as="h2"
          color="FFFFFF"
          lineheight="80"
          width="713"
          height="80"
        ></BannerWithFilter>
      </StyledBanner>
      <AllWorkers></AllWorkers>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default WorkersPage;

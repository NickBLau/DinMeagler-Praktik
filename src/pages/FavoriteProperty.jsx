import styled from "styled-components";

import Footer from "../components/Footer";
import NavMenu from "../templates/NavMenu";
import BannerWithFilter from "../components/BannerWithFilter";
import PropteryCardhorizontal from "../components/PropteryCardHorizontal";

const StyledBanner = styled.div`
  max-width: 1920px;
  height: 192px;
  margin-top: 20px;
  background-image: url(BannerImage.png);
  background-position-y: 40%;
  background-position-x: 100%;
  background-color: #162a41;
`;

const StyledDiv = styled.div`
  max-width: 1920px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 125px 10%;
  gap: 25px;
`;

const StyledSearch = styled.input`
  color: #7b7b7b;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 300px;
  height: 42px;
  padding-left: 40px;
  background-image: url(SearchIcon.png);
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 5%;
`;

const GrayBorder = styled.div`
  border-bottom: 1px solid #d3dee8;
  width: 1110px;
  margin-bottom: 20px;
`;

const FavoriteProperty = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <StyledBanner>
        <BannerWithFilter
          title={"Mine favoritboliger"}
          size="60"
          weight="bolder"
          as="h2"
          color="FFFFFF"
          lineheight="80"
          width="713"
          height="80"
        ></BannerWithFilter>
      </StyledBanner>
      <StyledDiv>
        <StyledSearch type="search" placeholder="Søg i favoritter" />

        <GrayBorder></GrayBorder>
        <PropteryCardhorizontal></PropteryCardhorizontal>
      </StyledDiv>
      <Footer></Footer>
    </>
  );
};

export default FavoriteProperty;

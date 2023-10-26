import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledSection = styled.section`
  background-color: white;
  max-width: 1920px;
  padding-top: 20px;
`;

const StyledP = styled.p`
  color: #333333;
  height: 62px;
  display: flex;
  align-items: center;
  gap: 17px;
  font-size: 18px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledImg = styled.div``;

const StyledLi = styled.li``;
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const DinMaegler = () => {
  return (
    <StyledSection onClick={scrollToTop}>
      <div className="Flex Space-evenly Gap-60">
        <Link to="/HomePage">
          <StyledImg>
            <img className="white" src="../Logo.png" alt="" srcet="" />
          </StyledImg>
        </Link>
        <StyledDiv>
          <StyledP>
            <Link to="/PropertyList">
              <StyledLi>Boliger til salg</StyledLi>
            </Link>
            <Link to="/WorkersPage">
              <StyledLi>Mæglere</StyledLi>
            </Link>
            <Link to="/FavoriteProperty">
              <StyledLi>Mine favoritter</StyledLi>
            </Link>
            <Link to="/ContactUsPage">
              <StyledLi>Kontakt os</StyledLi>
            </Link>
          </StyledP>
        </StyledDiv>
      </div>
    </StyledSection>
  );
};

export default DinMaegler;

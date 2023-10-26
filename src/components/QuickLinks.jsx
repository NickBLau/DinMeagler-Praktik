import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLi = styled.li`
  line-height: 40px;
  font-size: 18px;
  width: 200px;
`;
const H3 = styled.h3`
  line-height: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #2a2c30;
  margin-bottom: 10px;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const QuickLinks = () => {
  return (
    <>
      <H3>Quick links</H3>
      <ul onClick={scrollToTop}>
        <Link to="/PropertyList">
          <StyledLi>Boliger til salg</StyledLi>
        </Link>
        <Link to="/WorkersPage">
          <StyledLi>Mæglere</StyledLi>{" "}
        </Link>
        <Link to="/ContactUsPage">
          <StyledLi>Kontakt os</StyledLi>{" "}
        </Link>
        <Link to="/LoginPage">
          <StyledLi>Log ind / bliv bruger</StyledLi>{" "}
        </Link>
      </ul>
    </>
  );
};

export default QuickLinks;

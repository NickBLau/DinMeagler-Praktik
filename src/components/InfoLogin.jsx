import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledSection = styled.section`
  background-color: #162a41;
  max-width: 1920px;
`;

const StyledP = styled.p`
  color: white;
  height: 62px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
  font-size: 18px;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 62px;
  margin-left: 10px;
  align-items: center;
  align-self: center;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/Bs";
import { BiSolidPaperPlane } from "react-icons/bi";
const InfoLogin = () => {
  return (
    <StyledSection onClick={scrollToTop}>
      <div className="Flex Space-around ">
        <StyledDiv>
          <StyledP>
            <BiSolidPaperPlane></BiSolidPaperPlane> 4000@dinmaegler.com
          </StyledP>
          <StyledP>
            <BsFillTelephoneFill></BsFillTelephoneFill> +45 7070 4000
          </StyledP>
        </StyledDiv>
        <Link to="/LoginPage">
          <StyledP>
            <BsFillPersonFill></BsFillPersonFill>Log ind
          </StyledP>
        </Link>
      </div>
    </StyledSection>
  );
};

export default InfoLogin;

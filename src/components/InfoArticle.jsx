import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { BiSolidPaperPlane, BiSolidMap } from "react-icons/bi";

const StyledArticle = styled.article`
  background-color: #ffffff;
  width: 444px;
  height: 436px;
  padding-left: 20px;
  padding-top: 20px;
  grid-column-start: 2;
  grid-row-start: 2;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 0px;
`;

const StyledP = styled.p`
  font-size: 18;
  line-height: 30px;
  color: #333333;
  width: 250px;
  margin-left: 10px;
`;

const StyledIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #162a41;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPlane = styled(BiSolidPaperPlane)`
  width: 30px;
  height: 30px;
  color: white;
`;

const StyledPhone = styled(BsFillTelephoneFill)`
  width: 24px;
  height: 24px;
  color: white;
`;

const StyledPin = styled(BiSolidMap)`
  width: 30px;
  height: 30px;
  color: white;
`;

const Styledh3 = styled.h3`
  font-size: 12px;
  line-height: 20px;
  color: #7b7b7b;
  margin-left: 10px;
`;

const InfoArticle = () => {
  return (
    <>
      <StyledArticle>
        <div className="Flex Margin-left-25 Margin-top-40">
          <StyledIcon>
            <StyledPhone></StyledPhone>
          </StyledIcon>
          <div className="Flex-directionColumn">
            <Styledh3>Ring til os</Styledh3>
            <StyledP>+45 7070 4000</StyledP>
          </div>
        </div>
        <div className="Flex Margin-left-25 Margin-top-25">
          <StyledIcon>
            <StyledPlane></StyledPlane>
          </StyledIcon>
          <div className="Flex-directionColumn">
            <Styledh3>Send en mail</Styledh3>
            <StyledP>4000@dinmaegler.com</StyledP>
          </div>
        </div>
        <div className="Flex Margin-left-25 Margin-top-25">
          <StyledIcon>
            <StyledPin></StyledPin>
          </StyledIcon>
          <div className="Flex-directionColumn">
            <Styledh3>Butik</Styledh3>
            <StyledP>Stændertorvet 78, 4000 Roskilde</StyledP>
          </div>
        </div>
        <div className="Margin-top-25 Margin-left-25 Width-half">
          <StyledP>
            Din Mægler Roskilde, er din boligibutik i lokalområdet.
          </StyledP>
        </div>
      </StyledArticle>
    </>
  );
};

export default InfoArticle;

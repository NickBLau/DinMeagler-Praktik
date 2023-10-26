import styled from "styled-components";

const StyledCard = styled.article`
  max-width: 1920px;
  height: 138px;
  grid-column-start: 2;
  grid-row-start: 5;
  display: flex;
`;

const StyledIconBig = styled.div`
  width: 36px;
  height: 36px;
`;

const StyledIconSmall = styled.div`
  width: 30px;
  height: 30px;
`;

const StyledIconBG = styled.div`
  min-width: 50px;
  height: 50px;
  background-color: #eef7ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #2a2c30;
  line-height: 32px;
  margin-bottom: 15px;
`;

const StyledIconParagraph = styled.p`
  font-size: 18px;
  color: #333333;
  line-height: 30px;
`;

const StyledDiv = styled.div`
  min-width: 370px;
  height: 138px;
  display: flex;
  margin-right: 10px;
  margin-left: 15px;
`;

const StyledDivSmall = styled.div`
  min-width: 350px;
  height: 138px;
  display: flex;
  margin-right: 10px;
`;

const AboutUsCard = () => {
  return (
    <StyledCard>
      <div className="Flex">
        <StyledDivSmall>
          <StyledIconBG>
            <StyledIconBig>
              <img src="Proptery.png" alt="" srcSet="" />
            </StyledIconBig>
          </StyledIconBG>
          <div className="Margin-left-20">
            <StyledIconHeading>Bestil et salgstjek</StyledIconHeading>
            <StyledIconParagraph>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </StyledIconParagraph>
          </div>
        </StyledDivSmall>
        <StyledDivSmall>
          <StyledIconBG>
            <StyledIconSmall>
              <img src="Pin.png" alt="" srcSet="" />
            </StyledIconSmall>
          </StyledIconBG>
          <div className="Margin-left-20">
            <StyledIconHeading>74 butikker</StyledIconHeading>
            <StyledIconParagraph>
              Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
              er fordelt rundt om i Danmark.
            </StyledIconParagraph>
          </div>
        </StyledDivSmall>
        <StyledDiv>
          <StyledIconBG>
            <StyledIconSmall>
              <img src="Customer.png" alt="" srcSet="" />
            </StyledIconSmall>
          </StyledIconBG>
          <div className="Margin-left-15">
            <StyledIconHeading>Tilmeld køberkartotek</StyledIconHeading>
            <StyledIconParagraph>
              Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden
              en ny bolig bliver annonceret.
            </StyledIconParagraph>
          </div>
        </StyledDiv>
      </div>
    </StyledCard>
  );
};

export default AboutUsCard;

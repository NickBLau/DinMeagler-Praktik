import styled from "styled-components";
import Paragraph from "./ParagraphProp";

const StyledBG = styled.div`
  max-width: 1920px;
  height: 223px;
  background-color: white;
`;

const StyledDiv = styled.div`
  width: 240px;
  height: 80px;
  margin-left: 52%;
`;

//fix later ^

const DMS = () => {
  return (
    <>
      <StyledBG>
        <StyledDiv>
          <Paragraph
            text={"Medlem af"}
            size="12"
            as="p"
            lineheight="20"
            color="7b7b7b"
          ></Paragraph>
          <Paragraph
            text={"DMS"}
            size="38"
            as="p"
            lineheight="54"
            weight="700"
            color="7b7b7b"
          ></Paragraph>
          <Paragraph
            text={"Dansk Mægler Sammenslutning"}
            size="16"
            as="p"
            lineheight="28"
            weight="400"
            color="7b7b7b"
          ></Paragraph>
        </StyledDiv>
      </StyledBG>
    </>
  );
};

export default DMS;

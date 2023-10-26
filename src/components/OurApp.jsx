import styled from "styled-components";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";
import Button from "./ButtonProp";
import Phones from "./Phones";
import GooglePlay from "./Googleplay";
import AppleStore from "./AppleStore";

const StyledBG = styled.div`
  max-width: 1920px;
  height: 512px;
  background-color: #162a41;
  display: grid;
  grid-template-columns: 1fr 700px 442px 1fr;
  grid-template-rows: 87px 115px 1fr;
`;

const TextGrid = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
`;

const ImgGrid = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
  display: inline;
`;

const StyledStores = styled.div`
  display: flex;
  gap: 15px;
`;

const OurApp = () => {
  return (
    <StyledBG>
      <TextGrid>
        <section className="Flex Flex-directionColumn Gap-30">
          <Heading
            title={"Hold dig opdateret på salgsprocessen"}
            size="38"
            weight="bold"
            as="h2"
            color="FFFFFF"
            lineheight="54"
            width="535"
            height="112"
          ></Heading>
          <Paragraph
            text={
              "Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler."
            }
            size="18"
            as="p"
            lineheight="30"
            color="FFFFFF"
            width="634"
            height="90"
          ></Paragraph>

          <StyledStores>
            {" "}
            <GooglePlay></GooglePlay>
            <AppleStore></AppleStore>
          </StyledStores>
        </section>
      </TextGrid>
      <ImgGrid>
        <Phones></Phones>
      </ImgGrid>
    </StyledBG>
  );
};

export default OurApp;

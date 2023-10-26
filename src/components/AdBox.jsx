import styled from "styled-components";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";

const StyledSection = styled.section`
  width: 350px;
  height: 450px;
  background-color: #162a41;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const StyledDecorativeLine = styled.div`
  width: 80px;
  height: 4px;
  background-color: #d3dee8;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const AdBox = () => {
  return (
    <StyledSection>
      <Heading
        title={"Find The Best Property "}
        size="30"
        weight="bold"
        as="h2"
        lineheight="42"
        color="FFFFFF"
        width="200"
      ></Heading>{" "}
      <Heading
        title={"For Rent Or Buy"}
        size="30"
        weight="bold"
        as="h2"
        lineheight="42"
        color="FFFFFF"
      ></Heading>
      <StyledDecorativeLine></StyledDecorativeLine>
      <Paragraph
        text={"Call Us Now"}
        size="18"
        as="p"
        lineheight="30"
        color="FFFFFF"
      ></Paragraph>
      <Heading
        title={"+00 123 456 789"}
        size="30"
        weight="bold"
        as="h2"
        lineheight="42"
        color="FFFFFF"
      ></Heading>
    </StyledSection>
  );
};

export default AdBox;

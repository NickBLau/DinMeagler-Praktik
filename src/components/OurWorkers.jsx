import styled from "styled-components";
import Button from "./ButtonProp";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";
import WorkersCard from "./WorkersCard";
import { Link } from "react-router-dom";
import WorkerCardSelected from "./WorkerCardSelected";

const StyledBG = styled.div`
  max-width: 1920px;
  height: 984px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  gap: 30px;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 0px;
`;
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
const OurWorkers = () => {
  return (
    <StyledBG onClick={scrollToTop}>
      <Heading
        title={"Mød vores engagerede medarbejdere"}
        size="38"
        weight="bold"
        as="h2"
        color="263048"
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
        color="333333"
        width="634"
        height="90"
      ></Paragraph>

      <div className="Flex Gap-30">
        <WorkerCardSelected></WorkerCardSelected>
      </div>
      <Link to="/WorkersPage">
        <Button
          text={"Se alle mæglere"}
          size="18"
          weight="200"
          as="button"
          lineheight="30"
          color="FFFFFF"
          backgroundcolor="162A41"
          width="194"
          height="62"
        ></Button>
      </Link>
    </StyledBG>
  );
};

export default OurWorkers;

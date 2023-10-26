import styled from "styled-components";
import Heading from "./HeadingProp";

const StyledSection = styled.section`
  width: 350px;
  height: 175px;
  background-color: #d3dee8;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 10px;
`;

const StyledDecorativeLine = styled.div`
  width: 290px;
  height: 1px;
  background-color: #eef7ff;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const StyledSearch = styled.input`
  color: #7b7b7b;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 290px;
  height: 42px;
  padding-left: 40px;
  background-image: url(../SearchIcon.png);
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 5%;
`;

const SearchProptery = () => {
  return (
    <StyledSection>
      <Heading
        title={"Search Property"}
        size="24"
        weight="bold"
        as="h3"
        lineheight="32"
        color="2A2C30"
      ></Heading>
      <StyledDecorativeLine></StyledDecorativeLine>
      <StyledSearch type="search" placeholder="Search" />
    </StyledSection>
  );
};

export default SearchProptery;

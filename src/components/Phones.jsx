import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 170px 1fr;
  grid-row-start: 100px 1fr;
`;

const StyledDiv = styled.div`
  width: 270px;
  height: 425px;
  background-image: url(Phones/1Phone.png);
  background-repeat: no-repeat;
  grid-column-start: 1;
  grid-row-start: 2;
`;

const Gridtest = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
`;

const Phones = () => {
  return (
    <Grid>
      {" "}
      <Gridtest>
        <img className="margin-right-20" src="Phones/2Phone.png" alt="" />
      </Gridtest>
      <StyledDiv></StyledDiv>
    </Grid>
  );
};

export default Phones;

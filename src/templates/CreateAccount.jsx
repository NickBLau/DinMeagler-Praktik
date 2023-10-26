import styled from "styled-components";
import Heading from "../components/HeadingProp";
import Button from "../components/ButtonProp";

const StyledWrapper = styled.div`
  max-width: 1920px;
  height: 1014px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const StyledForm = styled.form`
  width: 920px;
  height: 774px;
  display: flex;
  border: 1px solid gray;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 75px;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 0px;
`;

const StyledInput = styled.input`
  width: 575px;
  height: 50px;
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
  margin-bottom: 24px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #333333;
`;

const CreateAccount = () => {
  return (
    <>
      <StyledWrapper>
        <StyledForm>
          <Heading
            title={"Opret bruger hos Din Mægler"}
            size="30"
            weight="bold"
            as="h1"
            color="2A2C30"
            lineheight="42"
          ></Heading>
          <StyledLabel>
            Fulde navn
            <StyledInput type="text" placeholder="Fulde navn" />
          </StyledLabel>
          <StyledLabel>
            Email adresse
            <StyledInput type="Email adresse" placeholder="Email adresse" />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledInput type="Password" placeholder="Password" />
          </StyledLabel>
          <StyledLabel>
            Bekræft Password
            <StyledInput type="Password" placeholder="Bekræft Password" />
          </StyledLabel>
          <Button
            text={"Opret bruger"}
            size="20"
            as="button"
            lineheight="30"
            color="FFFFFF"
            backgroundcolor="162A41"
            width="575"
            height="60"
          ></Button>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default CreateAccount;

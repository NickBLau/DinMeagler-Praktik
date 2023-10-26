import styled from "styled-components";

import { FaApple } from "react-icons/fa";

const StyledAppleStore = styled.button`
  width: 189px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  color: white;
  border: 1px solid white;
  background-color: #162a41;
`;

const AppleStore = () => {
  return (
    <StyledAppleStore>
      <FaApple></FaApple>
      <p>Apple Store</p>
    </StyledAppleStore>
  );
};

export default AppleStore;

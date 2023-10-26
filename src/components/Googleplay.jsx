import styled from "styled-components";

import { FaGooglePlay } from "react-icons/fa";

const StyledGooglePlay = styled.button`
  width: 189px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  color: #162a41;
  background-color: white;
`;

const GooglePlay = () => {
  return (
    <StyledGooglePlay>
      <FaGooglePlay></FaGooglePlay>
      <p>Google Play</p>
    </StyledGooglePlay>
  );
};

export default GooglePlay;

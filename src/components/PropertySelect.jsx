import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 15px;
`;

const StyledSelect = styled.select`
  color: #7b7b7b;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid lightgray;
  width: 300px;
  height: 45px;
  padding-left: 10px;
`;

const PropertySelect = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      <StyledLabel>
        Ejendomstype
        <StyledSelect
          type="select"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="Villa">Villa</option>
          <option value="Byhus">Byhus</option>
          <option value="Ejerlejlighed">Ejerlejlighed</option>
          <option value="Landejendom">Landejendom</option>
        </StyledSelect>
        {/* <StyledSearch type="search" placeholder="Ejendomstype" /> */}
      </StyledLabel>
    </>
  );
};

export default PropertySelect;

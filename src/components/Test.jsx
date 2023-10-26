import React from "react";
import useLocalStorage from "./useLocalStorage";

const Test = () => {
  const [value] = useLocalStorage("value", "");
  const [name] = useLocalStorage("name", "");
  console.log({ name });
  // Use myValue in your component

  return (
    <div>
      <p>{name}</p>
      <p> {value[0]}</p>
      <p> {value[1]}</p>
      <p> {value}</p>
    </div>
  );
};

export default Test;

import React from "react";

const ExampleComponent = ({ value }) => {
  return (
    <div
      style={{
        backgroundColor:
          value === "A"
            ? "#10AC84"
            : value === "B"
            ? "yellow"
            : value === "C"
            ? "orange"
            : "red",
        width: "200px",
        height: "200px",
      }}
    >
      {/* Your component content */}
    </div>
  );
};

export default ExampleComponent;

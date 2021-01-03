import React from "react";
type Props={
  children?:JSX.Element
}
const Scroll = (props:Props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "600px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

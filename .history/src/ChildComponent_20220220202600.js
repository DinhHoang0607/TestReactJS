import React from "react";

const ChildComponent = (props) => {
  const arr = props.arrr;
  return <div>name: {props.arrr[0].id}</div>;
};

export default ChildComponent;

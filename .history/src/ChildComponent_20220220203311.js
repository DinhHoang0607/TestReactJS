import React from "react";

const ChildComponent = (props) => {
  //   let array = this.props;
  return (
    <>
          <div>{props.arr.map((item, index) => {
              return (
              <div
          )
      })}</div>
    </>
  );
};

export default ChildComponent;

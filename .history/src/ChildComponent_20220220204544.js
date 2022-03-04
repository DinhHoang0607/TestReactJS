import React from "react";

const ChildComponent = (props) => {
  //   let array = this.props;
  return (
    <>
      <div>
        {props.arr.map((item, index) => {
          return (
            <div key>
              {item.title}-{item.cost}-{index}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChildComponent;

import React, { useState } from "react";

const ChildComponent = (props) => {
  const [show, setShow] = useState("false");
  //   let array = this.props;
  return (
    <>
          {!show &&
              <button>Show</button>
          }
      <div>
        {props.arr.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title}-{item.cost}-{index}
            </div>
          );
        })}
      </div>
      <button>Hide</button>
    </>
  );
};

export default ChildComponent;

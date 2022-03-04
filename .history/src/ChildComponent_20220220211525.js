import React from "react";

const ChildComponent = (props) => {
    
  //   let array = this.props;
  return (
    <>
      <button>Show</button>
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

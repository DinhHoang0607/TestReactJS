import React, { useState } from "react";

const ChildComponent = (props) => {
  const [show, setShow] = useState(false);
  //   let array = this.props;
  return (
    <>
      {show && <button onClick={() => setShow(!show)}>Show</button>}

      {!show && (
        <>
          <div>
            {props.arr.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title}-{item.cost}-{index}
                </div>
              );
            })}
          </div>
          <button onClick={() => setShow(!show)}>Hide</button>
        </>
      )}
    </>
  );
};

export default ChildComponent;

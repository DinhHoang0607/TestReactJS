import React, { useState } from "react";

const ChildComponent = (props) => {
  const [show, setShow] = useState(false);
  //   let array = this.props;
  return (
    <>
      {show ? (
        <button onClick={() => setShow(!show)}>Show</button>
      ) : (
        <>
          <div>
            {props.arr.map((item) => {
              return (
                <div key={item.id}>
                  {item.id}-{item.title}-{item.cost}
                  <span><AiTwotoneDelete/></span>
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

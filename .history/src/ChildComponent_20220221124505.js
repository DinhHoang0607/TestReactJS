import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
const ChildComponent = (props) => {
  const [show, setShow] = useState(false);
  //   let array = this.props;
  const handleDelete = (item) => {
    // props.setArr(props.arr.filter((a) => a.id !== id));
  };

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
                  <span onClick={handleDelete(item)}>
                    <AiTwotoneDelete />
                  </span>
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

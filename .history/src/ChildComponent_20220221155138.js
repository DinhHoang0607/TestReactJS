import React, { useState } from "react";
import { AiTwotoneDelete,SiEditorconfig } from "react-icons/ai";
const ChildComponent = (props) => {
  const [show, setShow] = useState(false);
  //   let array = this.props;
  const handleOnClickDelete = (item) => {
    props.handleDelete(item);
    // console.log(props.arr);
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
                  <span onClick={() => handleOnClickDelete(item)}>
                    <AiTwotoneDelete />
                  </span>
                  <span><SiEditorconfig/></span>
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

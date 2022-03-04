import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { SiEditorconfig } from "react-icons/si";
const ChildComponent = (props) => {
  const [show, setShow] = useState(false);
  //   let array = this.props;
  const handleOnClickDelete = (item) => {
    props.handleDelete(item);
    // console.log(props.arr);
  };
  const handleOnClickEdit = () => {
    
  }

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
                    <AiTwotoneDelete /> &nbsp;
                  </span>
                  <span onClick={()}>
                    <SiEditorconfig />
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

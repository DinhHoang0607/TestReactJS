import React, { useState } from "react";

const MyComponent = () => {
    const [name, setName] = useState("nnmnm");
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  return (
    <div>
      <p>
        <input type="text" value={name} onC />
      </p>
    </div>
  );
};

export default MyComponent;

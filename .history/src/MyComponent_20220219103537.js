import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
    return <div>
      <input type='text' value={name} onChange={(event)=>handleChangeName(elevation: ,)} />
  </div>;
};

export default MyComponent;

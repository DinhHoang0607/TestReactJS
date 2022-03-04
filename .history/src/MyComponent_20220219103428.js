import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
    return <div>
      <input type='text' value='hoang' />
  </div>;
};

export default MyComponent;

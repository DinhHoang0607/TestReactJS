import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value=''
        onChange={(event) => this.handleChangeName(event)}
      />
    </div>
  );
};

export default MyComponent;

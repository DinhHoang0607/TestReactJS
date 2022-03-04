import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName = event.target.value;
  };
  return <div>MyComposdasdnent</div>;
};

export default MyComponent;

import React, { useState } from "react";

const AddComponent = () => {
  const [title, setTitle] = useState("");
  const [cost, setcost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };
  return (
    <form>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="cost">Cost</label>
      <br />
      <input
        type="text"
        value={cost}
        onChange={(e) => setcost(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
    </form>
  );
};

export default AddComponent;

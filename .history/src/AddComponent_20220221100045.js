import React, { useState } from "react";

const AddComponent = (props) => {
  const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");
    state = {
        
    }
  const handleSubmit = (e, title, cost) => {
    e.preventDefault();
    alert("click me");
    props.arr.push({ cost, title });
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
        onChange={(e) => setCost(e.target.value)}
      />
      <br />
      <input
        type="submit"
        value="Submit"
        onClick={(e, title, cost) => handleSubmit(e)}
      />
    </form>
  );
};

export default AddComponent;

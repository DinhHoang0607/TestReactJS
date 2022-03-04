import React, { useState } from "react";

const AddComponent = (props) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
    props.addArr({
      id: Ma,
      title: title,
      cost: cost,
    });
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
      <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
    </form>
  );
};

export default AddComponent;

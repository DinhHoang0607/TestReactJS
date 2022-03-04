import React, { useState } from "react";

const AddComponent = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };
  return (
    <form>
      <label htmlFor="fname">Title</label>
      <br />
      <input
        type="text"
        value={fname}
        onChange={(e) => setfName(e.target.value)}
      />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input
        type="text"
        value={lname}
        onChange={(e) => setlName(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
    </form>
  );
};

export default AddComponent;

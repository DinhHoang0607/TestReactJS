import React, { useState } from "react";

const MyComponent = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };
  return (
    <div>
      <form>
        <label htmlFor="fname">First name:</label>
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
        <input type="submit" value="Submit" onClick={() => handleSubmit()} />
      </form>
    </div>
  );
};

export default MyComponent;
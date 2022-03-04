import React, { useState } from "react";

const MyComponent = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  return (
    <div>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" value={fname} />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" value={lname} />
      </form>
    </div>
  );
};

export default MyComponent;

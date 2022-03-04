import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("nnmnm");
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  return (
    <div>

      <form>
        <label htmlor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlfor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
      </form>
    </div>
  );
};

export default MyComponent;

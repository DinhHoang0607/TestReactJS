import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("nnmnm");
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  return (
    <div>
      <p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      
      </p>
      <form>
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
      </form>
    </div>
  );
};

export default MyComponent;

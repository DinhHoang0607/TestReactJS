import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const MyComponent = () => {
  const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const[arr,setArr]=useState
  // constructor(props) {
  //     super(props)
  // }
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
        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
      </form>
      <ChildComponent name={fname} />
    </div>
  );
};

export default MyComponent;

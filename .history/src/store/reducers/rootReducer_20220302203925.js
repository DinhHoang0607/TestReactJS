import React from "react";

const initState = {
  users: [
    { id: 1, name: "Hoang" },
    { id: 2, name: "Vip" },
  ],
};
const rootReducer = (state=initState,action) => {
  return <div>rootReducer</div>;
};

export default rootReducer;

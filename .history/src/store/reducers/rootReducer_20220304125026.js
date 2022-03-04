const initState = {
  users: [
    { id: 1, name: "Hoang" },
    { id: 2, name: "Vip" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default rootReducer;

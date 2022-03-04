const initState = {
  users: [
    { id: 1, name: "Hoang" },
    { id: 2, name: "Vip" },
    { id: 3, name: "Vipz" },
    { id: 4, name: "Vipzz" },
    { id: 5, name: "Vipzzz" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };
    case "ADD_USER":
      let id = Date.now();
      let user = {
        id: id,
        name: `random-${id}`,
      };
      return { ...state, users: [...users,  user }] };
    default:
      return state;
  }
};

export default rootReducer;

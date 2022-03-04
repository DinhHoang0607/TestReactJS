import axios from "axios";
import React from "react";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
      this.setState([
          listUsers: res && res.data && res.data.data ? res.data.data : []
      ])
  }
  render() {
    return <div>hello</div>;
  }
}
export default ListUser;

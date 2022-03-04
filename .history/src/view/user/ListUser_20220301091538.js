import axios from "axios";
import React from "react";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
      this.setState({
          listUsers: res && res.data && res.data.data ? res.data.data : []
      })
  }
  render() {
      return <div className="list-users-container">
          <div className="title">All people</div>
          <div className="list-users">
              list
          </div>
      </div>;
  }
}
export default ListUser;

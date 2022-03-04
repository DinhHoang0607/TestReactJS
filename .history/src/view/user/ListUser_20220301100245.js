import axios from "axios";
import React from "react";
import "./user.scss";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-users-container">
        <div className="title">All people</div>
        <div className="list-users">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <div key={user.id} className="list-user-child">
                      {index + 1} - { user.first_name} {user.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListUser;

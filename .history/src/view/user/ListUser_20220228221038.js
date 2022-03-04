import axios from "axios";
import React from "react";
class ListUser extends React.Component {
  state = {
    ListUsers: [],
  };
  async componentDidMount() {
    //  axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //      console.log(res);
    //     });
    // }
    let res = await axios.get("https://reqres.in/api/users?page=2");
      console.log(res.data.data);
      this.setState([
          ListUsers:res&&res.data&&res.data.data:
      ])
  }
  render() {
    return <div>hello</div>;
  }
}
export default ListUser;

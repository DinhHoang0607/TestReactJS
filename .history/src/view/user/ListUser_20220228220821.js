import axios from "axios";
import React from "react";
class ListUser extends React.Component {
 async componentDidMount() {
    //  axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //      console.log(res);
    //     });
    // }
     let res = await axios.get("https://reqres.in/api/users?page=2")
     
    }
  render() {
    return <div>hello</div>;
  }
}
export default ListUser;

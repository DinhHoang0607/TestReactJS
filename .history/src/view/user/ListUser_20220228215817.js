import axios from "axios";
import React from "react";
class ListUser extends React.Component {
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
        
    }
  render() {
    return <div>hello</div>;
  }
}
export default ListUser;

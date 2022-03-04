import React from "react";
import { useParams } from "react-router-dom";

class DetailUser extends React.Component {

  render() {
    return <div>detail{console.log(this.props.useParams)}</div>;
  }
}
export default DetailUser;

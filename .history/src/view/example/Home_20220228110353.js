import React from "react";
import { useHistory } from "react-router-dom";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.useHistory.push("./todos");
    }, 3000);
  }
  render() {
    return <div>aaa</div>;
  }
}
export default Home;

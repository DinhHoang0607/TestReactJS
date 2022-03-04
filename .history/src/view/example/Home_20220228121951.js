import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("aa");
      this.props.useHistory().push("/todos");
    }, 3000);
  }
  render() {
    return <div>aaa</div>;
  }
}
export default withRouter(Home);

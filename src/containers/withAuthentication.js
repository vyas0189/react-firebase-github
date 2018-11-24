import React, { Component } from "react";
import { auth } from "../firebase/index";

export default WrappedComponent => {
  class WithAuthentication extends Component {
    state = {
      providerData: []
    };

    componentDidMount() {
      auth.onAuthStateChanged(user => {
        if (user) {
          this.setState({ providerData: user.providerData });
        } else {
          this.props.history.push("/");
        }
      });
    }

    render() {
      return this.state.providerData.length > 0 ? (
        <WrappedComponent providerData={this.state.providerData} />
      ) : null;
    }
  }

  return WithAuthentication;
};

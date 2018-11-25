import React, { Component } from "react";
import { auth } from "../firebaseConfig";

export default WrappedComponent => {
  class WithAuthentication extends Component {
    state = {
      providerData: []
    };

    componentDidMount() {
      this.mounted = true;

      auth.onAuthStateChanged(user => {
        if (this.mounted) {
          if (user) {
            this.setState({ providerData: user.providerData });
          } else {
            this.props.history.push("/");
          }
        }
      });
    }
    componentWillUnmount() {
      this.mounted = false;
    }
    render() {
      return this.state.providerData.length > 0 ? (
        <WrappedComponent providerData={this.state.providerData} />
      ) : null;
    }
  }

  return WithAuthentication;
};

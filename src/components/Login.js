import React, { Component } from "react";
import { auth, firebase } from "../firebaseConfig";
import { Container, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {
  componentDidMount() {
    this.mounted = true;
    auth.onAuthStateChanged(user => {
      if (this.mounted) {
        if (user) {
          this.props.history.push("/user");
        }
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  handleLogin = e => {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).catch(err => console.log(err));
  };
  render() {
    return (
      <Container>
        <Link
          to={{
            pathname: "/user"
          }}
          style={{ width: 250, display: "block", margin: "auto", padding: 10 }}
        >
          <Button size="big" color="black" onClick={this.handleLogin}>
            <Icon name="github" />
            Login with GitHub
          </Button>
        </Link>
      </Container>
    );
  }
}

export default Login;

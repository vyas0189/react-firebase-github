import React, { Component } from "react";
import { auth, firebase } from "../firebaseConfig";
import { Container, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    isSignedIn: false,
    user: {}
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/user");
      }
    });
  }
  handleLogin = e => {
    const provider = new firebase.auth.GithubAuthProvider();
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(result => {
        this.setState({ user: result.user });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Container>
        <Link
          to={{
            pathname: "/user"
          }}
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

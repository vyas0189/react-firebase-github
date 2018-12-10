import React, { Component, lazy, Suspense } from "react";
import axios from "axios";
import DesktopHeading from "./DesktopHeading";
import SearchBar from "./SearchBar";
import { auth } from "../firebaseConfig";
import MobileContainer from "./MobileHeading";
import { Container } from "semantic-ui-react";
const SearchUser = lazy(() => import("./SearchUser"));
class User extends Component {
  state = {
    username: null,
    userSearch: null,
    errMsg: null
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };
  getUser = async e => {
    e.preventDefault();
    await axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ userSearch: res.data, errMsg: null }))
      .catch(err => {
        this.setState({ errMsg: `No user with ${this.state.username} found` });
      });
  };

  render() {
    const showErrMsg = this.state.errMsg ? (
      <div>{this.state.errMsg}</div>
    ) : null;

    return (
      <div>
        <DesktopHeading user={auth.currentUser}>
          {showErrMsg}
          <SearchBar handleChange={this.handleChange} getUser={this.getUser} />
        </DesktopHeading>
        <MobileContainer user={auth.currentUser}>
          {showErrMsg}
          <SearchBar handleChange={this.handleChange} getUser={this.getUser} />
        </MobileContainer>

        {this.state.userSearch ? (
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchUser userSearch={this.state.userSearch} />
            </Suspense>
          </Container>
        ) : null}
      </div>
    );
  }
}

export default User;

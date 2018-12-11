import React, { Component, lazy, Suspense } from "react";
import DesktopHeading from "./DesktopHeading";
import SearchBar from "./SearchBar";
import { auth } from "../firebaseConfig";
import MobileContainer from "./MobileHeading";
import { Container } from "semantic-ui-react";
const SearchUser = lazy(() => import("./SearchUser"));
class User extends Component {
  state = {
    userData: null,
    userRepos: [],
    orgs: [],
    errMsg: null
  };

  getUser = (userData, userRepos, orgs, errMsg) => {
    this.setState({
      userData,
      userRepos,
      orgs,
      errMsg
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
          <SearchBar getUser={this.getUser} />
          {this.state.userData ? (
            <Container>
              <Suspense fallback={<div>Loading...</div>}>
                <SearchUser
                  userData={this.state.userData}
                  userRepos={this.state.userRepos}
                  orgs={this.state.orgs}
                />
              </Suspense>
            </Container>
          ) : null}
        </DesktopHeading>
        <MobileContainer user={auth.currentUser}>
          {showErrMsg}
          <SearchBar getUser={this.getUser} />
          {this.state.userData ? (
            <Container>
              <SearchUser
                userData={this.state.userData}
                userRepos={this.state.userRepos}
                orgs={this.state.orgs}
              />
            </Container>
          ) : null}
        </MobileContainer>
      </div>
    );
  }
}

export default User;

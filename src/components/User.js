import React, { Component, lazy, Suspense } from "react";
import DesktopHeading from "./DesktopHeading";
import SearchBar from "./SearchBar";
import { auth } from "../firebaseConfig";
import MobileContainer from "./MobileHeading";
import { Container, Message, Loader, Dimmer } from "semantic-ui-react";
const SearchUser = lazy(() => import("./SearchUser"));
class User extends Component {
  state = {
    username: "",
    userData: null,
    orgs: [],
    errMsg: null
  };

  getUser = (userData, orgs, errMsg, username) => {
    this.setState({
      username,
      userData,
      orgs,
      errMsg
    });
  };

  render() {
    const showErrMsg = this.state.errMsg ? (
      <Container style={{ marginTop: "1.5em" }}>
        <Message negative>{this.state.errMsg}</Message>
      </Container>
    ) : null;

    return (
      <div>
        <DesktopHeading user={auth.currentUser}>
          {showErrMsg}
          <SearchBar getUser={this.getUser} />
          {this.state.userData ? (
            <Container>
              <Suspense
                fallback={
                  <Dimmer active inverted>
                    <Loader inverted content="Loading" />
                  </Dimmer>
                }
              >
                <SearchUser
                  userData={this.state.userData}
                  orgs={this.state.orgs}
                  username={this.state.username}
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
                orgs={this.state.orgs}
                username={this.state.username}
              />
            </Container>
          ) : null}
        </MobileContainer>
      </div>
    );
  }
}

export default User;

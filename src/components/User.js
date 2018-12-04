import React, { Component } from "react";
import axios from "axios";
import DesktopHeading from "./DesktopHeading";
import SearchBar from "./SearchBar";
import { auth } from "../../firebaseConfig";
import MobileContainer from "./MobileHeading";

class User extends Component {
  state = {
    username: "",
    userSearch: {}
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };
  getUser = async e => {
    e.preventDefault();
    await axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ userSearch: res.data }));
    console.log(this.state.userSearch);
  };
  render() {
    return (
      <div>
        <DesktopHeading user={auth.currentUser}>
          <SearchBar handleChange={this.handleChange} getUser={this.getUser} />
        </DesktopHeading>
        <MobileContainer user={auth.currentUser}>
          <SearchBar handleChange={this.handleChange} getUser={this.getUser} />
        </MobileContainer>
      </div>
    );
  }
}

export default User;

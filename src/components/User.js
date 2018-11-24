import React, { Component } from "react";
import axios from "axios";
import Heading from "./Heading";
import SearchBar from "./SearchBar";
import { auth } from "../firebase/firebaseConfig";

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
        <Heading user={auth.currentUser} />
        <SearchBar handleChange={this.handleChange} getUser={this.getUser} />
      </div>
    );
  }
}

export default User;

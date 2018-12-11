import React from "react";
import { Form, Input, Container } from "semantic-ui-react";
import axios from "axios";

class SearchBar extends React.Component {
  state = {
    username: null,
    userData: {},
    userRepos: [],
    orgs: [],
    errMsg: ""
  };
  handleChange = e => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();

    await axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ userData: res.data, errMsg: null }))
      .catch(err => {
        this.setState({ errMsg: `No user with ${this.state.username} found` });
      });

    await axios
      .get(`https://api.github.com/users/${this.state.username}/repos`)
      .then(res => this.setState({ userRepos: res.data }))
      .catch(err => {
        console.log("No Repo Found");
      });

    await axios
      .get(`https://api.github.com/users/${this.state.username}/orgs`)
      .then(res => this.setState({ orgs: res.data }))
      .catch(err => {
        console.log("No Organizations Found");
      });
    this.props.getUser(
      this.state.userData,
      this.state.userRepos,
      this.state.orgs,
      this.state.errMsg
    );
  };

  render() {
    return (
      <Container style={{ marginTop: "2em" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              required
              fluid
              action="Search"
              placeholder="Enter a username..."
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default SearchBar;

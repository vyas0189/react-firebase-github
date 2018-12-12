import React from "react";
import { Form, Input, Container } from "semantic-ui-react";
import axios from "axios";

class SearchBar extends React.Component {
  state = {
    username: null,
    userData: {},
    orgs: [],
    errMsg: ""
  };
  handleChange = e => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    await axios
      .all([
        axios.get(`https://api.github.com/users/${this.state.username}`),
        axios.get(`https://api.github.com/users/${this.state.username}/orgs`)
      ])
      .then(
        axios.spread((userData, orgs) => {
          this.setState({
            userData: userData.data,

            orgs: orgs.data,
            errMsg: null
          });
        })
      )
      .catch(err => {
        this.setState({ errMsg: `No user with ${this.state.username} found` });
      });

    this.props.getUser(
      this.state.userData,
      this.state.orgs,
      this.state.errMsg,
      this.state.username
    );
  };

  render() {
    return (
      <Container style={{ marginTop: "2em" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              icon="users"
              iconPosition="left"
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

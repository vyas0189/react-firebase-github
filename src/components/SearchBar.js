import React, { Component } from "react";
import { Form, Input, Container } from "semantic-ui-react";

class SearchBar extends Component {
  render() {
    return (
      <Container style={{ marginTop: 50 }}>
        <Form onSubmit={this.props.getUser}>
          <Form.Field>
            <Input
              required
              fluid
              action="Search"
              placeholder="Enter a username..."
              onChange={this.props.handleChange}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default SearchBar;

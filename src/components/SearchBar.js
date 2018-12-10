import React from "react";
import { Form, Input, Container } from "semantic-ui-react";

const SearchBar = props => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Form onSubmit={props.getUser}>
        <Form.Field>
          <Input
            required
            fluid
            action="Search"
            placeholder="Enter a username..."
            onChange={props.handleChange}
          />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default SearchBar;

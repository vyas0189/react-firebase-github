import React, { Component } from "react";
import { Card, Modal, Button, Header } from "semantic-ui-react";
import "./Repo.css";
class Repo extends Component {
  render() {
    const { name, forks_count } = this.props.repo;
    return (
      <React.Fragment>
        <Card style={{ height: "10em" }}>
          <Card.Content>
            <Header as="h4">{name}</Header>
            <Card.Description>
              <Button
                size="tiny"
                color="blue"
                content="Fork"
                icon="fork"
                label={{
                  as: "a",
                  basic: true,
                  color: "blue",
                  pointing: "left",
                  content: `${forks_count}`
                }}
              />
              <Modal trigger={<Button size="small">More info...</Button>}>
                <Modal.Header>{name}</Modal.Header>
              </Modal>
            </Card.Description>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default Repo;

import React, { Component } from "react";
import { Card, Modal, Button } from "semantic-ui-react";
class Repo extends Component {
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <Card style={{ height: "10em" }}>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>
              <Modal trigger={<Button>More info...</Button>}>
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

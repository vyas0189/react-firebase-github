import React, { Component } from "react";
import { auth } from "../../firebase/index";
import {
  Button,
  Container,
  Menu,
  Visibility,
  Segment,
  Header,
  Image
} from "semantic-ui-react";

class Heading extends Component {
  state = { fixed: false };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;
    const { user } = this.props;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 100 }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
          >
            <Container>
              <Menu.Item as="a">
                <Image
                  src={user.photoURL}
                  style={{ borderRadius: "50%", height: 70, width: 70 }}
                />
              </Menu.Item>
              <Menu.Item as="a">
                {
                  <Header
                    as="h1"
                    content={
                      user.providerData[0].displayName
                        ? `Welcome, ${user.displayName}`
                        : `Welcome`
                    }
                    inverted
                    style={{ marginBottom: 10 }}
                  />
                }
              </Menu.Item>

              <Menu.Item position="right">
                <Button
                  as="a"
                  inverted={!fixed}
                  onClick={() => auth.signOut()}
                  style={{ marginBottom: 10 }}
                >
                  Logout
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    );
  }
}

export default Heading;

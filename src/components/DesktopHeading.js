import React, { Component } from "react";
import { auth, db } from "../firebaseConfig";
import {
  Button,
  Container,
  Menu,
  Visibility,
  Segment,
  Header,
  Image,
  Responsive
} from "semantic-ui-react";
import moment from "moment";
class Heading extends Component {
  state = { fixed: false };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;
    const { user, children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
            <Menu inverted={!fixed} pointing={!fixed} secondary={!fixed}>
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
                    onClick={() => {
                      db.collection("users")
                        .doc(`${auth.currentUser.uid}`)
                        .set(
                          {
                            loggedOutTime: moment().format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )
                          },
                          { merge: true }
                        )
                        .then(() => auth.signOut())
                        .catch(err => err.message);
                    }}
                    style={{ marginBottom: 10 }}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

export default Heading;

import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Sidebar
} from "semantic-ui-react";
import { auth, db } from "../firebaseConfig";
import moment from "moment";

class MobileContainer extends Component {
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;
    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { user, children } = this.props;
    const { sidebarOpened, fixed } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a">
              <Image
                src={user.photoURL}
                style={{ borderRadius: "50%", height: 60, width: 60 }}
              />
              <Header
                as="h3"
                content={
                  user.providerData[0].displayName
                    ? `Welcome, ${user.displayName}`
                    : `Welcome`
                }
                inverted
                style={{ marginBottom: 10 }}
              />
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                as="a"
                inverted={!fixed}
                onClick={() => {
                  console.log(auth.currentUser);
                  console.log(auth.currentUser);
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
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Menu inverted={true} pointing style={{ borderRadius: 0 }}>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export default MobileContainer;

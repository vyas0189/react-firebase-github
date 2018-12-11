import React, { Component, lazy, Suspense } from "react";
import { Card, Icon, Grid } from "semantic-ui-react";
const Repo = lazy(() => import("./Repo"));
const Organizations = lazy(() => import("./Organizations"));
class SearchUser extends Component {
  state = {
    errMag: null
  };

  render() {
    const { followers, following, avatar_url, name, bio } = this.props.userData;
    const extra = this.props.userData ? (
      <div style={{ textAlign: "center" }}>
        <Icon name="user" />
        {followers} Followers
        <div>
          <span role="img" aria-label="following">
            👣{following} Following
          </span>
        </div>
      </div>
    ) : null;
    return (
      <div style={{ marginTop: 15 }}>
        <Grid stackable>
          {Object.keys(this.props.userData).length ? (
            <Grid.Column width={4}>
              <Grid.Row>
                <Card
                  image={avatar_url}
                  header={name}
                  description={bio}
                  extra={extra}
                />
              </Grid.Row>
              {this.props.orgs.length > 0 ? (
                <Grid.Row>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Organizations orgs={this.props.orgs} />
                  </Suspense>
                </Grid.Row>
              ) : null}
            </Grid.Column>
          ) : null}
          {this.props.userRepos.length > 0 ? (
            <Grid.Column width="12">
              <Suspense fallback={<div>Loading...</div>}>
                <Repo userRepos={this.props.userRepos} />
              </Suspense>
            </Grid.Column>
          ) : null}
        </Grid>
      </div>
    );
  }
}

export default SearchUser;

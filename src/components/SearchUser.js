import React, { Component } from "react";
import { Card, Icon, Grid } from "semantic-ui-react";
import Repo from "./Repo";

class SearchUser extends Component {
  render() {
    const {
      avatar_url,
      name,
      bio,
      followers,
      following
    } = this.props.userSearch;

    const extra = this.props.userSearch ? (
      <div>
        <Icon name="user" />
        {followers} Followers
        <span style={{ marginLeft: 20 }} role="img" aria-label="following">
          👣{following} Following
        </span>
      </div>
    ) : null;
    return (
      <div>
        <Grid style={{ marginTop: 50 }}>
          <Grid.Row>
            <Grid.Column width={5}>
              <Card
                image={avatar_url}
                header={name}
                description={bio}
                extra={extra}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <Repo />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SearchUser;

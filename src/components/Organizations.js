import React, { Component } from "react";
import { Card, Feed, Header } from "semantic-ui-react";

class Organizations extends Component {
  render() {
    return (
      <Card style={{ marginTop: "1em" }}>
        <Header as="h2" attached="top">
          Organizations
        </Header>
        {this.props.orgs.map(org => (
          <React.Fragment key={org.id}>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Label image={org.avatar_url} />
                  <Feed.Content>
                    <Feed.Summary>
                      <a
                        href={org.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {org.login}
                      </a>
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </React.Fragment>
        ))}
      </Card>
    );
  }
}

export default Organizations;

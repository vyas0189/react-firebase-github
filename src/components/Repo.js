import React from "react";
import { Header, Grid, Segment, Card } from "semantic-ui-react";
const Repo = props => {
  return (
    <div>
      <Header as="h2" attached="top">
        Repositories
      </Header>
      <Segment attached>
        <Grid columns={3} divided>
          {props.userRepos.map(repo => (
            <React.Fragment key={repo.id}>
              <Grid.Column>
                <Card style={{ height: "10em" }}>
                  <Card.Content>
                    <Card.Header href={repo.html_url} target="_blank">
                      {repo.name}
                    </Card.Header>
                    <Card.Description>
                      {repo.description
                        ? repo.description.length < 148
                          ? repo.description
                          : repo.description.slice(0, 148) + "..."
                        : null}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </React.Fragment>
          ))}
        </Grid>
      </Segment>
    </div>
  );
};

export default Repo;

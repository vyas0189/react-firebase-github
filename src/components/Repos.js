import React, { Component, lazy, Suspense } from "react";
import { Header, Segment, Card } from "semantic-ui-react";
import axios from "axios";
const Repo = lazy(() => import("./Repo"));

class Repos extends Component {
  state = {
    userRepos: []
  };
  componentWillMount() {
    if (this.state.username == null) {
      this.setState({ username: this.props.username });
    }
  }
  componentDidMount() {
    this.getRepo(this.state.username);
  }

  getRepo = async username => {
    await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        this.setState({
          userRepos: res.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  componentDidUpdate = prevProps => {
    const { username: oldUserName } = prevProps;
    const { username: newUsername } = this.props;
    if (oldUserName !== newUsername) {
      this.getRepo(newUsername);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header as="h2" attached="top">
          Repositories
        </Header>
        <Segment attached>
          <Card.Group itemsPerRow={3}>
            <Suspense fallback={<div>Loading...</div>}>
              {this.state.userRepos.map(repo => (
                <Repo name={repo.name} key={repo.id} />
              ))}
            </Suspense>
          </Card.Group>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Repos;

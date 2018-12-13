import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthentication from "./containers/withAuthentication";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import { Loader, Dimmer } from "semantic-ui-react";
const User = lazy(() => import("./components/User"));
class App extends Component {
  render() {
    return (
      <Router>
        <Suspense
          fallback={
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          }
        >
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/user" component={withAuthentication(User)} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;

import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthentication from "./containers/withAuthentication";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
const User = lazy(() => import("./components/User"));
class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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

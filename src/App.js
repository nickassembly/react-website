import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import { NoMatch } from "./noMatch";
import { Layout } from "./components/layout";
import { NavigationBar } from "./components/navigationBar";
import { Jumbotron } from "./components/jumbotron";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

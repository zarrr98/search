import React from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./js/screens/MainPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/"} exact>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

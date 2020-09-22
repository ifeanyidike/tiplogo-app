// import dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import stylesheet
import "./App.css";

// import custom components
import Home from "./components/Home/Home";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/SignIn";
import Nav from "./components/Base/Nav";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/services">

          </Route>
          <Route path="/SignUp">
            <Nav />
            <SignUp />
          </Route>
          <Route path="/login">
            <Nav />
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>


    </div>
  );
};

export default App;

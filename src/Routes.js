import React from "react";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";

function Routes(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route path="/registration" render={props => <Signup {...props} />} />
          <Route path="/game" render={props => <Main {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;

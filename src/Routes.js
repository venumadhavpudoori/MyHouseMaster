import React from "react";
import Home from "components/HomePage/Home.js";
import Login from "components/HomePage/Login.js";
// import SignupPage from "components/HomePage/Signup.js";


import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";


import {BrowserRouter as Router,Switch} from 'react-router-dom';

import { createBrowserHistory } from "history";
//import { Router, Route, Switch } from "react-router";

let hist = createBrowserHistory();

export default function Routes({ appProps }) {
  console.log("before onload",  appProps);

  console.log("after onload", appProps);
    return (
      <Router history={hist}>
        <Switch>
          <UnauthenticatedRoute  path="/login-page" exact component={Login} appProps={appProps} />
          {/* <UnauthenticatedRoute  path="/signup-page" exact component={SignupPage} appProps={appProps} /> */}
          <UnauthenticatedRoute path="/" component={Home} appProps={appProps}/>

        </Switch>
      </Router>
        );
  }

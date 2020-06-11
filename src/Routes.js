import React from "react";
import Home from "./components/HomePage/Home";
import Login from "./components/HomePage/Login";
import Signup from "./components/HomePage/Signup";

import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

import { Route,Router,Switch } from 'react-router-dom';


export default function Routes({ appProps }) {
    return (
      <Switch>
          <UnauthenticatedRoute  path="/login" exact component={Login} appProps={appProps} />
          <UnauthenticatedRoute  path="/signup" exact component={Signup} appProps={appProps} /> 
          <AuthenticatedRoute path="/"  exact component={Home} appProps={appProps} />
      </Switch>
    );
  }

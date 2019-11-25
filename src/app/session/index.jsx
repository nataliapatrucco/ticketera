import React from "react";
import { Switch, Route } from "react-router-dom";
import { login } from "./partials/login";
import { register } from "./partials/view";
import { view } from "./partials/view";
export default function index() {
  return (
    <div>
      <Route path="/" component={view} />
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
      </Switch>
    </div>
  );
}
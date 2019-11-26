import React, { useState } from "react";
import { loginUser, registerUser } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./partials/login";
import Register from "./partials/register";
import View from "./partials/view";

export const Session = props => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  });

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  // this.handleSubmitRegister = this.handleSubmitRegister.bind(this);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(loginUser(state.email, state.password));
    props.history.push("/");
  };

  const handleSubmitRegister = e => {
    console.log("estado", state);

    e.preventDefault();
    dispatch(registerUser(state));
    // props.history.push("/login");
  };

  return (
    <div>
      <View />
      <Register
        name={state.name}
        lastname={state.lastname}
        email={state.email}
        password={state.password}
        handleChange={handleChange}
        handleSubmitRegister={handleSubmitRegister}
      />

      <Switch>
        <Route
          path="/login"
          render={() => {
            <Login
              email={state.email}
              password={state.password}
              handleChange={handleChange}
              handleSubmitLogin={handleSubmitLogin}
            />;
          }}
        />
        {/* <Route
          path="/"
          render={() => {
            <Register
              name={state.name}
              lastname={state.lastname}
              email={state.email}
              password={state.password}
              handleChange={handleChange}
              handleSubmitRegister={handleSubmitRegister}
            />;
          }}
        /> */}
      </Switch>
    </div>
  );
};

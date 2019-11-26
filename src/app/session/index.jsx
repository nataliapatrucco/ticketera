import React, { useState } from "react";
import { loginUser, registerUser } from "../../redux/actions/user";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { login } from "./partials/login";
import { register } from "./partials/register";
import { view } from "./partials/view";

function Session() {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  });

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  this.handleSubmitRegister = this.handleSubmitRegister.bind(this);

  const handleChange = e => {
    setState({
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
    this.props.history.push("/");
  };

  const handleSubmitRegister = e => {
    e.preventDefault();
    this.props.registerUser(
      this.state.name,
      this.state.lastname,
      this.state.email,
      this.state.password
    );
    this.props.history.push("/login");
  };

  return (
    <div>
      <Switch>
        <Route
          path="/user/login"
          render={() => {
            <Login
              email={this.state.email}
              password={this.state.password}
              handleChange={this.handleChange}
              handleSubmitLogin={this.handleSubmitLogin}
            />;
          }}
        />
        <Route
          path="/user/register"
          render={() => {
            <Register
              name={this.state.name}
              lastname={this.state.lastname}
              email={this.state.email}
              password={this.state.password}
              handleChange={this.handleChange}
              handleSubmitRegister={this.handleSubmitRegister}
            />;
          }}
        />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  registerUser: (name, lastname, email, password) =>
    dispatch(registerUser(name, lastname, email, password))
});
export default connect({}, mapDispatchToProps)(Session);

import React, { useState } from "react";
import { loginUser, registerUser } from "../../redux/actions/user";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { login } from "./partials/login";
import { register } from "./partials/register";
import { view } from "./partials/view";

function Session() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  this.handleSubmitRegister = this.handleSubmitRegister.bind(this);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleLastName = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    this.props.loginUser(email, password);
  };

  const handleSubmitRegister = e => {
    e.preventDefault();
    this.props.registerUser(name, lastname, email, password);
  };

  return (
    <div>
      <Switch>
        <Route
          path="/login"
          render={() => {
            <Login
              handleEmail={this.handleEmail}
              handlePassword={this.handlePassword}
              handleSubmitLogin={this.handleSubmitLogin}
            />;
          }}
        />
        <Route
          path="/register"
          render={() => {
            <Register
              handleName={this.handleName}
              handleLastName={this.handleLastName}
              handleEmail={this.handleEmail}
              handlePassword={this.handlePassword}
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
export default connect(null, mapDispatchToProps)(Session);

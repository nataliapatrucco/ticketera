import React, { useState } from "react";
import { loginUser, registerUser } from "../../redux/actions/user";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

function Session() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  this.handleName = this.handleName.bind(this);
  this.handleLastName = this.handleLastName.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  this.handlePassword = this.handlePassword.bind(this);
  this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  this.handleSubmitRegister = this.handleSubmitRegister.bind(this);

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleLastName = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmitLogin = e => {
    this.props.loginUser(email, password);
  };

  const handleSubmitRegister = e => {
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

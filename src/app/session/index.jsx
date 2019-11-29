import React, { useState } from "react";
import { loginUser, registerUser } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./partials/login";
import Register from "./partials/register";
import View from "./partials/view";
import { Container } from "./style";
import { RegisterContainer } from "./style";
import { RegisterTitle, ViewLogo } from "./style";

export const Session = props => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [errorMessage, setError] = useState("");
  const [passType, setPassType] = useState("password");

  const handleEmail = () => {
    const valid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!valid.test(state.email)) {
      setError("Introduce un email válido");
    } else {
      setError("");
    }
  };
  const togglePassword = () => {
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("text");
    }
  };

  const clearInput = () => {
    setState({
      name: "",
      lastname: "",
      email: "",
      password: ""
    });
  };
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(loginUser(state))
      .then(() => props.history.push("/"))
      .catch(() => setError("Email o contraseña incorrectos"));
  };

  const handleSubmitRegister = e => {
    e.preventDefault();
    dispatch(registerUser(state))
      .then(() => props.history.push("/"))
      .catch(() => setError("Todos los campos son requeridos"));
  };

  return (
    <Container>
      <View />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <RegisterContainer>
              <ViewLogo></ViewLogo>
              <RegisterTitle>Iniciar Sesión</RegisterTitle>
              <Login
                clearInput={clearInput}
                email={state.email}
                password={state.password}
                handleChange={handleChange}
                handleSubmitLogin={handleSubmitLogin}
                handleBlur={handleEmail}
                errorMessage={errorMessage}
                passType={passType}
                togglePassword={togglePassword}
              />
            </RegisterContainer>
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <RegisterContainer>
              <ViewLogo></ViewLogo>
              <RegisterTitle>Registrarse</RegisterTitle>
              <Register
                clearInput={clearInput}
                name={state.name}
                lastname={state.lastname}
                email={state.email}
                password={state.password}
                handleChange={handleChange}
                handleSubmitRegister={handleSubmitRegister}
                handleBlur={handleEmail}
                errorMessage={errorMessage}
                passType={passType}
                togglePassword={togglePassword}
              />
            </RegisterContainer>
          )}
        />
      </Switch>
    </Container>
  );
};

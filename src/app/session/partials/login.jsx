import React from "react";
import Input from "../../components/input";
import { ButtonS, SessionContainer, SessionText } from "../style.js";
import { Link } from "react-router-dom";

export default ({
  email,
  password,
  handleChange,
  handleSubmitLogin,
  clearInput,
  errorMessage,
  handleBlur,
  passType,
  togglePassword
}) => {
  return (
    <form onSubmit={handleSubmitLogin}>
      <Input
        placeholder="Email"
        name="email"
        type="text"
        input={email}
        handleChange={handleChange}
        onBlur={handleBlur}
      />
      <div>{errorMessage}</div>

      <Input
        placeholder="Contraseña"
        name="password"
        type={passType || "password"}
        input={password}
        handleChange={handleChange}
      />
      <ButtonS>INICIAR SESIÓN</ButtonS>
      <SessionContainer>
        <SessionText color={"white"}>Todavía no tenés una cuenta? </SessionText>
        <Link to="/register" onClick={() => clearInput()}>
          <SessionText color={"#62d0ff"}> REGISTRATE</SessionText>
        </Link>
      </SessionContainer>
    </form>
  );
};

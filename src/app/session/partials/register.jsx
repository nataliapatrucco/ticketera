import React from "react";
import Input from "../../components/input";
import { ButtonS, SessionText, SessionContainer } from "../style";
import { Link } from "react-router-dom";

export default ({
  name,
  lastname,
  email,
  password,
  handleChange,
  handleSubmitRegister
}) => {
  return (
    <form onSubmit={handleSubmitRegister}>
      <Input
        placeholder="Nombre"
        name="name"
        type="text"
        input={name}
        handleChange={handleChange}
      />
      <Input
        placeholder="Apellido"
        name="lastname"
        type="text"
        input={lastname}
        handleChange={handleChange}
      />
      <Input
        placeholder="Email"
        name="email"
        type="text"
        input={email}
        handleChange={handleChange}
      />
      <Input
        placeholder="Contraseña"
        name="password"
        type="password"
        input={password}
        type={password}
        handleChange={handleChange}
      />
      <ButtonS>REGISTRARSE</ButtonS>
      <SessionContainer>
        <SessionText color={"white"}>Ya tenés una cuenta? </SessionText>
        <Link to="/">
          <SessionText color={"#62d0ff"}> INICIÁ SESIÓN</SessionText>
        </Link>
      </SessionContainer>

      {/* <button type="submit">Registrarse</button> */}
    </form>
  );
};

import React from "react";
import Input from "../../components/input";
import { ButtonS, SessionText, SessionContainer, Error} from "../style";
import { Link } from "react-router-dom";

export default ({
  name,
  lastname,
  email,
  password,
  handleChange,
  handleSubmitRegister,
  clearInput,
  handleBlur,
  errorMessage,
  passType,
  togglePassword
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
        onBlur={handleBlur}
      />
      {errorMessage  ? (
       
          <SessionText color={"red"} marginLeft={"15px"} fontStyle={"bold"}>{errorMessage}</SessionText>
        
      ):null}
      <Input
        placeholder="Contraseña"
        name="password"
        type={passType || "password"}
        input={password}
        handleChange={handleChange}
      />
      <ButtonS>REGISTRARSE</ButtonS>
      <SessionContainer>
        <SessionText color={"white"}>¿Ya tenés una cuenta? </SessionText>
        <Link to="/" onClick={() => clearInput()}>
          <SessionText color={"#62d0ff"}> INICIÁ SESIÓN</SessionText>
        </Link>
      </SessionContainer>
    </form>
  );
};

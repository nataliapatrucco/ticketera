import React from "react";
import {Input, InputContainer} from "../../components/input";
import { ButtonS, SessionContainer, SessionText, ViewIcon } from "../style.js";
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

<InputContainer>
<Input
        placeholder="Email"
        name="email"
        type="text"
        input={email}
        handleChange={handleChange}
        onBlur={handleBlur}
      />
 
 {errorMessage ? (
          <ViewIcon></ViewIcon>
         ) : null}
 
</InputContainer>

     
      {errorMessage ? (
        <SessionText color={"red"} marginLeft={"15px"} fontStyle={"bold"}>
          {errorMessage}
        </SessionText>
      ) : null}

      <Input
        placeholder="Contraseña"
        name="password"
        type={passType || "password"}
        input={password}
        handleChange={handleChange}
      />
      <ButtonS>INICIAR SESIÓN</ButtonS>
      <SessionContainer
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={"10px"}
      >
        <SessionText
          color={"white"}
          borderBottom={"1px solid white"}
          fontSize={"12px"}
        >
          ¿Olvidates tu contraseña?
        </SessionText>
      </SessionContainer>

      <SessionContainer>
        <SessionText color={"white"}>
          ¿Todavía no tenés una cuenta?{" "}
        </SessionText>
        <Link to="/register" onClick={() => clearInput()}>
          <SessionText color={"#62d0ff"}> REGISTRATE</SessionText>
        </Link>
      </SessionContainer>
    </form>
  );
};

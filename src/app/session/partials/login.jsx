import React from "react";
import Input from "../../components/input";
import {ButtonS} from "../../components/input/style.js"

export default ({ email, password, handleChange, handleSubmitLogin }) => {
  return (
    <form onSubmit={handleSubmitLogin}>
      <Input placeholder="Email" name="email" type="text" input={email} handleChange={handleChange} />
      <Input
      placeholder="Contraseña"
        name="password"
        type="password"
        input={password}
        handleChange={handleChange}
      />
      <ButtonS>INICIAR SESIÓN</ButtonS>
      

  {/*     <button type="submit">Iniciar sesion</button> */}
    </form>
  );
};

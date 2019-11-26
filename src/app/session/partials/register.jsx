import React from "react";
import Input from "../../components/input";

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
        placeholder="agus"
        name="name"
        type="text"
        input={name}
        handleChange={handleChange}
      />
      <Input
        placeholder="perkins"
        name="lastname"
        type="text"
        input={lastname}
        handleChange={handleChange}
      />
      <Input
        placeholder="a@a.com"
        name="email"
        type="text"
        input={email}
        handleChange={handleChange}
      />
      <Input
        placeholder="*******"
        name="password"
        type="password"
        input={password}
        type={password}
        handleChange={handleChange}
      />
      <button type="submit">hola</button>
    </form>
  );
};

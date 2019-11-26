import React from "react";
import { Input } from "../../components/input";

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
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
      ></Input>
      <Input
        name="lastname"
        type="text"
        value={lastname}
        onChange={handleChange}
      ></Input>
      <Input
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      ></Input>
      <Input
        name="password"
        type="password"
        value={password}
        type={password}
        onChange={handleChange}
      ></Input>
      <button type="submit"></button>
    </form>
  );
};

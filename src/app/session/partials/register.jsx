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
        value={name}
        onChange={handleChange}
      />
      <Input
        placeholder="perkins"
        name="lastname"
        type="text"
        value={lastname}
        onChange={handleChange}
      />
      <Input
        placeholder="a@a.com"
        name="email"
        type="text"
        value={email}
        onChange={handleChange}
      />
      <Input
        placeholder="*******"
        name="password"
        type="password"
        value={password}
        type={password}
        onChange={handleChange}
      />
      <button type="submit">hola</button>
    </form>
  );
};

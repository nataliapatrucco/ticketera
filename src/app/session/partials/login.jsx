import React from "react";
import { Input } from "../../components/input";

export default ({ email, password, handleChange, handleSubmitLogin }) => {
  return (
    <form onSubmit={handleSubmitLogin}>
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
        onChange={handleChange}
      ></Input>
      <button type="submit"></button>
    </form>
  );
};

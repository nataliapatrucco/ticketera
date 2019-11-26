import React from "react";
import Input from "../../components/input";

export default ({ email, password, handleChange, handleSubmitLogin }) => {
  return (
    <form onSubmit={handleSubmitLogin}>
      <Input name="email" type="text" value={email} onChange={handleChange} />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit"></button>
    </form>
  );
};

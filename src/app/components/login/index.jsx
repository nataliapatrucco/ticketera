import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    /*action*/
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleEmail} type="email" name="email" />
        <input onChange={handlePassword} type="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

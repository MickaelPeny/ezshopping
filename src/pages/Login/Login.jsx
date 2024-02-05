import React from "react";

const Login = () => {
  return (
    <>
      <h1>Hi !</h1>
      <form action="submit">
        <label htmlFor="firstname">Your firstname: </label>
        <input name="firstname" type="text" />
        <label htmlFor="lastname">Your lastname: </label>
        <input type="text" name="lastname" id="lastname" />
        <label htmlFor="email"> Your email: </label>
        <input type="email" name="email" id="email" />
        <button>Save</button>
      </form>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { Container } from "./style";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //https://coursesnodejs.herokuapp.com/user/sign-in
  const onSubmit = () => {
    fetch("https://coursesnodejs.herokuapp.com/user/sign-in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        }
      });
  };

  return (
    <Container>
      <span>password</span>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      <NavLink to={"/signup"}>Register</NavLink>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import { Container } from "./style";
import { useNavigate, NavLink } from "react-router-dom";

export const Signup = () => {
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onSubmit = () => {
    fetch("https://coursesnodejs.herokuapp.com/user/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullname,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/login");
      });
  };
  return (
    <Container>
      <span>name</span>
      <input
        type="text"
        name="fullName"
        placeholder="name"
        onChange={(e) => setFullname(e.target.value)}
      />
      <span>password</span>
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      <NavLink to={"/login"}>Sign in menu</NavLink>
    </Container>
  );
};

export default Signup;

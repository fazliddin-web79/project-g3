import React from "react";
import { Container } from "./style";
import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Container>
        <NavLink to={"/home"}>home </NavLink>
        <NavLink to={"/"}>about </NavLink>
        <NavLink to={"/"}>contact </NavLink>
        <NavLink to={"/"}>news </NavLink>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;

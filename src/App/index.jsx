import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Book from "../Book";
import Home from "../home";
import Login from "../login";
import { Navbar } from "../Navbar";
import Signup from "../Singup";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="signup" />} />
      <Route path={"/"} element={<Navbar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Book />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;

import React from "react";
import "./Header.css";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <nav>
        <div>
          <h1 style={{ color: "white" }}>LOGO</h1>
        </div>
        <div className="topnav" id="myTopnav">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) => `${isActive ? "active" : ""}`}
          >
            Todo
          </NavLink>
        </div>
      </nav>
    </>
  );
}

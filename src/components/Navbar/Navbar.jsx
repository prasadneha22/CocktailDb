import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1587223962930-cb7f31384c19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2t0YWlsfGVufDB8fDB8fHww"
          alt="logo-image"
        />
        <h1>TheCocktailDb</h1>
      </div>

      <div className="nav-lists">
        <ul>
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>Home</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

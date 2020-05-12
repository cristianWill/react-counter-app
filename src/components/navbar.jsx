import React, { Component } from "react";

// Stateless Function Component
// Nao se usa Life Cycle Hooks em Stateless Function Components.
const NavBar = ({ totalCounters }) => {
  console.log("NavBr - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary ml-3">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

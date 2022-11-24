import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <nav >
      <span >
        </span>
      <div className="header">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/reserve">Reserve</Link>
        </span>
        <span>
          <Link to="/menu">Menu</Link>
        </span>
      </div>
       <h1> DeMicaelo's Restaurant</h1>
    </nav>
  );
};

export default Header;
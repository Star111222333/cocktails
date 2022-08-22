import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="cocktail-app__navbar">
      <div className="cocktail-app__navbar-container">
        <div className="cocktail-app__navbar-logo">
          <h1>The CocktailDB</h1>
        </div>
        <ul className="cocktail-app__navbar-navlinks">
          <li>
            <Link className="cocktail-app__navbar-navlinks_link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="cocktail-app__navbar-navlinks_link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

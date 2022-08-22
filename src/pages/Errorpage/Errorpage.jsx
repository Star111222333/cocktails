import React from "react";
import { Link } from "react-router-dom";
import "./Errorpage.scss";

const Errorpage = () => {
  return (
    <main className="cocktail-app__erropage">
      <h1 className="cocktail-app__erropage-title">Oops!</h1>
      <p className="cocktail-app__erropage-text">404, Error Page not found!</p>
      <Link to="/">
        <button className="cocktail-app__erropage-btn">
          Please go back to home page
        </button>
      </Link>
    </main>
  );
};

export default Errorpage;

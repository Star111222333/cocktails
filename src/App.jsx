import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
//components
import { Navbar } from "./components";
//pages
import { About, Errorpage, Home } from "./pages";
//cocktail details
import CocktailDetailsfrom from "./pages/CocktailDetails/CocktailDetails";

const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<CocktailDetailsfrom/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
};

export default App;

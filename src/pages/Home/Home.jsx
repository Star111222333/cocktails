import React from "react";
import { CocktailsList, SearchForm } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <main className="cocktail__app-home">
      <SearchForm />
      <CocktailsList />
    </main>
  );
};

export default Home;

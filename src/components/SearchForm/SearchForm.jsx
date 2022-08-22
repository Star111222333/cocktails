import React, { useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import "./SearchForm.scss";

const SearchForm = () => {
  const { setSearch } = useAppContext();

  const searchValue = useRef("");

  // useEffect(() => {
  //   searchValue.current.focus();
  // }, []);

  const searchCocktail = () => {
    setSearch(searchValue.current.value);
  };

  return (
    <section className="cocktails-app__form">
      <h2 className="cocktails-app__form-title">
        Search Your Favorite Cocktail
      </h2>
      <form
        className="cocktails-app__form-searchform"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          className="cocktails-app__form-searchform_label"
          htmlFor="searchCocktail"
        ></label>
        <input
          type="text"
          className="cocktails-app__form-searchform_input"
          name="searchCocktail"
          id="searchCocktail"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </section>
  );
};

export default SearchForm;

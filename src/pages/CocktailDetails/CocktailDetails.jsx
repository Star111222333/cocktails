import Button from "@mui/material/Button";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./CocktailDetails.scss";

const CocktailDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { cocktails } = useAppContext();

  console.log(cocktails);

  if (cocktails.drinks) {
    const cocktail = cocktails.drinks.find(
      (cocktail) => cocktail.idDrink.toString() === id
    );

    const {
      strDrink: name,
      strCategory: category,
      strAlcoholic: info,
      strGlass: glass,
      strInstructions: instructions,
      strDrinkThumb: image,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = cocktail || {};

    return (
      <section className="cocktail-app__cocktaildetails">
        <Link to="/">
          <Button variant="contained" disableElevation disableRipple>
            Back to home
          </Button>
        </Link>
        <div className="cocktail-app__cocktaildetails-container">
          <div className="cocktail-app__cocktaildetails-image">
            <img src={image} alt={name} />
          </div>
          <div className="cocktail-app__cocktaildetails-details">
            {name && (
              <div className="cocktail-app__cocktaildetails-details_text">
                <h4>Name:</h4>
                <p>{name}</p>
              </div>
            )}
            {category && (
              <div className="cocktail-app__cocktaildetails-details_text">
                <h4>Category:</h4>
                <p>{category}</p>
              </div>
            )}
            {info && (
              <div className="cocktail-app__cocktaildetails-details_text">
                <h4>Info:</h4>
                <p>{info}</p>
              </div>
            )}
            {glass && (
              <div className="cocktail-app__cocktaildetails-details_text">
                <h4>Glass:</h4>
                <p>{glass}</p>
              </div>
            )}
            {instructions && (
              <div className="cocktail-app__cocktaildetails-details_text">
                <h4>Instructions:</h4>
                <p>{instructions}</p>
              </div>
            )}
            {!strIngredient1 &&
            !strIngredient2 &&
            !strIngredient3 &&
            !strIngredient4 &&
            !strIngredient5 ? null : (
              <div className="cocktail-app__cocktaildetails-details_text">
                <h4>Ingredients:</h4>
                {strIngredient1 && <p>{strIngredient1}</p>}
                {strIngredient2 && <p>{strIngredient2}</p>}
                {strIngredient3 && <p>{strIngredient3}</p>}
                {strIngredient4 && <p>{strIngredient4}</p>}
                {strIngredient5 && <p>{strIngredient5}</p>}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {!cocktails ||
        (cocktails === [] && (
          <section className="cocktail-app__cocktaildetails">
            <div className="cocktail-app__cocktaildetails-container">
              <h1>No cocktails found!</h1>
              <Link to="/">
                <Button variant="contained" disableElevation disableRipple>
                  Back to home
                </Button>
              </Link>
            </div>
          </section>
        ))}
    </>
  );
};

export default CocktailDetails;

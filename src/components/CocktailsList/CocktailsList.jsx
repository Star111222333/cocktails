import { useAppContext } from "../../context/AppContext";
import Cocktails from "../Cocktails/Cocktails";
import Loading from "../Loading/Loading";

const CocktailsList = () => {
  const { loading, cocktails, error } = useAppContext();

  return (
    <>
      {!error && loading && <Loading />}
      {!loading && error && (
        <div
          className="cocktail__app-cocktailslist_error"
          style={{ marginTop: "50px" }}
        >
          <h1 style={{ color: "Red" }}>Error: {error}</h1>
          <p>Please refresh the page or comeback later!</p>
        </div>
      )}
      {cocktails.drinks && (
        <>
          <h1
            style={{
              textAlign: "center",
              marginTop: "50px",
              fontSize: "3rem",
              color: "#333",
              letterSpacing: "1px",
            }}
          >
            Cocktails
          </h1>
          <section
            className="cocktail__app-cocktailslist"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "50px",
              paddingBottom: "2rem",
            }}
          >
            {cocktails.drinks.map((cocktail) => (
              <Cocktails key={cocktail.idDrink} {...cocktail} />
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default CocktailsList;

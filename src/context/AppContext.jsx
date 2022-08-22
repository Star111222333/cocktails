import { createContext, useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const AppContext = createContext();

const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export const AppContextProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");

  const { data, loading, error } = useAxios(API_URL, search);

  useEffect(() => {
    setCocktails(data);
  }, [data]);

  const value = {
    cocktails,
    setCocktails,
    search,
    setSearch,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

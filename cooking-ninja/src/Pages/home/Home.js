import React from "react";
import "./Home.css";

import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3001/recipes");
  return (
    <div className="home">
      {error && <p className="error"></p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;

import React from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Recipe = () => {
  const { id } = useParams();
  const url = `http://localhost:3001/recipes/` + id;
  console.log(url);
  const { data: recipe, isPending, error } = useFetch(url);
  return (
    <div className="recipe">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;

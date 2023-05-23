import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [IsLoading, SIsLoading] = useState(false);
  const [Query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // funktion för att söka
  const searchRecipes = async () => {
    SIsLoading(true); 
    const url = searchApi + Query; 
    const res = await fetch(url);
    const data = await res.json(); 
    setRecipes(data.meals); 
    SIsLoading(false);
  };
  useEffect(() => {
    searchRecipes(); 
  }, []);

  
  // funktion för respektive svar
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  // lite taggar
      return (
        <div className="container">
          <h2>FIND YOUR FAVORITE MEAL!</h2>
          
          <SearchBar
            IsLoading={IsLoading} 
            Query={Query} 
            setQuery={setQuery}
            handleSubmit={handleSubmit} 
          />
          
          <div className="recipes">
            {recipes ? (
              
              recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))
            ) : (
              
              "No Meals found."
            )}
          </div>
        </div>
      );
    }

    export default App;

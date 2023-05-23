import React from "react";

const RecipeCard = ({ recipe }) => {
   
    const {
        idMeal, // recipe id
        strMeal, // recepie namn
        strCategory, // recipe kategori
        strMealThumb, // är URL för matens bild 
    } = recipe;

    return (
        <div className="card">
            <img
                src={strMealThumb} // visar upp bilden för maträtten
                alt={strMeal} 
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span> {/* anger recipe kategori */}
                <h3>{strMeal}</h3> {/* anger recipe namn */}
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Show Recipe</a>
                {/* skapar länken till theMealDb */}
            </div>
        </div>
    )
};

export default RecipeCard;

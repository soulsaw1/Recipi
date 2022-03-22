import React from "react"

const Recipe=({recipe})=>{
    const {idMeal,strMeal,strCategory,strMealThumb}=recipe;
    return(
    <div className="card">
    <img src={strMealThumb} 
    alt={strMeal}
    className="images"
    />
    <div className="body">
        <span className="cata">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/"+idMeal} target="_blank">INGREDIENTS</a>
    </div>

    </div>)
}
export default Recipe

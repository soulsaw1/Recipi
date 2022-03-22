import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./componte/SearchBar"
import Rispice from "./componte/Rispice"
import Header from "./componte/Header"
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

const handleSubmit=event=>{
  event.preventDefault()
  searchRecipes()
}  


return (
    <div className="App">
    <Header/>
     <div className="recipe">
     <SearchBar 
       handleSubmit={handleSubmit}
       value={query}
       onChange={event=>setQuery(event.target.value)}
       isLoading={isLoading}
     />
     {recipes ? recipes.map(recipe => (
          <Rispice
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
     </div>
    </div>
  );
}

export default App;

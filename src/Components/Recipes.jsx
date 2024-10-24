import { useEffect, useState } from "react";
import { TfiTimer } from "react-icons/tfi";
import { GiBurningDot } from "react-icons/gi";

const Recipes = ({handleWantCooking}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  
  return (
    <div className="w-2/3 border border-gray-600 rounded-lg lg:grid grid-cols-2 p-5 gap-5">
      {recipes.map((recipe) => (
        // eslint-disable-next-line react/jsx-key
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              className="h-[200px] w-full rounded-lg"
              src={recipe.recipe_image}
              alt="recipe"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.recipe_name}</h2>
            <p>{recipe.short_description}</p>
            <p className="font-bold">Ingredients {recipe.ingredients.length}</p>
            {recipe.ingredients.map((ingr) => (
              <li>{ingr}</li>
            ))}
            <div className="flex gap-5 items-center mt-5 font-bold">
              <div className="flex gap-3 items-center">
                <TfiTimer />
                <p>{recipe.preparing_time} : Minutes</p>
              </div>
              <div className="flex gap-3 items-center">
                <GiBurningDot />
                <p>{recipe.calories} : Calories</p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleWantCooking(recipe)}
                className="btn btn-primary rounded-3xl"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

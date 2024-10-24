import { useState } from "react";
import Body from "./Components/Body";
import Cookings from "./Components/Cookings";
import Footer from "./Components/Footer";
import Header from "./Components/header";
import Main from "./Components/Main";
import Recipes from "./Components/Recipes";

const App = () => {
  const [wantCooking, setWantCooking] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTotalTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  const handleCurrentCooking = (recipe) => {
    const currentlyCooking = wantCooking.filter(
      (currentCooking) => currentCooking.recipe_id !== recipe.recipe_id
    );
    setWantCooking(currentlyCooking);
    const newCooking = [...cooking, recipe];
    setCooking(newCooking);
  };

  const handleWantCooking = (recipe) => {
    const isExist = wantCooking.find(
      (cooking) => cooking.recipe_id === recipe.recipe_id
    );
    if (isExist) {
      alert("Order Already Placed....");
    } else {
      const newWantCooking = [...wantCooking, recipe];
      setWantCooking(newWantCooking);
    }
  };

  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Body></Body>
      <div className="lg:flex w-11/12 mx-auto gap-5 mb-10">
        <Recipes handleWantCooking={handleWantCooking}></Recipes>
        <Cookings
          wantCooking={wantCooking}
          handleCurrentCooking={handleCurrentCooking}
          cooking={cooking}
          calculateTotalTimeAndCalories={calculateTotalTimeAndCalories}
          totalTime={totalTime}
          
        ></Cookings>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;

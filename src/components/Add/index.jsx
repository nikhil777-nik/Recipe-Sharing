import { useState } from "react";
import "./index.css"
function Add({ handleAddDish }) {
  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dishName || !ingredients || !steps) {
      alert("Please fill all fields!");
      return;
    }

    const newDish = {
      name: dishName,
      // split ingredients by new line, trim spaces, remove empties
      ingredients: ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      steps: steps
        .split("\n")
        .map((step) => step.trim())
        .filter((step) => step !== ""),
    };

    handleAddDish(newDish);

    setDishName("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="addpage-main">
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Dish Name"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />

        {/* Ingredients as textarea */}
        <textarea
          placeholder="Ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>

        {/* Steps as textarea */}
        <textarea
          placeholder="Steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>

        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
}

export default Add;



import { useState } from "react";
import "./index.css"

function Add({ handleAddDish }) {
  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [difficulty, setDifficulty] = useState("easy"); // New state for difficulty

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dishName || !ingredients || !steps) {
      alert("Please fill all fields!");
      return;
    }

    const newDish = {
      name: dishName,
      ingredients: ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      steps: steps
        .split("\n")
        .map((step) => step.trim())
        .filter((step) => step !== ""),
      difficulty: difficulty, 
    };

    handleAddDish(newDish);

    setDishName("");
    setIngredients("");
    setSteps("");
    setDifficulty("easy"); 
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
        
        
        <div className="form-group">
          <label>Difficulty Level</label>
          <div className="difficulty-options">
            <button 
              type="button" 
              className={difficulty === "easy" ? "active" : ""} 
              onClick={() => setDifficulty("easy")}
            >
              Easy
            </button>
            <button 
              type="button" 
              className={difficulty === "medium" ? "active" : ""} 
              onClick={() => setDifficulty("medium")}
            >
              Medium
            </button>
            <button 
              type="button" 
              className={difficulty === "hard" ? "active" : ""} 
              onClick={() => setDifficulty("hard")}
            >
              Hard
            </button>
          </div>
        </div>
        
        <textarea
          placeholder="Ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>

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

import "./index.css"


function Gallery({dishList,setDishList}) {

    const handleDelete = (index) => {
    const updated = [...dishList];
    updated.splice(index, 1);
    setDishList(updated);
    localStorage.setItem("dishes",JSON.stringify(updated))
  };

  return (
    <div>
        {dishList.length > 0 ? (
        <div className="dish-list">
          <h4>Added Dishes:</h4>
          <ul>
            {dishList.map((dish, index) => (
              <li key={index} className="dish-item">
                <div className="dish-details">
                  <strong className="Dish-name">{dish.name}</strong> <br />
                  <em className="Ingredients">Ingredients: </em><em className="main-ingredient">{dish.ingredients} </em><br />
                  <em className="steps">Steps:</em> <em className="main-steps">{dish.steps}</em>
                </div>
                <button
                  className="clear-button"
                  onClick={() => handleDelete(index)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You Need To Add</p>
      )}
    </div>
  )
}

export default Gallery
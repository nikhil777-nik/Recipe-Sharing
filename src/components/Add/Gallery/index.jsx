


import "./index.css"

function Gallery({ dishList, setDishList }) {

  const handleDelete = (index) => {
    const updated = [...dishList];
    updated.splice(index, 1);
    setDishList(updated);
    localStorage.setItem("dishes", JSON.stringify(updated))
  };

  return (
    <div className="gallery-container">
      {dishList.length > 0 ? (
        <div className="dish-grid">
          {dishList.map((dish, index) => (
            <div key={index} className="dish-card">
              <div className="dish-details">
                <h3 className="dish-name">{dish.name}</h3>

                 <h1 className="difficulty-badge">
                  {dish.difficulty}
                </h1>
               
                {dish.ingredients && dish.ingredients.length > 0 && (
                  <div className="dish-info-section">
                    <p className="section-title">Ingredients:</p>
                    <ul className="info-list">
                      {dish.ingredients.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Check if steps exist and display as a list */}
                {dish.steps && dish.steps.length > 0 && (
                  <div className="dish-info-section">
                    <p className="section-title">Steps:</p>
                    <ol className="info-list">
                      {dish.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
              
              <button
                className="clear-button"
                onClick={() => handleDelete(index)}
              >
                Clear
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-dishes-message">You haven't added any dishes yet!</p>
      )}
    </div>
  )
}

export default Gallery;
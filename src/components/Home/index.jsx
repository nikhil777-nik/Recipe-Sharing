
import "./index.css"
import { useEffect,useState } from 'react';
function Home() {
   const messages = [
      "Welcome to Live Kitchen", // English
      "లైవ్ కిచెన్ కి స్వాగతం", // Telugu
      "लाइव किचन में आपका स्वागत है" // Hindi
    ];

    const [currentMsg, setCurrentMsg] = useState(0);

 const [recipes, setRecipes] = useState([]);

const Youtubelink = ()=>{
   window.open(recipes.strYoutube,"_blank")
}

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        );
        const data = await res.json();
        setRecipes(data.meals); // store recipes in state
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    fetchRecipes();

  }, []);

   useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMsg((prev) => (prev + 1) % messages.length);
      }, 3000); // change every 3 seconds
  
      return () => clearInterval(interval);
    }, []);


  const handleAddButton = () => {
        navigate("/add");
      };

  return (
    <div>
       <div className="home">
          <section className="hero"> 
            <div className="hero-overlay">
              <h1 className="welcome sliding-text">{messages[currentMsg]}</h1>
              <h1>Share Your Culinary Masterpieces With The World</h1>
              <p>
                Join our community of food enthusiasts and discover amazing recipes
                from around the globe.
              </p>
              <button onClick={handleAddButton} className="cta-btn">
                Start Sharing
              </button>
            </div>
          </section>

          
          <section className="featured">
            <h2>Featured Recipes</h2>
            <p>Explore our community’s most loved dishes</p>
            <div className="recipe-cards">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.idMeal}>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="bowl"
          />
          <h3>{recipe.strMeal}</h3>
          <p>Delicious {recipe.strMeal}</p>
          <button className="youtube"  type="button" >Youtube Like</button>
        </div>
      ))}
    </div>
          </section>

          <section className="how-it-works">
            <h2>How It Works</h2>
            <div className="steps">
              <div>
                <span>👆</span>
                <h4>Click</h4>
                <p>Click on Start Sharing button</p>
              </div>
              <div>
                <span>✍️</span>
                <h4>Create</h4>
                <p>Write down your recipe & steps.</p>
              </div>
              <div>
                <span>📤</span>
                <h4>Share</h4>
                <p>Publish your recipe and inspire others.</p>
              </div>
            </div>
          </section>

        
          <section className="testimonials">
            <h2>What Our Users Say</h2>
            <div className="testimonial-cards">
              <div className="testimonial">
                <p>
                  "Live Kitchen transformed how I share recipes. The community is
                  amazing!"
                </p>
                <h4>Sarah Miller</h4>
              </div>
              <div className="testimonial">
                <p>
                  "As a chef, I love connecting with foodies & sharing my passion."
                </p>
                <h4>James Davis</h4>
              </div>
            </div>
          </section>

          
          <section className="newsletter">
            <h2>Stay Updated</h2>
            <p>
              Subscribe for weekly recipes, cooking tips & highlights.
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </section>
        </div>
    </div>
  )
}
export default Home
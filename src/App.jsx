    import { useState, useEffect } from "react";
    import { Routes, Route, useNavigate, Link } from "react-router-dom";
    import Add from "./components/Add/index.jsx";
    import Gallery from "./components/Add/Gallery/index.jsx";
    import About from "./components/Add/About/index.jsx";
    import Contact from "./components/Add/Contact/index.jsx";
    import "./App.css";

    function App() {

  const messages = [
    "Welcome to Live Kitchen", // English
    "లైవ్ కిచెన్ కి స్వాగతం", // Telugu
    "लाइव किचन में आपका स्वागत है" // Hindi
  ];

  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

      const [dishList, setDishList] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
        const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];
        setDishList(storedDishes);
      }, []);

      const handleAddDish = (dish) => {
        const updatedList = [...dishList, dish];
        setDishList(updatedList);
        localStorage.setItem("dishes", JSON.stringify(updatedList));
        navigate("/gallery");
      };

      const handleAddButton = () => {
        navigate("/add");
      };

      
      const Home = () => (
        
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
              <div className="recipe-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s" alt="pizza" />
                <h3>Margherita Pizza</h3>
                <p>Classic Italian with fresh mozzarella & basil.</p>
              </div>
              <div className="recipe-card">
                <img src="images\buddha_bowl.png" alt="bowl" />
                <h3>Vegetable Buddha Bowl</h3>
                <p>Nutritious bowl with roasted veggies & tahini.</p>
              </div>
              <div className="recipe-card">
                <img src="images\lava-cake.jpeg" alt="cake" />
                <h3>Chocolate Lava Cake</h3>
                <p>Decadent dessert with molten chocolate center.</p>
              </div>
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
      );

      return (
        <div className="app-container">
          <header className="header">
            <div className="logo-container">
              <Link to="/" className="logo-text">🍴 Live Kitchen</Link>
            </div>
            <nav className="nav-links">
              <Link to="/">HOME</Link>
              <Link to="/add">ADD</Link>
              <Link to="/gallery">GALLERY</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>
          </header>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add handleAddDish={handleAddDish} />} />
              <Route
                path="/gallery"
                element={<Gallery dishList={dishList} setDishList={setDishList} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-cols">
              <div>
                <h4>About Live Kitchen</h4>
                <p>
                  A community-driven platform to share recipes and connect food
                  lovers worldwide.
                </p>
              </div>
              <div>
                <h4>Explore</h4>
                <ul>
                  <li>Popular Recipes</li>
                  <li>Latest Additions</li>
                  <li>Seasonal Specials</li>
                </ul>
              </div>
              <div>
                <h4>Help & Support</h4>
                <ul>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h4>Get The App</h4>
                <ul>
                  <li>iOS App</li>
                  <li>Android App</li>
                  <li>Desktop Version</li>
                </ul>
              </div>
            </div>
            <p className="footer-bottom">© 2025 Live Kitchen. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;

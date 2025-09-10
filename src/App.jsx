 

           
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Add from "./components/Add/index.jsx";
import Gallery from "./components/Add/Gallery/index.jsx";
import "./App.css";

function App() {
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
  navigate("/gallery")
};

 

  const handleAddButton = () => {
    navigate("/add");
  };

  const Home = () => (
    <div className="hero-content">
      <h1>
        Welcome to <span className="hero-content-h2">Live Kitchen</span>
      </h1>
      <button onClick={handleAddButton} className="add-button">ADD</button>
    </div>
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 12h3v8a2 2 0 002 2h4v-7h4v7h4a2 2 0 002-2v-8h3L12 2z" />
          </svg>
          <span className="logo-text">Live Kitchen</span>
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
        <div className="bg-overlay">
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')",
            }}
          ></div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add handleAddDish={handleAddDish} />} />
          <Route path="/gallery" element={<Gallery dishList={dishList} setDishList={setDishList}/>}></Route>
        </Routes>
      </main>

      <footer className="footer">
        <h3>We Love Your Food ❤️</h3>
        <p>Thanks for bringing your delicious creations to the world</p>
      </footer>
    </div>
  );
}

export default App;

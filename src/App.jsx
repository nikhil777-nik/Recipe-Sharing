  //   import { useState, useEffect } from "react";
  //   import { Routes, Route, useNavigate, Link } from "react-router-dom";
  //   import Add from "./components/AddPage/index.jsx";
  //   import Gallery from "./components/Gallery/index.jsx";
  //   import About from "./components/About/index.jsx";
  //   import Contact from "./components/Contact/index.jsx";
  //   import Login from "./components/login/index.jsx";
  //   import Home from "./components/Home/index.jsx";
  //   import NotFound from "./components/Notfound/index.jsx"
  //   import "./App.css";

  //   function App() {

  //     const [dishList, setDishList] = useState([]);
  //     const navigate = useNavigate();

  //     useEffect(() => {
  //       const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];
  //       setDishList(storedDishes);
  //     }, []);

  //     const handleAddDish = (dish) => {
  //       const updatedList = [...dishList, dish];
  //       setDishList(updatedList);
  //       localStorage.setItem("dishes", JSON.stringify(updatedList));
  //       navigate("/gallery");
  //     };

    


  //     return (
        
  //       <div className="app-container">
  //         <header className="header">
  //           <div className="logo-container">
  //             <Link to="/" className="logo-text">🍴 Live Kitchen</Link>
  //           </div>

  //          <div className="walker-container">
  //   <div className="walker">🏃‍➡️🍔</div>
  // </div>

  //           <nav className="nav-links">
  //             <Link to="/">HOME</Link>
  //             <Link to="/add">ADD</Link>
  //             <Link to="/gallery">GALLERY</Link>
  //             <Link to="/about">ABOUT</Link>
  //             <Link to="/contact">CONTACT</Link>
  //           </nav>  
  //         </header>
  //         <main className="main">
  //           <Routes>
  //             <Route path="/login" element={<Login/>}/>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/add" element={<Add handleAddDish={handleAddDish} />} />
  //             <Route
  //               path="/gallery"
  //               element={<Gallery dishList={dishList} setDishList={setDishList} />}
  //             />
  //             <Route path="/about" element={<About />} />
  //             <Route path="/contact" element={<Contact />} />
  //             <Route path="*" element={<NotFound/>}/>
  //           </Routes>
  //         </main>

  //         {/* Footer */}
  //         <footer className="footer">
  //           <div className="footer-cols">
  //             <div>
  //               <h4>About Live Kitchen</h4>
  //               <p>
  //                 A community-driven platform to share recipes and connect food
  //                 lovers worldwide.
  //               </p>
  //             </div>
  //             <div>
  //               <h4>Explore</h4>
  //               <ul>
  //                 <li>Popular Recipes</li>
  //                 <li>Latest Additions</li>
  //                 <li>Seasonal Specials</li>
  //               </ul>
  //             </div>
  //             <div>
  //               <h4>Help & Support</h4>
  //               <ul>
  //                 <li>FAQs</li>
  //                 <li>Contact Us</li>
  //                 <li>Privacy Policy</li>
  //               </ul>
  //             </div>
  //             <div>
  //               <h4>Get The App</h4>
  //               <ul>
  //                 <li>iOS App</li>
  //                 <li>Android App</li>
  //                 <li>Desktop Version</li>
  //               </ul>
  //             </div>
  //           </div>
  //           <p className="footer-bottom">© 2025 Live Kitchen. All rights reserved.</p>
  //         </footer>
  //       </div>
  //     );
  //   }

  //   export default App;


  import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Link, useLocation } from "react-router-dom";
import Add from "./components/AddPage/index.jsx";
import Gallery from "./components/Gallery/index.jsx";
import About from "./components/About/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Login from "./components/login/index.jsx";
import Home from "./components/Home/index.jsx";
import NotFound from "./components/Notfound/index.jsx";
import "./App.css";

function App() {
  const [dishList, setDishList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current path

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


const hideLayout = location.pathname !== "/" &&
                   location.pathname !== "/add" &&
                   location.pathname !== "/gallery" &&
                   location.pathname !== "/about" &&
                   location.pathname !== "/contact"   


  return (
    <div className="app-container">
      {!hideLayout && (
        <header className="header">
          <div className="logo-container">
            <Link to="/" className="logo-text">🍴 Live Kitchen</Link>
          </div>

          <div className="walker-container">
            <div className="walker">🏃‍➡️🍔</div>
          </div>

          <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/add">ADD</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>  
        </header>
      )}

      <main className="main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add handleAddDish={handleAddDish} />} />
          <Route path="/gallery" element={<Gallery dishList={dishList} setDishList={setDishList} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && (
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
      )}
    </div>
  );
}

export default App;

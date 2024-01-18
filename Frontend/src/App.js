import logo from "./logo.svg";
import "./contact.css";
import "./style.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/partners";
import Sliders from "./Sliders";
import Mobile from "./components/mNav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

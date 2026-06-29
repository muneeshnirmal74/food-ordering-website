import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurMenu from "./pages/OurMenu/OurMenu";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/*" element={<Home/>}/>
        <Route  path="/About" element={<About/>}/>
        <Route  path="/OurMenu" element={<OurMenu/>}/>
        <Route  path="/OurMenu" element={<OurMenu/>}/>
        <Route  path="/Shop" element={<Shop/>}/>
        <Route  path="/Blog" element={<Blog/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;



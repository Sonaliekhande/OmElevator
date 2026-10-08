import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
// import About from "./pages/About/About";
import Aboutpage from "./pages/Aboutpage";
import Servicespage from "./pages/Servicespage";
import Footer from "./components/footer/Footer";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicespage/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
      </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
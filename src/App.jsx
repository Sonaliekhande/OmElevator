import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
// import About from "./pages/About/About";
import Aboutpage from "./pages/Aboutpage";
import Servicespage from "./pages/Servicespage";
import Footer from "./components/footer/Footer";
import Contactpage from "./pages/Contactpage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import GalleryPage from "./pages/GalleryPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div className="routeTransition" key={pathname}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
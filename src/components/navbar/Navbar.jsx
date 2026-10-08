// import React, { useState } from "react";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
      
//       {/* Logo */}
//       <h1 className={styles.logo}>
//   <span className={styles.om}>OM</span>{" "}
//   <span className={styles.elevators}>ELEVATORS</span>
// </h1>

//       {/* Desktop Menu */}
//       <div className={styles.menu}>
//         <a href="/">Home</a>
//         <a href="about">About</a>
//         <a href="services">Services</a>
//         <a href="#">Products</a>
//         <a href="#">Projects</a>
//         <a href="#">Contact</a>
//       </div>

//       {/* Button */}
//       <button className={styles.button}>Get Quote</button>

//       {/* Mobile Icon */}
//       <div
//         className={styles.menuIcon}
//         onClick={() => setOpen(!open)}
//       >
//         ☰
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className={styles.mobileMenu}>
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Products</a>
//           <a href="#">Projects</a>
//           <a href="#">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
    setProductOpen(false);
  };

  const toggleService = () => {
    setServiceOpen(!serviceOpen);
    setProductOpen(false);
  };

  const toggleProduct = () => {
    setProductOpen(!productOpen);
    setServiceOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* =========================
            LOGO
        ========================= */}
        <Link
          to="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <span className={styles.logoOM}>OM</span>
          <span className={styles.logoText}>ELEVATORS</span>
        </Link>

        {/* =========================
            NAVIGATION
        ========================= */}
        <nav
          className={`${styles.navMenu} ${
            menuOpen ? styles.navMenuActive : ""
          }`}
        >

          {/* HOME */}
          <Link
            to="/"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={styles.navLink}
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* =========================
              SERVICES DROPDOWN
          ========================= */}
          <div className={styles.dropdown}>

            <button
              type="button"
              className={styles.dropdownButton}
              onClick={toggleService}
            >
              Services

              <span
                className={`${styles.arrow} ${
                  serviceOpen ? styles.arrowRotate : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                serviceOpen ? styles.dropdownActive : ""
              }`}
            >
              <Link
                to="/services"
                onClick={closeMenu}
              >
                All Services
              </Link>

              <Link
                to="/services/passenger"
                onClick={closeMenu}
              >
                Passenger Elevator
              </Link>

              <Link
                to="/services/home"
                onClick={closeMenu}
              >
                Home Elevator
              </Link>

              <Link
                to="/services/hospital"
                onClick={closeMenu}
              >
                Hospital Elevator
              </Link>

              <Link
                to="/services/goods"
                onClick={closeMenu}
              >
                Goods Elevator
              </Link>
            </div>
          </div>

          {/* =========================
              PRODUCTS DROPDOWN
          ========================= */}
          <div className={styles.dropdown}>

            <button
              type="button"
              className={styles.dropdownButton}
              onClick={toggleProduct}
            >
              Products

              <span
                className={`${styles.arrow} ${
                  productOpen ? styles.arrowRotate : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                productOpen ? styles.dropdownActive : ""
              }`}
            >
              <Link
                to="/products/passenger"
                onClick={closeMenu}
              >
                Passenger Lift
              </Link>

              <Link
                to="/products/home"
                onClick={closeMenu}
              >
                Home Lift
              </Link>

              <Link
                to="/products/hospital"
                onClick={closeMenu}
              >
                Hospital Lift
              </Link>

              <Link
                to="/products/goods"
                onClick={closeMenu}
              >
                Goods Lift
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Contact
          </Link>

          {/* MOBILE QUOTE */}
          <Link
            to="/contact"
            className={styles.mobileQuote}
            onClick={closeMenu}
          >
            Get a Quote
          </Link>

        </nav>

        {/* =========================
            DESKTOP QUOTE
        ========================= */}
        <Link
          to="/contact"
          className={styles.quoteButton}
        >
          Get a Quote
          <span>→</span>
        </Link>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonActive : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;
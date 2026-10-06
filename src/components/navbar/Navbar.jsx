import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
      {/* Logo */}
      <h1 className={styles.logo}>
  <span className={styles.om}>OM</span>{" "}
  <span className={styles.elevators}>ELEVATORS</span>
</h1>

      {/* Desktop Menu */}
      <div className={styles.menu}>
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="services">Services</a>
        <a href="#">Products</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

      {/* Button */}
      <button className={styles.button}>Get Quote</button>

      {/* Mobile Icon */}
      <div
        className={styles.menuIcon}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
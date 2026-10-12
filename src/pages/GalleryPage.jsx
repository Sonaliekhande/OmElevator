import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import passengerImage from "../assets/Liftimages/images.png";
import homeImage from "../assets/Liftimages/images1.png";
import hospitalImage from "../assets/Liftimages/images2.png";
import buildingImage from "../assets/Liftimages/images.jpg";
import styles from "./GalleryPage.module.css";

const galleryItems = [
  {
    title: "Passenger Elevator",
    category: "Passenger",
    image: passengerImage,
  },
  {
    title: "Home Elevator",
    category: "Residential",
    image: homeImage,
  },
  {
    title: "Hospital Elevator",
    category: "Healthcare",
    image: hospitalImage,
  },
  {
    title: "Elevator Installation",
    category: "Installation",
    image: buildingImage,
  },
  {
    title: "Modern Elevator Design",
    category: "Design",
    image: heroImage,
  },
  {
    title: "Goods Elevator",
    category: "Industrial",
    image: passengerImage,
  },
];

const GalleryPage = () => (
  <main className={styles.galleryPage}>
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span>OM ELEVATORS</span>
        <h1>Our Gallery</h1>
        <p>
          Explore elevator styles and solutions for residential, commercial,
          healthcare and industrial spaces.
        </p>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Gallery</span>
        </div>
      </div>
    </section>

    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <span>OUR WORK</span>
          <h2>Elevator solutions, at a glance</h2>
          <p>
            Browse a selection of elevator types and installation imagery.
            Contact us to discuss the right fit for your building.
          </p>
        </header>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <article className={styles.galleryCard} key={`${item.title}-${index}`}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className={styles.cardCaption}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.galleryCta}>
          <p>Looking for an elevator solution for your building?</p>
          <Link to="/contact">Talk to our team</Link>
        </div>
      </div>
    </section>
  </main>
);

export default GalleryPage;

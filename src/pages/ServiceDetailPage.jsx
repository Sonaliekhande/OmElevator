import React from "react";
import { Link, useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import styles from "./ServiceDetailPage.module.css";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className={styles.notFound}>
        <h1>Service not found</h1>
        <p>The service you are looking for is not available.</p>
        <Link to="/services">Browse all services</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img className={styles.heroImage} src={service.image} alt="" />
        <div className={styles.heroContent}>
          <p>{service.category} solutions</p>
          <h1>{service.title}</h1>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.name}</span>
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.imageWrap}>
          <img src={service.image} alt={service.title} />
        </div>
        <div className={styles.content}>
          <span>{service.category}</span>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <h3>Designed around your needs</h3>
          <ul>
            {service.features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link to="/contact" className={styles.primaryButton}>
              Request a quote
            </Link>
            <Link to="/services" className={styles.secondaryButton}>
              View all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;

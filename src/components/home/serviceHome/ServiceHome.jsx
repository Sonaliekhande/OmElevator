import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../common/ScrollReveal";
import servicesData from "../../../data/servicesData";
import styles from "./ServiceHome.module.css";

const ServiceHome = () => (
  <section className={styles.homeServices}>
    <div className={styles.homeServicesContainer}>
      <div className={styles.homeServicesHeading}>
        <span>OUR SERVICES</span>
        <h2>Find the right lift for your building</h2>
        <p>
          Compare solutions for homes, hospitals, workplaces and industry, then
          talk with our team about what suits your site.
        </p>
      </div>

      <div className={styles.homeServicesGrid}>
        {servicesData.slice(0, 6).map((service) => (
          <ScrollReveal key={service.slug} delay={(service.id - 1) % 3 * 90}>
            <Link
              className={styles.homeServiceCard}
              to={`/services/${service.slug}`}
            >
              <img src={service.image} alt="" />
              <div>
                <span>{service.category}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <strong>Explore service →</strong>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className={styles.homeServicesAction}>
        <Link to="/services">View all services</Link>
      </div>
    </div>
  </section>
);

export default ServiceHome;

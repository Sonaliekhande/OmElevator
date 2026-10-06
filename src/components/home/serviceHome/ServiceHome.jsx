import React, { useState } from "react";
import styles from "./ServiceHome.module.css";
import servicesData from "../../../data/servicesData";   // ✅ import data

const ServiceHome = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? servicesData
    : servicesData.slice(0, 6);

  return (
    <div className={styles.services}>
      <h1 className={styles.title}>Key Services</h1>

      <div className={styles.grid}>
        {visibleServices.map((service) => (
          <div className={styles.card} key={service.id}>
            <img src={service.img} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.btnContainer}>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "More Services"}
        </button>
      </div>
    </div>
  );
};

export default ServiceHome;
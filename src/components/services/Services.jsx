
// import React from "react";
// import styles from "./Services.module.css";

// const Services = () => {
//   return (
//     <div className={styles.servicesPage}>

//       {/* ================= HERO ================= */}
//       <section className={styles.hero}>
//         <div className={styles.heroOverlay}></div>

//         <div className={styles.heroContent}>
//           <span className={styles.heroLabel}>
//             OM ELEVATORS • OUR SERVICES
//           </span>

//           <h1>
//             Complete Elevator
//             <br />
//             <span>Solutions.</span>
//           </h1>

//           <p>
//             From installation to maintenance, OM ELEVATORS delivers
//             reliable, safe and innovative vertical transportation
//             solutions for every type of building.
//           </p>

//           <div className={styles.heroButtons}>
//             <button className={styles.primaryBtn}>
//               Explore Services ↓
//             </button>

//             <button className={styles.outlineBtn}>
//               Get A Quote →
//             </button>
//           </div>
//         </div>

//         <div className={styles.heroBottom}>
//           <span>SCROLL TO EXPLORE</span>
//           <span>↓</span>
//         </div>
//       </section>


//       {/* ================= INTRO ================= */}
//       <section className={styles.intro}>
//         <div className={styles.introContent}>
//           <span className={styles.sectionLabel}>
//             WHAT WE DO
//           </span>

//           <h2>
//             Moving You
//             <span> Forward.</span>
//           </h2>

//           <p>
//             At OM ELEVATORS, we provide complete vertical
//             transportation solutions designed around safety,
//             performance and modern technology.
//           </p>

//           <p>
//             Whether you need a new elevator, modernization of an
//             existing system or regular maintenance, our experienced
//             team is ready to deliver the right solution.
//           </p>

//           <div className={styles.introStats}>
//             <div>
//               <strong>500+</strong>
//               <span>Installations</span>
//             </div>

//             <div>
//               <strong>15+</strong>
//               <span>Years Experience</span>
//             </div>

//             <div>
//               <strong>24/7</strong>
//               <span>Support</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.introImage}>
//           <img
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
//             alt="Elevator service"
//           />

//           <div className={styles.imageCard}>
//             <strong>OM</strong>
//             <span>Engineering Excellence</span>
//           </div>
//         </div>
//       </section>


//       {/* ================= ELEVATOR TYPES ================= */}
//       <section className={styles.elevatorSection}>
//         <div className={styles.sectionHeading}>
//           <span className={styles.sectionLabel}>
//             ELEVATOR SOLUTIONS
//           </span>

//           <h2>
//             Elevators Designed
//             <span> For Every Space.</span>
//           </h2>

//           <p>
//             Explore our range of elevator solutions engineered for
//             residential, commercial, healthcare and industrial
//             applications.
//           </p>
//         </div>


//         <div className={styles.elevatorGrid}>

//           {/* Passenger */}
//           <div className={styles.elevatorCard}>
//             <div className={styles.cardImage}>
//               <img
//                 src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
//                 alt="Passenger elevator"
//               />

//               <span>01</span>
//             </div>

//             <div className={styles.cardContent}>
//               <span className={styles.cardCategory}>
//                 PASSENGER
//               </span>

//               <h3>Passenger Elevators</h3>

//               <p>
//                 Smooth, comfortable and efficient elevator systems
//                 designed for residential and commercial buildings.
//               </p>

//               <a href="/contact">
//                 Explore Solution →
//               </a>
//             </div>
//           </div>


//           {/* Home */}
//           <div className={styles.elevatorCard}>
//             <div className={styles.cardImage}>
//               <img
//                 src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492"
//                 alt="Home elevator"
//               />

//               <span>02</span>
//             </div>

//             <div className={styles.cardContent}>
//               <span className={styles.cardCategory}>
//                 RESIDENTIAL
//               </span>

//               <h3>Home Elevators</h3>

//               <p>
//                 Elegant and compact elevator solutions that bring
//                 comfort, convenience and accessibility to homes.
//               </p>

//               <a href="/contact">
//                 Explore Solution →
//               </a>
//             </div>
//           </div>


//           {/* Hospital */}
//           <div className={styles.elevatorCard}>
//             <div className={styles.cardImage}>
//               <img
//                 src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
//                 alt="Hospital elevator"
//               />

//               <span>03</span>
//             </div>

//             <div className={styles.cardContent}>
//               <span className={styles.cardCategory}>
//                 HEALTHCARE
//               </span>

//               <h3>Hospital Elevators</h3>

//               <p>
//                 Spacious and dependable elevator systems designed
//                 for hospitals and healthcare facilities.
//               </p>

//               <a href="/contact">
//                 Explore Solution →
//               </a>
//             </div>
//           </div>


//           {/* Goods */}
//           <div className={styles.elevatorCard}>
//             <div className={styles.cardImage}>
//               <img
//                 src="https://images.unsplash.com/photo-1586528116493-da8b6f1b7a9b"
//                 alt="Goods elevator"
//               />

//               <span>04</span>
//             </div>

//             <div className={styles.cardContent}>
//               <span className={styles.cardCategory}>
//                 INDUSTRIAL
//               </span>

//               <h3>Goods Elevators</h3>

//               <p>
//                 Heavy-duty elevator solutions built for factories,
//                 warehouses and industrial applications.
//               </p>

//               <a href="/contact">
//                 Explore Solution →
//               </a>
//             </div>
//           </div>


//           {/* Capsule */}
//           <div className={styles.elevatorCard}>
//             <div className={styles.cardImage}>
//               <img
//                 src="https://images.unsplash.com/photo-1524230572899-a752b3835840"
//                 alt="Capsule elevator"
//               />

//               <span>05</span>
//             </div>

//             <div className={styles.cardContent}>
//               <span className={styles.cardCategory}>
//                 PREMIUM
//               </span>

//               <h3>Capsule Elevators</h3>

//               <p>
//                 Stylish panoramic elevator designs that add a
//                 modern architectural element to your building.
//               </p>

//               <a href="/contact">
//                 Explore Solution →
//               </a>
//             </div>
//           </div>


//           {/* Car */}
//           <div className={styles.elevatorCard}>
//             <div className={styles.cardImage}>
//               <img
//                 src="https://images.unsplash.com/photo-1542367597-8849ebae3a5a"
//                 alt="Car elevator"
//               />

//               <span>06</span>
//             </div>

//             <div className={styles.cardContent}>
//               <span className={styles.cardCategory}>
//                 AUTOMOTIVE
//               </span>

//               <h3>Car Elevators</h3>

//               <p>
//                 Reliable vehicle lifting solutions for parking
//                 facilities, showrooms and residential buildings.
//               </p>

//               <a href="/contact">
//                 Explore Solution →
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>


//       {/* ================= COMPLETE SERVICES ================= */}
//       <section className={styles.completeSection}>

//         <div className={styles.completeImage}>
//           <img
//             src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
//             alt="Elevator installation"
//           />

//           <div className={styles.experienceBadge}>
//             <strong>15+</strong>
//             <span>Years Of Expertise</span>
//           </div>
//         </div>


//         <div className={styles.completeContent}>
//           <span className={styles.sectionLabel}>
//             COMPLETE SERVICES
//           </span>

//           <h2>
//             More Than Just
//             <span> Installation.</span>
//           </h2>

//           <p>
//             Our relationship with customers does not end after
//             installation. We provide complete lifecycle support
//             to keep your elevator safe and performing at its best.
//           </p>


//           <div className={styles.serviceList}>

//             <div className={styles.serviceItem}>
//               <div className={styles.serviceNumber}>01</div>

//               <div>
//                 <h3>Elevator Installation</h3>

//                 <p>
//                   Professional installation with quality
//                   components and strict safety checks.
//                 </p>
//               </div>
//             </div>


//             <div className={styles.serviceItem}>
//               <div className={styles.serviceNumber}>02</div>

//               <div>
//                 <h3>Elevator Maintenance</h3>

//                 <p>
//                   Regular maintenance programs designed to
//                   improve reliability and reduce downtime.
//                 </p>
//               </div>
//             </div>


//             <div className={styles.serviceItem}>
//               <div className={styles.serviceNumber}>03</div>

//               <div>
//                 <h3>Modernization</h3>

//                 <p>
//                   Upgrade older elevator systems with modern
//                   technology and improved safety.
//                 </p>
//               </div>
//             </div>


//             <div className={styles.serviceItem}>
//               <div className={styles.serviceNumber}>04</div>

//               <div>
//                 <h3>Repair & Breakdown Service</h3>

//                 <p>
//                   Fast and professional support for elevator
//                   repairs and unexpected breakdowns.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//       </section>


//       {/* ================= WHY CHOOSE US ================= */}
//       <section className={styles.whySection}>

//         <div className={styles.sectionHeading}>
//           <span className={styles.sectionLabel}>
//             WHY CHOOSE OM
//           </span>

//           <h2>
//             Built On
//             <span> Trust & Technology.</span>
//           </h2>

//           <p>
//             We combine engineering expertise, advanced technology
//             and dedicated service to deliver elevators you can
//             depend on.
//           </p>
//         </div>


//         <div className={styles.whyGrid}>

//           <div className={styles.whyCard}>
//             <span>01</span>

//             <div className={styles.whyIcon}>
//               ✓
//             </div>

//             <h3>Safety First</h3>

//             <p>
//               Every elevator is designed and maintained with
//               passenger safety as our highest priority.
//             </p>
//           </div>


//           <div className={styles.whyCard}>
//             <span>02</span>

//             <div className={styles.whyIcon}>
//               ⚙
//             </div>

//             <h3>Advanced Technology</h3>

//             <p>
//               We use modern control systems and reliable
//               components for smooth performance.
//             </p>
//           </div>


//           <div className={styles.whyCard}>
//             <span>03</span>

//             <div className={styles.whyIcon}>
//               ★
//             </div>

//             <h3>Quality Engineering</h3>

//             <p>
//               Our experienced team focuses on quality at every
//               stage of your elevator project.
//             </p>
//           </div>


//           <div className={styles.whyCard}>
//             <span>04</span>

//             <div className={styles.whyIcon}>
//               24
//             </div>

//             <h3>24/7 Support</h3>

//             <p>
//               Our service team is available to provide reliable
//               support whenever you need us.
//             </p>
//           </div>

//         </div>

//       </section>


//       {/* ================= PROCESS ================= */}
//       <section className={styles.processSection}>

//         <div className={styles.sectionHeading}>
//           <span className={styles.sectionLabel}>
//             OUR PROCESS
//           </span>

//           <h2>
//             Simple Process.
//             <span> Reliable Results.</span>
//           </h2>
//         </div>


//         <div className={styles.processGrid}>

//           <div>
//             <span>01</span>
//             <h3>Consultation</h3>
//             <p>
//               Understand your building requirements and project
//               requirements.
//             </p>
//           </div>

//           <div>
//             <span>02</span>
//             <h3>Planning & Design</h3>
//             <p>
//               Create the right elevator solution based on your
//               building and usage.
//             </p>
//           </div>

//           <div>
//             <span>03</span>
//             <h3>Installation</h3>
//             <p>
//               Professional installation carried out by trained
//               technicians.
//             </p>
//           </div>

//           <div>
//             <span>04</span>
//             <h3>Support</h3>
//             <p>
//               Continuous maintenance and after-sales support.
//             </p>
//           </div>

//         </div>

//       </section>


//       {/* ================= CTA ================= */}
//       <section className={styles.cta}>

//         <div>
//           <span>
//             READY TO START YOUR PROJECT?
//           </span>

//           <h2>
//             Let's Find The Right
//             <br />
//             <strong>Elevator For You.</strong>
//           </h2>

//           <p>
//             Speak with our experts and get a solution designed
//             specifically for your building.
//           </p>
//         </div>

//         <button>
//           Get A Free Quote →
//         </button>

//       </section>

//     </div>
//   );
// };

// export default Services;




import React from "react";
import styles from "./Services.module.css";

import passengerImg from "../../assets/Liftimages/images.png";
import homeImg from "../../assets/Liftimages/images1.png";
import hospitalImg from "../../assets/Liftimages/images.png";
import goodsImg from "../../assets/Liftimages/images1.png";

const services = [
  {
    id: 1,
    number: "01",
    title: "Passenger Elevators",
    shortTitle: "Passenger Lift",
    description:
      "Safe, smooth and efficient passenger elevators designed for residential, commercial and high-rise buildings.",
    image: passengerImg,
    features: [
      "Smooth & quiet operation",
      "Modern cabin designs",
      "Energy efficient technology",
      "Advanced safety systems",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Home Elevators",
    shortTitle: "Home Lift",
    description:
      "Premium home elevator solutions that combine comfort, elegance and safety for modern homes and villas.",
    image: homeImg,
    features: [
      "Compact installation",
      "Luxury cabin options",
      "Low power consumption",
      "Easy operation",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Hospital Elevators",
    shortTitle: "Hospital Lift",
    description:
      "Specially designed elevators for hospitals and healthcare facilities with spacious cabins and reliable performance.",
    image: hospitalImg,
    features: [
      "Large cabin capacity",
      "Smooth starting & stopping",
      "Stretcher friendly design",
      "High safety standards",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Goods Elevators",
    shortTitle: "Goods Lift",
    description:
      "Heavy-duty goods elevators engineered to transport materials, equipment and products safely and efficiently.",
    image: goodsImg,
    features: [
      "Heavy load capacity",
      "Strong construction",
      "Industrial performance",
      "Durable components",
    ],
  },
];

const additionalServices = [
  {
    icon: "🔧",
    title: "Installation",
    description:
      "Professional elevator installation with accurate planning, testing and commissioning.",
  },
  {
    icon: "🛠️",
    title: "Maintenance & AMC",
    description:
      "Regular preventive maintenance and AMC services to keep your elevator safe and reliable.",
  },
  {
    icon: "⚙️",
    title: "Modernization",
    description:
      "Upgrade existing elevators with modern technology, safety systems and improved performance.",
  },
  {
    icon: "🚨",
    title: "Repair & Breakdown",
    description:
      "Quick and professional breakdown support to reduce downtime and restore elevator operation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Site Inspection",
    description:
      "Our experts inspect your building and understand your elevator requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We create the right elevator solution based on building structure and usage.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our trained team installs and configures the elevator using quality components.",
  },
  {
    number: "04",
    title: "Testing & Handover",
    description:
      "Every system is thoroughly tested before final commissioning and handover.",
  },
];

const Services = () => {
  return (
    <div className={styles.servicesPage}>

      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroTag}>
            OUR SERVICES
          </span>

          <h1>
            Complete Elevator
            <span> Solutions</span>
          </h1>

          <p>
            From installation to maintenance, OM Elevators provides
            complete elevator solutions designed around safety,
            performance and reliability.
          </p>

          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>›</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className={styles.introSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span>WHAT WE OFFER</span>

            <h2>
              Professional Elevator
              <strong> Services</strong>
            </h2>

            <p>
              We deliver dependable elevator services for residential,
              commercial, industrial and healthcare buildings. Our
              experienced team focuses on quality installation,
              reliable maintenance and long-term elevator performance.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          MAIN SERVICES
      ========================================= */}

      <section className={styles.mainServices}>
        <div className={styles.container}>

          <div className={styles.serviceGrid}>

            {services.map((service, index) => (
              <article
                className={`${styles.serviceCard} ${
                  index % 2 !== 0 ? styles.reverseCard : ""
                }`}
                key={service.id}
              >

                <div className={styles.serviceImage}>
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>
                </div>

                <div className={styles.serviceContent}>

                  <span className={styles.serviceSmallTitle}>
                    {service.shortTitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={styles.serviceButton}
                  >
                    Get a Quote
                    <span>→</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          ADDITIONAL SERVICES
      ========================================= */}

      <section className={styles.additionalSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span>MORE SERVICES</span>

            <h2>
              Complete Support
              <strong> For Your Elevator</strong>
            </h2>

            <p>
              Our relationship with customers doesn't end after
              installation. We provide complete after-sales support
              throughout the life of your elevator.
            </p>
          </div>

          <div className={styles.additionalGrid}>

            {additionalServices.map((service, index) => (
              <div
                className={styles.additionalCard}
                key={index}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>

                <span className={styles.cardNumber}>
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contact">
                  Learn More →
                </a>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className={styles.whySection}>
        <div className={styles.container}>

          <div className={styles.whyWrapper}>

            <div className={styles.whyContent}>

              <span className={styles.sectionLabel}>
                WHY OM ELEVATORS
              </span>

              <h2>
                Safety & Quality
                <strong> Come First</strong>
              </h2>

              <p>
                We believe every elevator should provide a safe,
                comfortable and reliable journey. Our team combines
                technical expertise with quality components and
                professional service.
              </p>

              <div className={styles.whyList}>

                <div>
                  <span>✓</span>
                  <section>
                    <h4>Experienced Professionals</h4>
                    <p>
                      Skilled engineers and technicians with
                      practical industry experience.
                    </p>
                  </section>
                </div>

                <div>
                  <span>✓</span>
                  <section>
                    <h4>Quality Components</h4>
                    <p>
                      Reliable components selected for long-term
                      performance and durability.
                    </p>
                  </section>
                </div>

                <div>
                  <span>✓</span>
                  <section>
                    <h4>Customer Focused</h4>
                    <p>
                      Solutions designed around your building,
                      requirements and budget.
                    </p>
                  </section>
                </div>

              </div>

            </div>

            <div className={styles.statsBox}>

              <div className={styles.statItem}>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>

              <div className={styles.statItem}>
                <strong>500+</strong>
                <span>Elevators Installed</span>
              </div>

              <div className={styles.statItem}>
                <strong>24/7</strong>
                <span>Service Support</span>
              </div>

              <div className={styles.statItem}>
                <strong>100%</strong>
                <span>Safety Focus</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================= */}

      <section className={styles.processSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span>OUR PROCESS</span>

            <h2>
              How We
              <strong> Work</strong>
            </h2>

            <p>
              A simple and professional process from your first
              enquiry to successful elevator installation.
            </p>
          </div>

          <div className={styles.processGrid}>

            {processSteps.map((step) => (
              <div
                className={styles.processCard}
                key={step.number}
              >

                <div className={styles.processNumber}>
                  {step.number}
                </div>

                <div className={styles.processLine}></div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay}></div>

        <div className={styles.ctaContent}>

          <span>READY TO GET STARTED?</span>

          <h2>
            Let's Build a Better
            <strong> Vertical Journey</strong>
          </h2>

          <p>
            Talk to our elevator experts today and find the right
            solution for your building.
          </p>

          <div className={styles.ctaButtons}>

            <a
              href="/contact"
              className={styles.primaryButton}
            >
              Get a Free Quote
              <span>→</span>
            </a>

            <a
              href="tel:+919876543210"
              className={styles.phoneButton}
            >
              📞 +91 98765 43210
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
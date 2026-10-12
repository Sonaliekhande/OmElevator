import passengerImage from "../assets/Liftimages/images.png";
import homeImage from "../assets/Liftimages/images1.png";
import hospitalImage from "../assets/Liftimages/images2.png";

const servicesData = [
  {
    id: 1,
    slug: "passenger",
    title: "Passenger Elevators",
    name: "Passenger Lift",
    category: "Passenger",
    image: passengerImage,
    description:
      "Safe, smooth and efficient passenger elevators for residential, commercial and high-rise buildings.",
    features: [
      "Smooth and quiet operation",
      "Modern cabin designs",
      "Energy-efficient technology",
      "Advanced safety systems",
    ],
  },
  {
    id: 2,
    slug: "hospital",
    title: "Hospital Elevators",
    name: "Hospital Lift",
    category: "Healthcare",
    image: hospitalImage,
    description:
      "Dependable elevators designed for hospitals and healthcare facilities, with space for beds and medical teams.",
    features: [
      "Spacious, stretcher-friendly cabins",
      "Smooth starting and stopping",
      "Reliable operation",
      "Safety-focused design",
    ],
  },
  {
    id: 3,
    slug: "goods",
    title: "Goods Elevators",
    name: "Goods Lift",
    category: "Industrial",
    image: homeImage,
    description:
      "Heavy-duty elevators for moving materials, equipment and products in commercial and industrial buildings.",
    features: [
      "Designed for goods transportation",
      "Durable construction",
      "Practical loading access",
      "Reliable everyday operation",
    ],
  },
  {
    id: 4,
    slug: "home",
    title: "Home Elevators",
    name: "Home Lift",
    category: "Residential",
    image: homeImage,
    description:
      "Comfortable home elevator solutions designed to fit residential spaces and make everyday movement easier.",
    features: [
      "Space-conscious configurations",
      "Residential cabin options",
      "Simple operation",
      "Safety-focused design",
    ],
  },
  {
    id: 5,
    slug: "capsule",
    title: "Capsule Elevators",
    name: "Capsule Lift",
    category: "Panoramic",
    image: passengerImage,
    description:
      "Panoramic elevator solutions that combine passenger transport with a distinctive architectural look.",
    features: [
      "Panoramic cabin options",
      "Contemporary appearance",
      "Suitable for visible locations",
      "Designed around the building",
    ],
  },
  {
    id: 6,
    slug: "hydraulic",
    title: "Hydraulic Elevators",
    name: "Hydraulic Lift",
    category: "Elevator Systems",
    image: hospitalImage,
    description:
      "Hydraulic elevator systems planned around the building layout, intended use and project requirements.",
    features: [
      "Flexible layout planning",
      "Suitable for selected low-rise applications",
      "Options for different cabin sizes",
      "Professional installation support",
    ],
  },
  {
    id: 7,
    slug: "freight",
    title: "Freight Elevators",
    name: "Freight Lift",
    category: "Industrial",
    image: homeImage,
    description:
      "Freight elevator solutions for moving heavy loads between floors in warehouses and industrial buildings.",
    features: [
      "Load-focused configurations",
      "Durable materials",
      "Practical access for loading",
      "Designed for demanding use",
    ],
  },
  {
    id: 8,
    slug: "machine-room",
    title: "Machine Room Elevators",
    name: "Machine Room Lift",
    category: "Elevator Systems",
    image: passengerImage,
    description:
      "Elevator systems with dedicated machine-room layouts, coordinated with the building's available space.",
    features: [
      "Dedicated equipment space",
      "Building-specific planning",
      "Options for different applications",
      "Serviceable system layout",
    ],
  },
  {
    id: 9,
    slug: "dumbwaiter",
    title: "Dumbwaiter Elevators",
    name: "Dumbwaiter Lift",
    category: "Service",
    image: hospitalImage,
    description:
      "Compact service lifts for moving smaller goods between floors in homes, restaurants and commercial spaces.",
    features: [
      "Compact transport solution",
      "Useful for kitchens and service areas",
      "Convenient floor-to-floor movement",
      "Planned to suit the building",
    ],
  },
  {
    id: 10,
    slug: "glass",
    title: "Glass Elevators",
    name: "Glass Lift",
    category: "Panoramic",
    image: passengerImage,
    description:
      "Glass elevator options that bring natural light and an open visual feel to suitable building interiors.",
    features: [
      "Glass cabin or shaft options",
      "Contemporary appearance",
      "Building-specific configuration",
      "Passenger comfort and safety",
    ],
  },
  {
    id: 11,
    slug: "car",
    title: "Car Elevators",
    name: "Car Lift",
    category: "Automotive",
    image: homeImage,
    description:
      "Vehicle elevator solutions for parking buildings, showrooms and other sites with floor-to-floor vehicle access needs.",
    features: [
      "Vehicle-focused platform options",
      "Planned for site access requirements",
      "Space-conscious parking layouts",
      "Safety-focused operation",
    ],
  },
  {
    id: 12,
    slug: "escalator",
    title: "Escalators",
    name: "Escalator",
    category: "Moving Walkways",
    image: hospitalImage,
    description:
      "Escalator solutions for moving people between levels in busy commercial and public spaces.",
    features: [
      "Continuous movement between floors",
      "Options for public-use settings",
      "Planned around building traffic",
      "Professional installation support",
    ],
  },
];

export default servicesData;

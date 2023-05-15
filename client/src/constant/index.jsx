import { Link } from "react-router-dom";

export const footerNavigation = [
  {
    label: "About Us",
    slug: "about-us",
  },
  {
    label: "Contact Us",
    slug: "contact-us",
  },
  {
    label: "Terms & Conditions",
    slug: "terms-and-conditions",
  },
  {
    label: "Privacy Policy",
    slug: "privacy-policy",
  },
];

export const headerNavigation = [
  {
    label: <Link to="/">The Consumers</Link>,
    key: "/",
  },
  {
    label: <Link to="/about-us">The LGU</Link>,
    key: "/about-us",
  },
  {
    label: <Link to="/how-it-works">The Team</Link>,
    key: "/how-it-works",
  },
];

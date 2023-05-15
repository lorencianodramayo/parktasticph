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
    label: <Link to="/the-lgu">The LGU</Link>,
    key: "/the-lgu",
  },
  {
    label: <Link to="/the-business">The Business</Link>,
    key: "/the-business",
  },
  {
    label: <Link to="/the-team">The Team</Link>,
    key: "/the-team",
  },
];

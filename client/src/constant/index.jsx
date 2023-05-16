import { Link } from "react-router-dom";

export const footerNavigation = [
  {
    label: <Link to="/the-team">About Us</Link>,
    slug: "the-team",
    key: "/the-team",
  },
  {
    label: <Link to="/contact-us">Contact Us</Link>,
    slug: "contact-us",
    key: "/contact-us",
  },
  {
    label: <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>,
    slug: "terms-and-conditions",
    key: "/terms-and-conditions",
  },
  {
    label: <Link to="/privacy-policy">Privacy Policy</Link>,
    slug: "privacy-policy",
    key: "/privacy-policy",
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

import { Link } from "react-router-dom";

import styles from "./Navbar.styles.js";
import logo from "../../assets/logo.png";

function NavBrand({ onClose, className = "" }) {
  return (
    <Link to="/" className={`block ${className}`} onClick={onClose}>
      <img
        src={logo}
        alt="Your Logo"
        className={`${styles.nanLinkIcon} h-12 w-auto max-h-full max-w-full object-contain`}
      />
    </Link>
  );
}

export default NavBrand;

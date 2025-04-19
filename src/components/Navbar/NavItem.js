import { Link } from "react-router-dom";
import styles from "./Navbar.styles.js";

function NavItem({ href, children, variant, onClose }) {
  const isExternalLink =
    href.startsWith("http://") || href.startsWith("https://");

  const linkClass = variant === "social" ? styles.socialLink : styles.navLink;

  if (isExternalLink) {
    return (
      <a
        href={href}
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={linkClass} onClick={onClose}>
      {children}
    </Link>
  );
}

export default NavItem;

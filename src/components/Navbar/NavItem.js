import { Link } from "react-router-dom";

import styles from "./Navbar.styles.js";
import { scrollToTop } from "../../utils/scrollToTop.js";

function NavItem({ href, children, variant, onClose }) {
  function handleClick() {
    onClose();
    scrollToTop()
  }

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
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={linkClass} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default NavItem;

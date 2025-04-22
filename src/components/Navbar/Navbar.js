import { useState } from "react";

import styles from "./Navbar.styles.js";
import NavBrand from "./NavBrand.js";
import NavMenu from "./NavMenu.js";
import NavItem from "./NavItem.js";
import MobileMenu from "./MobileMenu.js";
import LinkedinIcon from "./LinkedinIcon.js";
import GithubIcon from "./GithubIcon.js";
import MobileMenuButton from "./MobileMenuButton.js";
import ResumeMenu from "./ResumeMenu.js";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <NavBrand />
          <NavMenu>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <ResumeMenu />
          </NavMenu>

          <div className={styles.socialLinks}>
            <LinkedinIcon />
            <GithubIcon />
          </div>

          <div className={styles.mobileNav}>
            <MobileMenuButton
              onClick={toggleMobileMenu}
              className={styles.mobileNavButton}
              iconClassName={styles.mobileNavIcon}
            />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}

export default Navbar;

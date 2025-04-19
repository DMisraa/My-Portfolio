import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.styles.js";
import NavItem from "./NavItem.js";
import LinkedinIcon from "./LinkedinIcon.js";
import GithubIcon from "./GithubIcon.js";
import ResumeMenu from "./ResumeMenu.js";

function MobileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />

          {/* Slide menu */}
          <motion.div
            key="menu"
            ref={menuRef}
            className={styles.mobileMenu}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <div className={styles.mobileMenuContent}>
              {/* Top Row */}
              <div className={styles.mobileMenuTopRow}>
                <LinkedinIcon onClose={onClose} />
                <GithubIcon onClose={onClose} />
                
              </div>

              {/* Nav Items */}
              <div className={styles.mobileMenuNavList}>
                <div className={styles.mobileNavItemWrapper}>
                  <NavItem href="/about" onClose={onClose}>
                    About
                  </NavItem>
                </div>
                <div className={styles.mobileNavItemWrapper}>
                  <ResumeMenu onClose={onClose} />
                </div>
                <div className={styles.mobileNavItemWrapper}>
                  <NavItem href="/contact" onClose={onClose}>
                    Contact
                  </NavItem>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;

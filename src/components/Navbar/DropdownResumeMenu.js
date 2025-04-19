import { useState, useRef, useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile.js";
import styles from "./Navbar.styles.js";

function DropdownMenu({ trigger, children }) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile(); 
  const ref = useRef(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMouseEnter() {
    if (!isMobile) {
      clearTimeout(closeTimeout.current);
      setOpen(true);
    }
  }

  function handleMouseLeave() {
    if (!isMobile) {
      closeTimeout.current = setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  }

  return (
    <div
      ref={ref}
      className={styles.dropdownWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${styles.dropdownTrigger} w-full justify-center ${isMobile ? "ml-2" : ""}`}
      >
        <span className="flex items-center gap-1">{trigger}</span>
      </button>

      {open && (
        <div
          className={isMobile ? styles.mobileDropdownMenu : styles.dropdownMenu}
        >
          {children(setOpen)}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./HeroHeader.styles.js";
import BackendSection from "./BackendSection.js";
import FrontendSection from "./FrontendSection.js";
import HeroImage from "./HeroImage.js";

function HeroHeader() {
  const [show, setShow] = useState(false);
  const [mouseX, setMouseX] = useState(0.5);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShow(false);
      const timeout = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  useEffect(() => {
    function handleMouseMove(e) {
      const value = e.clientX / window.innerWidth;
      setMouseX(value);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.header}>
      {/* Background Splashes */}
      <div className={styles.bgSplash}>
        <div
          className={styles.leftSplash}
          style={{
            background: "radial-gradient(circle at center, #8b5cf6, transparent 70%)",
            opacity: 1 - mouseX,
            transform: `translateX(-30%) scale(${1 + (1 - mouseX) * 0.3})`,
          }}
        />
        <div
          className={styles.rightSplash}
          style={{
            background: "radial-gradient(circle at center, #60a5fa, transparent 70%)",
            opacity: mouseX,
            transform: `translateX(30%) scale(${1 + mouseX * 0.3})`,
          }}
        />
      </div>
   
        <div className={styles.contentWrapper}>
          <BackendSection mouseX={mouseX} />
          <HeroImage mouseX={mouseX} show={show} />
          <FrontendSection mouseX={mouseX} />
        </div>

    </section>
  );
}

export default HeroHeader;

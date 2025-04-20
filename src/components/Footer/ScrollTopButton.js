import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

import styles from "./Footer.styles.js";
import { scrollToTop } from "../../utils/scrollToTop.js";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arrowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 0.7, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    hover: { scale: 1.1, opacity: 1 },
    tap: { scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          onClick={scrollToTop}
          className={styles.scrollTopAnimatiuon}
          title="Scroll to Top"
        >
          <ArrowUpCircle className="w-6 h-6 text-black" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopButton;

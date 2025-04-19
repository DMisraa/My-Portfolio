import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
          className="fixed bottom-5 right-5 z-10 cursor-pointer rounded-full bg-white/70 shadow-md transition-all duration-300 flex items-center justify-center w-10 h-10"
          title="Scroll to Top"
        >
          <ArrowUpCircle className="w-6 h-6 text-black" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopButton;

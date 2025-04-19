import { Link } from "react-router";
import useIsMobile from "../../hooks/useIsMobile.js"; // Import the custom hook
import styles from "./HeroHeader.styles.js";
import logo from "../../assets/logo.png";

function HeroImage({ mouseX, show }) {
  const isMobile = useIsMobile(); // Get the mobile state using the custom hook

  return (
    <div
      className={styles.imageWrapper}
      style={{
        transform: `translateX(${isMobile ? (0.5 - mouseX) * 60 : (-0.15 - mouseX) * 60}px) scale(${show ? 1 : 0.75})`,
        opacity: show ? 1 : 0,
        transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
      }}
    >
      <div className="relative w-full h-full">
        <Link to="/about" className={styles.link}>
          <img src={logo} alt="D.M Logo" className={styles.image} />
        </Link>
        <div className={styles.imageBg}></div>
      </div>
    </div>
  );
}

export default HeroImage;

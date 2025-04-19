import linkedinIcon from "../../assets/linkedinIcon.webp";
import styles from "./Navbar.styles.js";


function LinkedinIcon({ onClose }) {
  function handleClick(e) {
    e.preventDefault(); 
    window.open("https://www.linkedin.com/in/daniel-menahem", "_blank"); 
    
    if (onClose) {
      onClose(); 
    }
  }

  return (
    <a href="https://www.linkedin.com/in/daniel-menahem" onClick={handleClick}  className="inline-block">
      <img src={linkedinIcon} alt="LinkedIn" className={`${styles.nanLinkIcon} w-9 h-9 mt-[2px]`} />
    </a>
  );
}

export default LinkedinIcon
import githubIcon from "../../assets/githubIcon.png";
import styles from "./Navbar.styles.js";

function GithubIcon({ onClose }) {
  function handleClick(e) {
    e.preventDefault();
    window.open("https://github.com/DMisraa", "_blank");

    if (onClose) {
      onClose();
    }
  }

  return (
    <a
      href="https://github.com/DMisraa"
      onClick={handleClick}
      className="inline-block"
    >
      <img
        src={githubIcon}
        alt="GitHub"
        className={`${styles.nanLinkIcon} w-10 h-10`}
      />
    </a>
  );
}

export default GithubIcon;

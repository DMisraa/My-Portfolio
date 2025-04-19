import styles from "./About.styles.js";
import profilePic from "../../assets/profilePic.jpg";

function AboutSection({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>✨ About Me </h2>
        <div className={styles.contentWrapper}>
          <div className={styles.avatarWrapper}>
            <img
              src={profilePic}
              alt="Daniel Menahem"
              className={styles.avatar}
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

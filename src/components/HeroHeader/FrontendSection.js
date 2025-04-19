import styles from "./HeroHeader.styles.js";

function FrontendSection({ mouseX }) {
  return (
    <div
      className={styles.leftSection}
      style={{
        opacity: Math.max(0, Math.min(1, 1 - (1 - mouseX) * 1.2)),
        transform: `scale(${1 + mouseX * 0.15})`,
      }}
    >
      <h1 className={styles.heading}>Client-Side</h1>
      <p className={styles.paragraph}>
        Expert in building engaging and interactive user interfaces with
        JavaScript, React, and CSS.
      </p>
    </div>
  );
}

export default FrontendSection;

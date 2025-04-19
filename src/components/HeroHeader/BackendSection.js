import styles from "./HeroHeader.styles.js";

function BackendSection({ mouseX }) {
  return (
    <div
      className={styles.leftSection}
      style={{
        opacity: Math.max(0, Math.min(1, 1 - mouseX * 1.2)),
        transform: `scale(${1 + (1 - mouseX) * 0.15})`,
      }}
    >
      <h1 className={styles.heading}>Server-Side</h1>
      <p className={styles.paragraph}>
        Skilled in backend development using Node.js, Express, MongoDB, and
        creating scalable APIs.
      </p>
    </div>
  );
}

export default BackendSection;

import styles from "./Projects.styles.js"; 

function ProjectCard({ project }) {
    return (
      <div className={styles.card}>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <div className={styles.mediaWrapper}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
            <video
              className={styles.video}
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </a>
  
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDescription}>
            {project.description}
          </p>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  
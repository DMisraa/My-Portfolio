import projectsList from "../../utils/projects.js";
import styles from "./Projects.styles.js";
import ProjectCard from "./ProjectCard.js";

function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Some of my latest work</h2>

        <div className={styles.grid}>
          {projectsList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

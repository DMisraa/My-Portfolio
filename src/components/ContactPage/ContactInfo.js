import styles from "./Contact.styles.js";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.infoHeading}>Reach me at</h2>
      <ul className={styles.contactList}>
        <li>
          <Mail className={styles.icon} />
          <a href="mailto:daniel@example.com">danielmenahem90@gmail.com</a>
        </li>
        <li>
          <Linkedin className={styles.icon} />
          <a
            href="https://www.linkedin.com/in/danielmenahem/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <Github className={styles.icon} />
          <a
            href="https://github.com/DMisraa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </li>
        <li>
          <Phone className={styles.icon} />
          <a
            href="https://wa.me/972544349661"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </ul>
    </div>
  );
}

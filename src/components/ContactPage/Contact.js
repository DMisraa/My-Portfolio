import styles from "./Contact.styles.js";
import ContactInfo from "./ContactInfo.js";
import LocationMap from "./LocationMap.js";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Let’s Connect</h1>
      <p className={styles.subheading}>
        Don’t worry, I check my inbox more often than I check my fridge.
      </p>

      <div className={styles.contactContent}>
        <ContactInfo />
        <LocationMap />
      </div>
    </div>
  );
}

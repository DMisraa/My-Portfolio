import styles from "./Contact.styles.js";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <div className={styles.locationBox}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.740271066254!2d34.76403871515776!3d32.085299181173075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4cda6ec29a0d%3A0xb4933952b236a6bb!2sTel%20Aviv!5e0!3m2!1sen!2sil!4v1689601956204!5m2!1sen!2sil"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Daniel's Location"
        ></iframe>
      </div>
      <p className={styles.locationText}>
        <MapPin className="inline-block w-4 h-4 mr-1 text-blue-500" />
        <strong>Based in Tel Aviv</strong>
      </p>
    </div>
  );
}

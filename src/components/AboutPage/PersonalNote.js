import { motion } from "framer-motion";
import styles from './About.styles.js'

function PersonalNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.personalNote}
    >
      <p className={styles.personalLine1}>
        “Outside of coding, I’m usually playing chess, experimenting with side
        projects, or creating games my friends get addicted to.”
      </p>
      <p className={styles.personalLine2}>
        I really care about the little things — not just in code, but in how
        people actually experience what we build. That’s where great products
        come from.
      </p>
    </motion.div>
  );
}

export default PersonalNote;

import { motion } from "framer-motion";
import styles from './About.styles.js'

function QAItem({ question, answer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className={styles.qaBox}
    >
      <h3 className={styles.question}>{question}</h3>
      <p className={styles.answer}>{answer}</p>
    </motion.div>
  );
}

export default QAItem;

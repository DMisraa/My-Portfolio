import { useState } from "react";
import nameInputPic from "../../assets/name_input_pic.png";
import emailPic from "../../assets/email_pic.png";
import styles from "./Footer.styles.js";
import { handleFooterFormSubmit } from "../../utils/handleFooterFormSubmit.js";

function FooterForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      await handleFooterFormSubmit({ formData });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }

    event.target.reset();
    setIsLoading(false);
  }

  return (
    <>
      <p className={styles.description}>
        Got a question, idea, or just want to say hi? <br />
        Drop me a message, I’d love to hear from you! <br />
        Let’s make something awesome together.
      </p>

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.inputWrapper}>
            <div className="relative">
              <img
                src={nameInputPic}
                alt="name icon"
                className={styles.inputIcon}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={styles.input}
              />
            </div>

            <div className="relative">
              <img
                src={emailPic}
                alt="email icon"
                className={styles.inputIcon}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.textareaWrapper}>
            <textarea
              name="message"
              placeholder="Your message.."
              required
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.submitSection}>
          <p className={styles.submitText}>Ready to connect? Hit submit!</p>
          <button
            disabled={isLoading}
            type="submit"
            className={`${styles.submitButtonBase} ${
              isLoading ? styles.submitButtonLoading : styles.submitButtonActive
            }`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default FooterForm;

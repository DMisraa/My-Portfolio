import logo from "../../assets/logo.png";
import styles from "./Footer.styles.js";
import FooterForm from "./FooterForm.js";
import ScrollTopButton from "./ScrollTopButton.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="D.M logo" className={styles.logoImg} />
        </div>

        <div className="flex-1 w-full">
          <FooterForm />
        </div>

        <p className={styles.copyright}>©{currentYear} D.M Portfolio.</p>
      </div>

      <ScrollTopButton />
    </div>
  );
}

export default Footer;

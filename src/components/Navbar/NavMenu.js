import styles from './Navbar.styles.js';

function NavMenu({ children }) {
  return (
    <nav className={styles.nav}>
      {children}
    </nav>
  );
};

export default NavMenu;
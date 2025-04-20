import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import CV from "../../assets/Daniel_Menahem_CV.pdf";
import styles from "./Navbar.styles.js";
import DropdownMenu from "./DropdownResumeMenu.js";
import { scrollToTop } from "../../utils/scrollToTop.js";

function ResumeMenu({ onClose }) {

  function handleViewResumeOnClick(setOpen) {   
    setOpen(false)
    scrollToTop()
    
    if (onclose) {
      onClose()
   }
  }

  return (
    <DropdownMenu
      trigger={
        <>
          Resume
          <ChevronDown className={styles.dropdownIcon} />
        </>
      }
    >
      {(setOpen) => (
        <>
          <Link
            to="/resume"
            className={styles.dropdownItem}
            onClick={() => handleViewResumeOnClick(setOpen)}
          >
            View Resume
          </Link>
          <a
            href={CV}
            download
            className={styles.dropdownItem} 
            onClick={() => setOpen(false)}
          >
            Download Resume
          </a>
        </>
      )}
    </DropdownMenu>
  );
}

export default ResumeMenu

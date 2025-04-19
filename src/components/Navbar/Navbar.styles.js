const header = "bg-gray-100 py-2 shadow-md sticky top-0 z-50";

const container = "container mx-auto flex items-center justify-between px-4";

const logo = "flex items-center h-8 w-auto md:h-20 md:w-auto overflow-hidden";

const logoImg = "transition transform duration-300 hover:scale-125 cursor-pointer";

const nav = "hidden md:flex space-x-4 text-gray-600";

const navLink = "hover:text-gray-800";

const nanLinkIcon = "transform transition-transform duration-200 ease-in-out hover:scale-110"

const socialLinks = "hidden md:flex space-x-2";

const socialLink = "hover:opacity-75 transition-opacity";

const dropdownWrapper = "relative";

const dropdownTrigger = "flex items-center space-x-1 hover:text-gray-800";

const dropdownIcon = "w-4 h-4 text-gray-600";

const dropdownItem = "block px-4 py-2 text-gray-700 hover:bg-gray-100";

const dropdownMenu = "absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50";

const mobileNav = "md:hidden";

const mobileNavButton = "text-gray-600 hover:text-gray-800 focus:outline-none";

const mobileNavIcon = "h-6 w-6 fill-current";

const mobileMenuOverlay = "fixed top-0 left-0 w-full h-full bg-gray-200 z-40 opacity-50";

const mobileMenu = "fixed top-26 left-0 w-full max-h-[90vh] z-50 bg-gray-50 text-gray-800";

const mobileMenuContent = "p-6";

const mobileSocialLinks = "mt-4 flex flex-col gap-4";

const mobileDropdownMenu = "absolute left-1/2 ml-36 top-0 w-40 -translate-x-1/2 bg-white border border-gray-200 rounded-md shadow-lg z-50";

const mobileMenuTopRow = "flex justify-around items-center mb-6";

const mobileMenuNavList = "flex flex-col items-center justify-center text-lg text-gray-800 mt-6 divide-y divide-gray-400";

const mobileNavItemWrapper = "w-full py-4 text-center";

export const mobileLogoWrapper = {
  '& img': {
    width: '150px',
    height: 'auto',
    maxWidth: 'none',
  },
};

const styles = {
  header,
  container,
  logo,
  logoImg,
  nav,
  navLink,
  socialLinks,
  socialLink,
  dropdownWrapper,
  dropdownTrigger,
  dropdownIcon,
  dropdownMenu,
  mobileNav,
  mobileNavButton,
  mobileNavIcon,
  mobileMenuOverlay,
  mobileMenu,
  mobileMenuContent,
  mobileSocialLinks,
  mobileDropdownMenu,
  dropdownItem,
  mobileMenuTopRow,
  mobileMenuNavList,
  mobileNavItemWrapper,
  mobileLogoWrapper,
  nanLinkIcon,
};

export default styles;

function MobileMenuButton({ onClick, className = "", iconClassName = "" }) {
    return (
      <button className={className} onClick={onClick}>
        <svg className={iconClassName} viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }
  
  export default MobileMenuButton;
  
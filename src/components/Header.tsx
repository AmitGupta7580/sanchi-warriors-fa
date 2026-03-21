type NavItem = {
  href: string;
  label: string;
};

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  navItems: NavItem[];
};

function Header({ menuOpen, onToggleMenu, onCloseMenu, navItems }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div className="brand-logos">
          <a href="#home" className="logo" onClick={onCloseMenu}>
            <img src="/sanchi-warriors-fa.png" alt="Sanchi Warriors Football Academy logo" />
          </a>
          <span className="logo-separator" aria-hidden="true"></span>
          <a href="#home" className="logo" onClick={onCloseMenu}>
            <img
              src="/Madhya_Pradesh_Football_Association.svg"
              alt="Madhya Pradesh Football Association logo"
            />
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          Menu
        </button>
        <nav className={`site-nav${menuOpen ? " open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onCloseMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

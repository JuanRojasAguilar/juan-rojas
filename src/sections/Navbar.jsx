import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(
        ({id, href, name}) => (
          <li key={id} className="nav-li">
            <a
              href={href}
              className="nav-li_a"
              onClick={() => {}}
            >
              {name}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  }

  const Styles = {
    header: `
      fixed top-0 left-0 right-0
      z-50 bg-black/90
    `,
    menuContainer: `
      flex justify-between items-center
      py-5 mx-auto
      c-space
    `,
    name: `
      text-neutral-400 font-bold text-xl
      hover:text-white transition-colors
    `,
    menuButton: `
      text-neutral-400 hover:text-white
      focus:outline-none sm:hidden flex
    `
  }

	return (
		<header className={Styles.header}>
      <div className="max-w-7xl mx-auto">
        <div className={Styles.menuContainer}>
          <a href="/" className={Styles.name}>Juan D. Rojas</a>
          <button
            onClick={toggleMenu}
            className={Styles.menuButton}
            aria-label="Toggle menu"
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
		</header>
	);
};

export default Navbar;
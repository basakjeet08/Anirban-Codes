import React, { useState, useEffect, useRef } from "react";
import { bodyStyles, mainHeadingStyles } from "../styles";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";

// Each Navigation List Item is created by this function
const NavItem = ({ item: { id, title }, onClick }) => (
  <a href={id}>
    <li
      className={`p-2 ${bodyStyles} text-center rounded-lg cursor-pointer hover:bg-primary active:opacity-30 transition-all duration-300`}
      onClick={onClick}
    >
      {title}
    </li>
  </a>
);

const Header = ({ scrollContainerRef }) => {
  // Navigation Links or Sections
  const menuItems = [
    { id: "#home", title: "Home" },
    { id: "#experience", title: "Experience" },
    { id: "#project", title: "Project" },
    { id: "#social", title: "Social" },
    { id: "#contact", title: "Contact" },
  ];

  // Menu State Variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const onNavItemClick = () => {
    setIsMenuOpen(false);
  };

  // Use Effect to monitor and collapse menu if the user scrolls or clicks outside
  useEffect(() => {
    // Scroll Handler
    const handleScroll = () => setIsMenuOpen(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Outside Click Handler
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="p-4 flex flex-row g-4 justify-between items-center bg-card shadow-lg shadow-primary">
      {/* Logo or Website Name */}
      <h1 className={mainHeadingStyles}>Anirban Codes</h1>

      {/* Menu UI for Mobile Devices */}
      <nav className="md:hidden" ref={menuRef}>
        {/* Icon according to the nav menu state */}
        {isMenuOpen ? (
          <IoIosCloseCircleOutline
            className="text-primary"
            onClick={toggleMenu}
          />
        ) : (
          <TiThMenu className="text-primary" onClick={toggleMenu} />
        )}

        {/* If the menu is open then we show the menu items */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-0 w-full p-4 bg-card flex flex-col shadow-lg shadow-primary">
            {menuItems.map((item, index) => (
              <NavItem key={index} item={item} onClick={onNavItemClick} />
            ))}
          </ul>
        )}
      </nav>

      {/* Normal Navigation for Medium Devices (Tablet, Laptop) */}
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-4">
          {menuItems.map((item, index) => (
            <NavItem key={index} item={item} onClick={onNavItemClick} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

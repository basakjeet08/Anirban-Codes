import { useEffect, useRef, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { headerData } from "../constants/data";

const NavItem = ({ item: { id, title }, active, onClick }) => (
  <li>
    <a
      href={id}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={`block px-3 py-2 text-sm font-medium font-sans text-center rounded-lg cursor-pointer transition-all duration-300 ${
        active
          ? "text-white bg-white/10 ring-1 ring-primary/50 shadow-glow"
          : "text-white/70 hover:text-white hover:bg-white/5"
      }`}
    >
      {title}
    </a>
  </li>
);

const Header = ({ scrollContainerRef }) => {
  const { websiteName, menuItems } = headerData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const container = scrollContainerRef?.current;
    const sections = menuItems
      .map(({ id }) => ({ id, element: document.querySelector(id) }))
      .filter(({ element }) => element);

    const updateActiveSection = () => {
      const y = container?.scrollTop ?? window.scrollY ?? 0;
      const height = container?.clientHeight ?? window.innerHeight;
      const scrollHeight = container?.scrollHeight ?? document.documentElement.scrollHeight;
      setScrolled(y > 12);

      if (!sections.length) return;

      if (y <= 1) {
        setActiveId(sections[0].id);
        return;
      }

      if (scrollHeight > height && y + height >= scrollHeight - 1) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      const viewportTop = container?.getBoundingClientRect().top ?? 0;
      const activationLine = viewportTop + Math.min(height * 0.25, 160);
      let activeSection = sections[0];
      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= activationLine) {
          activeSection = section;
        }
      }
      setActiveId(activeSection.id);
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
      updateActiveSection();
    };
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const resizeObserver = new ResizeObserver(updateActiveSection);
    if (container) resizeObserver.observe(container);
    sections.forEach(({ element }) => resizeObserver.observe(element));
    window.addEventListener("resize", updateActiveSection);

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateActiveSection);
      resizeObserver.disconnect();
    };
  }, [scrollContainerRef, menuItems]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/10 shadow-glow"
          : "bg-ink/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-row gap-4 justify-between items-center">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary via-[#8b5cf6] to-accent grid place-items-center font-display font-bold text-white shadow-glow group-hover:shadow-glow-lg transition-shadow">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-white tracking-tight">
              {websiteName}
            </span>
            <span className="text-[11px] font-sans text-white/50">
              Full-Stack Software Engineer
            </span>
          </span>
        </a>

        <nav className="lg:hidden relative" ref={menuRef}>
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="p-2 rounded-lg glass text-white"
          >
            {isMenuOpen ? (
              <IoIosCloseCircleOutline className="h-5 w-5" />
            ) : (
              <TiThMenu className="h-5 w-5" />
            )}
          </button>

          {isMenuOpen && (
            <ul id="mobile-navigation" className="absolute top-12 right-0 w-56 p-2 z-50 glass rounded-2xl flex flex-col gap-1 shadow-glow-lg bg-ink/95">
              {menuItems.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  active={activeId === item.id}
                  onClick={closeMenu}
                />
              ))}
            </ul>
          )}
        </nav>

        <nav className="hidden lg:flex items-center gap-1">
          <ul className="flex flex-row gap-1">
            {menuItems.map((item, index) => (
              <NavItem key={index} item={item} active={activeId === item.id} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

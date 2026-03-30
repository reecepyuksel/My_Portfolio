import { useEffect, useState } from "react";
import "./navbar.css";
import { useLanguage } from "../../context/language-context";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const updateActiveSection = () => {
      const offset = 140;
      const scrollPosition = window.scrollY + offset;

      const currentSection =
        [...sections]
          .reverse()
          .find((section) => scrollPosition >= section.offsetTop) ||
        sections[0];

      if (currentSection?.id) {
        setActive(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const targetSection = document.getElementById(id);

    if (!targetSection) {
      return;
    }

    const offset = 110;
    const targetTop = Math.max(targetSection.offsetTop - offset, 0);

    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  const links = [
    { id: "home", label: t.navbar.home },
    { id: "about", label: t.navbar.about },
    { id: "projects", label: t.navbar.projects },
    { id: "skills", label: t.navbar.skills },
    { id: "contact", label: t.navbar.contact },
  ];

  return (
    <nav className="nav-glass">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={(event) => handleNavClick(event, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li className="nav-language-inline" aria-label="Language switcher">
          <button
            type="button"
            className={language === "tr" ? "active" : ""}
            onClick={() => setLanguage("tr")}
          >
            TR
          </button>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

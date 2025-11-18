import React from "react";
import "./NavBar.css"

interface NavBarProps {
  activeSection: "home" | "projects";
  setActiveSection: (section: "home" | "projects") => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="top-nav">
      <div className="nav-left">Matthew Zhang</div>

      <div className="nav-links">
        <button
          className={activeSection === "home" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActiveSection("home")}
        >
          Home
        </button>

        <button
          className={activeSection === "projects" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

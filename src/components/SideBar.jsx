import React, { useState } from "react";
import "../styles/Sidebar.css";
import logo from "../assets/logo.svg";
import homeIcon from "../assets/homeIcon.svg";
import codeIcon from "../assets/codeIcon.svg";
import cloudIcon from "../assets/cloudIcon.svg";
import bookIcon from "../assets/bookIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import chevronDown from "../assets/chevron-down.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import signOut from "../assets/sign-out.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`overlay ${!isOpen ? "open" : ""}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <img src={logo} alt="Logo" className="sidebar-logo" />
          <span className="profile">
            <span>UtkarshDhairyaPa...</span>
            <img
              src={chevronDown}
              alt="chevron-down"
              className="chevron-down"
            />
          </span>
          <nav className="sidebar-nav">
            <span className="nav-item active">
              <img src={homeIcon} alt="home-icon" className="home-icon" />
              <button>Repositories</button>
            </span>
            <span className="nav-item">
              <img src={codeIcon} alt="code-icon" className="code-icon" />
              <button>AI Code Review</button>
            </span>
            <span className="nav-item">
              <img src={cloudIcon} alt="cloud-icon" className="cloud-icon" />
              <button>Cloud Security</button>
            </span>
            <span className="nav-item">
              <img src={bookIcon} alt="book-icon" className="book-icon" />
              <button>How to Use</button>
            </span>
            <span className="nav-item">
              <img
                src={settingsIcon}
                alt="settings-icon"
                className="settings-icon"
              />
              <button>Settings</button>
            </span>
          </nav>
        </div>
        <div className="sidebar-footer">
          <span className="footer-item">
            <img src={phoneIcon} alt="phone-icon" className="phone-icon" />
            <button>Support</button>
          </span>
          <span className="footer-item">
            <img src={signOut} alt="signout-icon" className="signout-icon" />
            <button>Logout</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

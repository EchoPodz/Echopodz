import Link from "next/link";
import { useState } from "react";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "./Menus";
const MobileMenu = ({ show, close }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      close(); // Close mobile menu after clicking
    }
  };
  return (
    <div className={`mobile-slide-panel ${show ? "panel-on" : ""}`}>
      <div className="panel-overlay" onClick={() => close()}></div>
      <div className="panel-inner">
        <div className="mobile-logo">
          <Link href="/">
          
              <img src="assets/img/logo-1.png" alt="Landio" />
           
          </Link>
        </div>
        <nav className="mobile-menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>How It Works?</a>
            </li>
            <li>
              <a href="#about-us" onClick={(e) => handleSmoothScroll(e, 'about-us')}>About Us</a>
            </li>
            <li>
              <a href="#why-it-matters" onClick={(e) => handleSmoothScroll(e, 'why-it-matters')}>Why It Matters?</a>
            </li>
            <li>
              <a href="#our-approach" onClick={(e) => handleSmoothScroll(e, 'our-approach')}>Our Approach</a>
            </li>
            <li>
              <a href="#contact-us" onClick={(e) => handleSmoothScroll(e, 'contact-us')}>Contact Us</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times"></i>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Nav from "./Nav";
const Header2 = () => {
  const [mobileMenuTrigger, setMobileMenuTrigger] = useState(false);
  return (
    <header className="template-header navbar-center absolute-header nav-white-color submenu-seconday-color nav-border-bottom sticky-header">
      <div className="container-fluid container-1430">
        <div className="header-inner">
          <div className="header-left">
            <div className="brand-logo">
              <Link href="/">
                  <img
                    src="assets/img/logo.png"
                    alt="logo"
                    className="main-logo"
                  />
                  <img
                    src="assets/img/logo4.png"
                    alt="logo"
                    className="sticky-logo"
                  />
              </Link>
            </div>
          </div>
          <div className="header-center">
            <Nav />
          </div>
          <div className="header-right">
            <ul className="header-extra">
              <li className="d-none d-md-block">
                <a href="https://tally.so/r/RGxDg4" target="_blank" rel="noopener noreferrer" className="template-btn secondary-bg">
                    Join the Waitlist <i className="fas fa-arrow-right" />
                </a>
              </li>
              <li className="d-xl-none">
                <a
                  href="#"
                  className="navbar-toggler"
                  onClick={() => setMobileMenuTrigger(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start Mobile Slide Menu */}
      <MobileMenu
        show={mobileMenuTrigger}
        close={() => setMobileMenuTrigger(false)}
      />
      {/* End Mobile Slide Menu */}
    </header>
  );
};

export default Header2;

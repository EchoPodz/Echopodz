import Link from "next/link";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "../Menus";
const Nav = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav-menu d-none d-xl-block">
      <ul>
        <li>
          <Link href="/">
          Home
          </Link>
        </li>
        <li>
          <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>
          How It Works?
          </a>
        </li>
        <li>
          <a href="#about-us" onClick={(e) => handleSmoothScroll(e, 'about-us')}>
          About Us
          </a> 
        </li>
                <li>
          <a href="#why-it-matters" onClick={(e) => handleSmoothScroll(e, 'why-it-matters')}>
          Why It Matters?
          </a>
        </li>
        <li>
          <a href="#our-approach" onClick={(e) => handleSmoothScroll(e, 'our-approach')}>
          Our Approach
          </a>
        </li>
        <li>
          <a href="#contact-us" onClick={(e) => handleSmoothScroll(e, 'contact-us')}>
          Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

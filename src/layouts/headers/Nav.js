import Link from "next/link";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "../Menus";
const Nav = () => {
  return (
    <nav className="nav-menu d-none d-xl-block">
      <ul>
        <li>
          <Link href="/contact">
          Home
          </Link>
        </li>
        <li>
          <Link href="/about">
        About Us
          </Link>
        </li>
        <li>
          <Link href="/about">
           App
          </Link> 
        </li>
        <li>
          <Link href="/about">
           Why Us
          </Link>
        </li>
        <li>
          <Link href="/about">
          FAQ's
          </Link>
        </li>
        <li>
          <Link href="/about">
          Our Form
          </Link>
        </li>
        <li>
          <Link href="/about">
          Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import Link from "next/link";
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from "../Menus";
const Nav = () => {
  return (
    <nav className="nav-menu d-none d-xl-block">
      <ul>
        <li>
          <Link href="/contact">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>App</a>
          </Link> 
        </li>
        <li>
          <Link href="/about">
            <a>Why Us</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>FAQ's</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Our Form</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

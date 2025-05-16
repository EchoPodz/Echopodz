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
          How It Works?
          </Link>
        </li>
        <li>
          <Link href="/about">
          About Us
          </Link> 
        </li>
                <li>
          <Link href="/about">
          Why It Matters?
          </Link>
        </li>
        <li>
          <Link href="/about">
          Our Approach
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

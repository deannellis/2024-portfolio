import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h2>Dean Nellis</h2>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>Work</li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

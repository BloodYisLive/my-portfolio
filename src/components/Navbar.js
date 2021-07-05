import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className='navbar hide-for-desktop'>
        <div className='navbar-hamburger' onClick={() => setOpen(!open)}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div className={`navbar-content ${open ? "show" : "close"}`}>
          <ul className='padding-0'>
            <Link
              className='link'
              activeClass='active'
              to='header'
              smooth={true}
              duration={1000}
              spy={true}
            >
              <li>Home</li>
            </Link>
            <Link
              className='link'
              activeClass='active'
              to='about'
              smooth={true}
              duration={1000}
              spy={true}
            >
              <li>About</li>
            </Link>
            <Link
              className='link'
              activeClass='active'
              to='portfolio'
              smooth={true}
              duration={1000}
              spy={true}
            >
              <li>Portfolio</li>
            </Link>
            <Link
              className='link'
              activeClass='active'
              to='contact'
              smooth={true}
              duration={1000}
              spy={true}
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className='navbar-desktop hide-for-mobile'>
        <div className='navbar-desktop-links'>
          <Link
            className='link'
            activeClass='active'
            to='header'
            smooth={true}
            duration={1000}
            spy={true}
          >
            Home
          </Link>
          <hr />
          <Link
            className='link'
            activeClass='active'
            to='about'
            smooth={true}
            duration={1000}
            spy={true}
          >
            About
          </Link>
          <hr />
          <Link
            className='link'
            activeClass='active'
            to='portfolio'
            smooth={true}
            duration={1000}
            spy={true}
          >
            Portfolio
          </Link>
          <hr />
          <Link
            className='link'
            activeClass='active'
            to='contact'
            smooth={true}
            duration={1000}
            spy={true}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

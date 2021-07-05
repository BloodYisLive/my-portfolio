import React from "react";
import logo from "../logo.png";
import { Link } from 'react-scroll';
function Header() {
  return (
    <>
      <section className='container' id='header'>
        <div className='container-logo'>
          <img src={logo} alt='JP' />
        </div>
        <div className='container-contact'>
          <Link
              className='link'
              activeClass='active'
              to='contact'
              smooth={true}
              duration={1000}
              spy={true}
            >
          <span>Contact</span>
            </Link>
        </div>
      </section>
    </>
  );
}

export default Header;

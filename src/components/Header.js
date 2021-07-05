import React from "react";
import logo from "../logo.png";
function Header() {
  return (
    <>
      <section className='container' id='header'>
        <div className='container-logo'>
          <img src={logo} alt='JP' />
        </div>
        <div className='container-contact'>
          <span>Contact</span>
        </div>
      </section>
    </>
  );
}

export default Header;

import React, { useState } from "react";
import mainLogo from "../media/icon.png";

const Header = (promp) => {

    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <header className="navResponsive">
      <nav>
        <img src={mainLogo} alt="logo" />
        <ul>
          <li>
            <a className="responsiveMenuButton" onClick={toggleMenu}>
              <i class="fa-sharp fa-solid fa-bars"></i>
            </a>
          </li>
          <li>
            <a title="Click to change lang">
              <button>{promp.button}</button>
            </a>
          </li>
        </ul>
      </nav>
      <div className={`responsiveMenu ${showMenu ? 'show-menu' : 'blind-menu'}`}>
        <a href="#home" onClick={toggleMenu} title="Click to go home">
          {promp.home}
        </a>
        <a href="#aboutme" onClick={toggleMenu} title="Click to go about me">
          {promp.aboutme}
        </a>
        <a href="#skills" onClick={toggleMenu} title="Click to go skills">
          {promp.skills}
        </a>
        <a href="#worksprojects" onClick={toggleMenu} title="Click to go projects/works">
          {promp.projectsworks}
        </a>
        <a href="#contact" onClick={toggleMenu} title="Click to go contact">
          {promp.contact}
        </a>
      </div>
    </header>
  );
};


export default Header;

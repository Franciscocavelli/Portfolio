import React from 'react'
import mainLogo from '../media/icon.png'

const Header = (promp) => {
  return (
    <header>
      <nav>
        <img src={mainLogo} alt='logo'/>
        <ul>
          <li><a href='#home' title='Click to go home'>{promp.home}</a></li>
          <li><a href='#aboutme' title='Click to go about me'>{promp.aboutme}</a></li>
          <li><a href='#skills' title='Click to go skills'>{promp.skills}</a></li>
          <li><a href='#worksprojects' title='Click to go projects/works'>{promp.projectsworks}</a></li>
          <li><a href='#contact' title='Click to go contact'>{promp.contact}</a></li>
          <li><a><button title='Click to change the language'><img src={promp.button} alt='change lang'/></button></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
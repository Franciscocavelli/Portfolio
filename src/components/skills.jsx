import React from 'react'
import html from '../media/skills/html.png'
import css from '../media/skills/css.png'
import js from '../media/skills/js.png'
import php from '../media/skills/php.png'
import python from '../media/skills/python.png'
import laravel from '../media/skills/laravel.png'
import react from '../media/skills/react.png'
import jquery from '../media/skills/jquery.png'
import ajax from '../media/skills/ajax.png'
import sass from '../media/skills/sass.png'

const Skills = (promp) => {
  return (
    <div className='container' id='skills'>
      <h4>{promp.skillsTitle}</h4>
      <p className='container__skills'>{promp.skillsText1} <span>{promp.skillsSpan1}</span>, <span>{promp.skillsSpan2}</span>, <span>{promp.skillsSpan3}</span>{promp.skillsText2}<span>{promp.skillsSpan4}</span> {promp.skillsText3}</p>
      <div className="container__containerAll">
        <div className="container__containerAll__skill">
          <img src={html} alt='html'/>
          <p className='lanShow'>HTML<br/><br/>★★★★☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={css} alt='css'/>
          <p className='lanShow'>CSS<br/><br/>★★★★☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={js} alt='js'/>
          <p className='lanShow'>JavaScript<br/><br/>★★★☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={php} alt='php'/>
          <p className='lanShow'>PHP MySql<br/><br/>★★★☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={python} alt='python'/>
          <p className='lanShow'>Python<br/><br/>★☆☆☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={sass} alt='sass'/>
          <p className='lanShow'>Sass<br/><br/>★★★☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={react} alt='react'/>
          <p className='lanShow'>React<br/><br/>★★☆☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={ajax} alt='ajax'/>
          <p className='lanShow'>Ajax<br/><br/>★★☆☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={jquery} alt='jquery'/>
          <p className='lanShow'>Jquery<br/><br/>★★☆☆☆</p>
        </div>
        <div className="container__containerAll__skill">
          <img src={laravel} alt='laravel'/>
          <p className='lanShow'>Laravel<br/><br/>★★☆☆☆</p>
        </div>
      </div>
      <div className="container__skills_options">
        <i class="fa-solid fa-circle"></i>
      </div>
    </div>
  )
}

export default Skills
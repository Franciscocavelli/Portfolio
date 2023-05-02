import React from 'react'
import mainLogo from '../media/icon.png'

const Start = (promp) => {
  return (
    <div className='container' id='home'>
        <img src={mainLogo} alt='Logo' className='imgLogoStart'/>
        <p className='container__intro'>{promp.hyminame}</p>
        <h1 className='container__title'>Francisco Cavelli</h1>
        <h2 className='container__subtitle'>{promp.developer}</h2>
        <p className='container__description'>{promp.textStart1}<span>{promp.textStartSpan1}</span>{promp.textStart2}<span>{promp.textStartSpan2}</span>{promp.textStart3}<span>{promp.textStartSpan3}</span>{promp.textStart4}<span>{promp.textStartSpan4}</span>{promp.textStart5}</p>
        <a href="www.goolge.com.ar"  className='container__button'>{promp.resume}</a>
        <a href="#aboutme"><i class="fa-solid fa-angles-down"></i></a>
    </div>
  )
}

export default Start
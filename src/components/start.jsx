import React, { useState, useEffect } from 'react';
import Loader from './loader';
import mainLogo from '../media/icon.png'
import curriculumEs from '../media/curriculums/Francisco-Cavelli-es.pdf'


const Start = (promp) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulamos una carga de página que dura 2 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (     
        <div className='container' id='home'>
          <img src={mainLogo} alt='Logo' className='imgLogoStart'/>
          <p className='container__intro'>{promp.hyminame}</p>
          <h1 className='container__title'>Francisco Cavelli</h1>
          <h2 className='container__subtitle'>{promp.developer}</h2>
          <p className='container__description'>{promp.textStart1}<span>{promp.textStartSpan1}</span>{promp.textStart2}<span>{promp.textStartSpan2}</span>{promp.textStart3}<span>{promp.textStartSpan3}</span>{promp.textStart4}<span>{promp.textStartSpan4}</span>{promp.textStart5}</p>
          <a href={curriculumEs} target='_blank' className='container__button'>{promp.resume}</a>
          <a href="#aboutme"><i class="fa-solid fa-angles-down"></i></a>
        </div>
    )}
    </div>
  )
}

export default Start
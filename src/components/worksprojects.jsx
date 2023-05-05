import React from "react";
import app1 from '../media/projects/app1.JPG'
import app2 from '../media/projects/app2.jpeg'

const Worksprojects = (promp) => {
  return (
    <div className="containerworksprojects" id="worksprojects">
      <h5>{promp.projectsworksTitle}</h5>
      <p className="worksprojects__intro">
      {promp.projectsworksSubTitle}
      </p>
      <div className="worksprojects__project">
        <div className="worksprojects__project__img">
          <img src={app1} alt="App1" />
        </div>
        <div className="worksprojects__projectText">
          <p className="worksprojects__projectText__Title">{promp.projectsworksApp1Title}</p>
          <p className="worksprojects__projectText__Leng">PHP - MYSQL - JAVASCRIPT - JQUERY - AJAX</p>
          <p className="worksprojects__projectText__Desc">{promp.projectsworksApp1Desc}</p>
        </div>
      </div>
      <div className="worksprojects__projectIzq">
        <div className="worksprojects__projectText">
          <p className="worksprojects__projectText__Title">{promp.projectsworksApp2Title}</p>
          <p className="worksprojects__projectText__Leng">JAVASCRIPT - REACT - PHP - MYSQL - LARAVEL<br/><b>API'S: </b>STEAM - MERCADO PAGO</p>
          <p className="worksprojects__projectText__Desc">{promp.projectsworksApp2Desc}</p>
        </div>
        <div className="worksprojects__project__img">
          <img src={app2} alt="App2" />
        </div>
      </div>
    </div>
  );
};

export default Worksprojects;

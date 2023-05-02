import React from "react";
import fran from "../media/fran.jpg";

function Aboutme(promp) {
  return (
    <div className="container" id="aboutme">
      <h3>{promp.aboutmeTitle}</h3>
      <div className="containerAboutme">
        <p className="containerAboutme__aboutme">
          {promp.aboutmeText1}
          <br />
          <br /> {promp.aboutmeText2}
          <span>{promp.aboutmeSpan1}</span>{promp.aboutmeText3}<span>{promp.aboutmeSpan2}</span>.
          <br />
          <br />{promp.aboutmeText4}
          <span>{promp.aboutmeSpan3}</span>{promp.aboutmeText5}
          <span>{promp.aboutmeSpan4}</span>{promp.aboutmeText6}
        </p>
        <div className="containerAboutme__img">
          <div className="containerAboutme__img__into">
            <img src={fran} alt="My photo" />
          </div>
        </div>
      </div>
      <div className="containerAboutme__workme">
        <p className="containerAboutme__workmeTitle">{promp.aboutmeWhyworkme}</p>
        <div className="containerAboutme__workmeStats">
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme1Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme1Desc}
            </p>
          </div>
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme2Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme2Desc}
            </p>
          </div>
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme3Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme3Desc}
            </p>
          </div>
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme4Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme4Desc}
            </p>
          </div>
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme5Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme5Desc}
            </p>
          </div>
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme6Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme6Desc}
            </p>
          </div>
          <div className="containerAboutme__workmeStats__St">
            <p>
              <span>{promp.aboutmeWhyworkme7Title}</span>
              <br />
              <i class="fa-solid fa-medal"></i>
              <br />{promp.aboutmeWhyworkme7Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

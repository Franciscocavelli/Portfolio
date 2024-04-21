import React from "react";

const Contact = (promp) => {
  return (
    <div className="container__Contact" id="contact">
      <h6>{promp.contactTitle}</h6>
      <p className="contact__title">
        {promp.contactSubTitle}
      </p>
      <p className="contact__text">
        {promp.contacttext1}<br/><br/> {promp.contacttext2}<br/><br/> {promp.contacttext3}
      </p>
      <a href="mailto:francavelli@hotmail.com?Subject=Hola%20quisiera%20contactar%20contigo." className="contact__buttonHi"><button>{promp.contactgreetme}</button></a>
      <div className="contact__social">
        <a href="https://www.linkedin.com/in/francisco-cavelli/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Contact;

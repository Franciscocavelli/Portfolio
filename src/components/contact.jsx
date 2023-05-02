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
      <a className="contact__buttonHi"><button>{promp.contactgreetme}</button></a>
      <div className="contact__social">
        <a href="https://www.linkedin.com/in/francisco-tomas-cavelli-montini-7841a1184/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/francavelli/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100068511679059" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/FranCavelli" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
      </div>
    </div>
  );
};

export default Contact;

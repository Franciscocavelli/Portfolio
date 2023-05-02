import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Start from "./components/start";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Worksprojects from "./components/worksprojects";
import Contact from "./components/contact";
import Header from "./components/nav";
import Footer from "./components/footer";
import translations from "./components/translations";

const Root = () => {

  const [lang, setLang] = useState("en");
  const { home, aboutme, projectsworks, skills, contact, hyminame, developer, textStart1, resume, textStartSpan1, textStart2, textStartSpan2, textStart3, textStartSpan3, textStart4,textStartSpan4, textStart5, button, aboutmeTitle, skillsTitle, projectsworksTitle, projectsworksSubTitle, contactTitle, skillsText1, skillsText2, skillsText3, skillsSpan1, skillsSpan2, skillsSpan3, skillsSpan4, projectsworksApp1Title, projectsworksApp1Desc, projectsworksApp2Title, projectsworksApp2Desc, projectsworksApp3Title, projectsworksApp3Desc, contactSubTitle, contacttext1, contacttext2, contacttext3, contactgreetme, aboutmeText1, aboutmeText2, aboutmeText3, aboutmeText4, aboutmeText5, aboutmeText6, aboutmeSpan1, aboutmeSpan2, aboutmeSpan3, aboutmeSpan4, aboutmeWhyworkme, aboutmeWhyworkme1Title, aboutmeWhyworkme1Desc, aboutmeWhyworkme2Title, aboutmeWhyworkme2Desc, aboutmeWhyworkme3Title, aboutmeWhyworkme3Desc, aboutmeWhyworkme6Title, aboutmeWhyworkme6Desc, aboutmeWhyworkme4Title, aboutmeWhyworkme4Desc, aboutmeWhyworkme7Title, aboutmeWhyworkme7Desc, aboutmeWhyworkme5Title, aboutmeWhyworkme5Desc, madeby } = translations[lang];
  
  return (
    <React.StrictMode>
      <Header home={home} aboutme={aboutme} projectsworks={projectsworks} skills={skills} contact={contact}>
      </Header>
      <button className="changelang" onClick={() => setLang(lang === "en" ? "es" : "en")}>
        <img src={button} alt="Change lang img"/>
      </button>
      <Start hyminame={hyminame} developer={developer} textStart1={textStart1} resume={resume} textStartSpan1={textStartSpan1} textStart2={textStart2} textStart3={textStart3} textStart4={textStart4} textStart5={textStart5} textStartSpan2={textStartSpan2} textStartSpan3={textStartSpan3} textStartSpan4={textStartSpan4}/>
      <Aboutme aboutmeTitle={aboutmeTitle} aboutmeText1={aboutmeText1} aboutmeText2={aboutmeText2} aboutmeText3={aboutmeText3} aboutmeText4={aboutmeText4} aboutmeText5={aboutmeText5} aboutmeText6={aboutmeText6} aboutmeSpan1={aboutmeSpan1} aboutmeSpan2={aboutmeSpan2} aboutmeSpan3={aboutmeSpan3} aboutmeSpan4={aboutmeSpan4} aboutmeWhyworkme={aboutmeWhyworkme} aboutmeWhyworkme1Title={aboutmeWhyworkme1Title} aboutmeWhyworkme2Title={aboutmeWhyworkme2Title} aboutmeWhyworkme3Title={aboutmeWhyworkme3Title} aboutmeWhyworkme4Title={aboutmeWhyworkme4Title} aboutmeWhyworkme5Title={aboutmeWhyworkme5Title} aboutmeWhyworkme6Title={aboutmeWhyworkme6Title} aboutmeWhyworkme7Title={aboutmeWhyworkme7Title} aboutmeWhyworkme1Desc={aboutmeWhyworkme1Desc} aboutmeWhyworkme2Desc={aboutmeWhyworkme2Desc} aboutmeWhyworkme3Desc={aboutmeWhyworkme3Desc} aboutmeWhyworkme4Desc={aboutmeWhyworkme4Desc} aboutmeWhyworkme5Desc={aboutmeWhyworkme5Desc} aboutmeWhyworkme6Desc={aboutmeWhyworkme6Desc} aboutmeWhyworkme7Desc={aboutmeWhyworkme7Desc}/>
      <Skills skillsTitle={skillsTitle} skillsText1={skillsText1} skillsText2={skillsText2} skillsText3={skillsText3} skillsSpan1={skillsSpan1} skillsSpan2={skillsSpan2} skillsSpan3={skillsSpan3} skillsSpan4={skillsSpan4} />
      <Worksprojects projectsworksTitle={projectsworksTitle} projectsworksSubTitle={projectsworksSubTitle} projectsworksApp1Title={projectsworksApp1Title} projectsworksApp1Desc={projectsworksApp1Desc} projectsworksApp2Title={projectsworksApp2Title} projectsworksApp2Desc={projectsworksApp2Desc} projectsworksApp3Title={projectsworksApp3Title} projectsworksApp3Desc={projectsworksApp3Desc}/>
      <Contact contactTitle={contactTitle} contactSubTitle={contactSubTitle} contacttext1={contacttext1} contacttext2={contacttext2} contacttext3={contacttext3} contactgreetme={contactgreetme}/>
      <Footer madeby={madeby} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

reportWebVitals();

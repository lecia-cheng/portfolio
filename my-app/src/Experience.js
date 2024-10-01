import React from 'react';
import './App.css';
import projectLeadImg from './assets/project-lead.png';
import fullStackImg from './assets/full-stack.png';
import frontEndImg from './assets/front-end.png';
import scotia from './assets/scotia.jpg';
import scotiaLogo from './assets/scotialogo.png';
import codeNinjasLogo from './assets/codeninjaslogo.png';
import code from './assets/code.jpg';
import projectLead from './assets/projectlead.jpg';

export const ExperienceCard = ({ company, title, year, imagePath, navigateTo, description, logoPath }) => {
  const handleClick = () => {
    // This will cause the browser to navigate to the new page.
    window.location.href = navigateTo;
  };

  const logoClass = company === "Code Ninjas" ? "company-logo-small" : "company-logo-tiny";
  const companyHeaderClass = logoPath ? "company-header" : "company-header-no-logo";

  return (
    <div className="card" >
      <div className="card-image" style={{ backgroundImage: `url(${imagePath})` }} />
      <div className="card-content">
        <div className={companyHeaderClass}>
          {logoPath && <img src={logoPath} alt={`${company} logo`} className={logoClass} />}
          <h2 className="card-company">{company}</h2>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-year">{year}</p>
        {description.map((para, index) => (
          <p key={index} className="card-description">{para}</p>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="App">
      <div className="experience-container">
        <h2 className='work-title'>WORK</h2>
        <h2 className='experience-title'>EXPERIENCE</h2>
        <div className="pinterest-board">
          <ExperienceCard
            company="Scotiabank"
            title="Software Engineering Intern"
            year="2024"
            imagePath={scotia} // replace with your image path
            navigateTo="/scotiabank"
            description={[
              "Spearheaded the modernization of Dynamic.ca utilizing the AEM and CRXDE environment, enhancing user engagement by 30% and implementing the tracking of user interactions and unit testing to collect real-time data.",
              "Proposed and developed an app aimed at assisting vulnerable clients at Scotiabank, collaborating with a cross-functional team of 3 to design, and present to senior leadership, receiving highly positive feedback."
            ]}
            logoPath={scotiaLogo} // Add this prop
          />
          <ExperienceCard
            company="Code Ninjas"
            title="Project Lead & Coding Instructor"
            year="2023"
            imagePath={projectLead} // replace with your image path
            navigateTo="/project-lead"
            description={[
              "Led the integration of a CRM system whilst translating technical features into everyday language, resulting in a 50% increase in client operation efficiency and enhancing their system usability.",
              "Held weekly consultations with clients to provide progress updates and ensure alignment with their needs."
            ]}
            logoPath={codeNinjasLogo} // Add this prop
          />
          
          <ExperienceCard
            company="RentKeepr"
            title="Full Stack Developer Intern"
            year="2023"
            imagePath={code} // replace with your image path
            navigateTo="/full-stack-intern"
            description={[
              "Designed and created 20+ figma designs to bring innovative and user-friendly experiences to life, analyzing over 9+ competitors and contributing significantly to the successful launch of rentkeepr.co"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;

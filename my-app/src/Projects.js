import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import { SiDevpost, SiFigma } from 'react-icons/si';
import { GiPublicSpeaker } from 'react-icons/gi';
import './App.css';

// Import your project images here
import miso from './assets/miso.jpg';
import nourishnow from './assets/nourishnow.jpg';
import goosepainter from './assets/goosepainter.jpg';
import recorder from './assets/re-corder.jpg';
import speeddial from './assets/speeddial.jpg';
import tangyrewards from './assets/tangyrewards.jpg';

// import project2Image from './path/to/project2-image.jpg';
// ... and so on for all projects

const projects = [
    {
        title: "Miso",
        subtitle: "🏆UofTHacks Prize - Best Hack to Promote Female Empowerment Within STEM",
        description: "Miso is an AI that detects sexism and toxicity in text messages and warns the sender of their behaviour. It can be integrated into Discord as a bot or used directly on our website!",
        image: miso,
        devpostLink: "https://devpost.com/software/miso",
        githubLink: "https://github.com/stanleyylin/Miso",
        skills: "Python, Co:here, Estuary, React, JavaScript, HTML, CSS, TypeScript, Figma, UI/UX, MS Office, PowerPoint"
    },
    {
        title: "Tangy Rewards",
        subtitle: "🏆1st Place @ S:/HA<KS - Scotiabank x Tangerine Hackathon",
        description: "A Fresh Twist on Banking Benefits",
        image: tangyrewards,
        figmaLink: "https://www.figma.com/proto/AodJz8OJEDPTLSwUpRZDDF/SHacks2023?node-id=50-705&node-type=canvas&t=I59LrTvYvJjzspj1-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=50%3A705",
        skills: "Figma, UI/UX, React-Native, Python, Postgres"
    },
    {
        title: "NourishNow",
        subtitle: "🏆2nd Place @ MapleHacks in SDG",
        description: "norishNow is an online website that uses machine learning and an interactive map to easily visualize WIC food disparity in the US and allow donors to get to the heart of the problem.",
        image: nourishnow,
        devpostLink: "https://devpost.com/software/norishnow",
        githubLink: "https://github.com/kevin-klau/nourishNow",
        skills: "Python, React, JavaScript, HTML, CSS, Figma, UI/UX"
    },
    {
        title: "Re-Record",
        subtitle: "🎼 UoftHacks 2024",
        description: "An instrument we all know and love. We've all been world-class recorder maestros at some point. Why not reclaim that glory? Re-Record is the best way to shake off the rust and remaster the recorder",
        image: recorder,
        devpostLink: "https://devpost.com/software/re-recorder",
        githubLink: "https://github.com/kevin-klau/Re-Record",
        skills: "Music, App Development"
    },
    {
        title: "SpeedDial",
        subtitle: "📞 Hack Western 10",
        description: "In a world filled with never-ending decisions and a growing sense of isolation, we get that you sometimes just need a friend... or four 👀",
        image: speeddial,
        devpostLink: "https://devpost.com/software/speeddial",
        githubLink: "https://github.com/prannyv/contact-advice-"
    },
    {
        title: "Goose Painter",
        subtitle: "🎨 Hack the North 2024",
        description: "Challenge each other to see who can draw the best!",
        image: goosepainter,
        devpostLink: "https://devpost.com/software/goose-painter",
        githubLink: "https://github.com/JackyLiu13/goosepainter",
        skills: "Art, Game Development"
    },
    // Add more projects as needed
];

export const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const renderProjectLinks = (project) => {
        if (project.title === "Tangy Rewards") {
            return (
                <>
                    <a href={project.figmaLink || "#"} target="_blank" rel="noopener noreferrer" className="project-link figma">
                        <SiFigma /> Figma
                    </a>
                    <a href={project.pitchDeckLink || "#"} target="_blank" rel="noopener noreferrer" className="project-link pitch-deck">
                        <GiPublicSpeaker /> Pitch Deck
                    </a>
                </>
            );
        }
        return (
            <>
                <a href={project.devpostLink || "#"} target="_blank" rel="noopener noreferrer" className="project-link devpost">
                    <SiDevpost /> DevPost
                </a>
                <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FaGithub /> GitHub
                </a>
            </>
        );
    };

    return (
        <div className="projects-App" id="projects">
            <div className="projects-content">
                <div className="projects-container">
                    <div className="scrolling-text">PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</div>
                </div>
                <div className="carousel-wrapper">
                    <div className="carousel-container">
                        <div className="carousel-header">
                            <div className="carousel-nav">
                                <span>Gallery</span>
                                <span>My Projects</span>
                                <span>Click next!</span>
                            </div>
                        </div>
                        <div className="carousel-content">
                            <button className="carousel-button prev" onClick={prevProject}>
                                <FaChevronLeft />
                            </button>
                            <div className="project-card">
                                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="project-image" />
                                <div className="project-info">
                                    <h2 className="project-title">{projects[currentIndex].title}</h2>
                                    <h3 className="project-subtitle">{projects[currentIndex].subtitle}</h3>
                                    <p className="project-description">{projects[currentIndex].description}</p>
                                    <h4 className="skills-title">Skills</h4>
                                    <p className="skills-description"><strong>{projects[currentIndex].skills}</strong></p>
                                    <div className="project-links">
                                        {renderProjectLinks(projects[currentIndex])}
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-button next" onClick={nextProject}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
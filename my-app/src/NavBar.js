import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import navIcon1 from './assets/nav-icon1.svg';
import navIcon2 from './assets/nav-icon2.svg';
import navIcon3 from './assets/nav-icon3.svg';
import './App.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <div className='navbar-content'>
                    <p className='name'>LECIA CHENG</p>
                </div>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/lecia-cheng/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                        <a href="https://github.com/lecia-cheng" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github"/></a>
                        <a href="https://www.instagram.com/lecia.0_0/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                    </div>
                    <a href="mailto:leciacheng@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </a>
                </span>
            </Container>
        </Navbar>
    );
}
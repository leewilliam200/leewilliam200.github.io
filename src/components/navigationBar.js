import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.png';

export const NavigationBar = () => {
    const homeRedirect = () => {
        const section = document.querySelector( '.introCont' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };

      const aboutRedirect = () => {
        const section = document.querySelector( '.aboutCont' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };

      const projectRedirect = () => {
        const section = document.querySelector( '.projectCont' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };

      const contactRedirect = () => {
        const section = document.querySelector( '.contactCont' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <Navbar fixed="top" className="navBar navbar-custom">
            <div className="logo-container" onClick={homeRedirect}>
                <img className="logo-button" src={logo}></img>
            </div>
            <div className="button" onClick={aboutRedirect}>About</div>
            <div className="button" onClick={projectRedirect}>Projects</div>
            <div className="final-button" onClick={contactRedirect}>Contact</div>
        </Navbar>
    )
}

export default NavigationBar
import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import litRailThumbnail from '../images/litRailThumbnail.png';
import { useNavigate } from 'react-router-dom';


export const Transportme = () => {
    const navigate = useNavigate();
    const homeRedirect = () => {
        navigate('/');
    };
    return (<div className="main">
        <Navbar fixed="top" className="navBar navbar-custom">
            <div className="logo-container" onClick={homeRedirect}>
                <img className="logo-button" src={logo}></img>
            </div>
        </Navbar>
        <div className="projectPage">
           <img className="projectImg" src={litRailThumbnail}></img>
           <p1>transport.me</p1>
           <p3>Transport.me is a prototype mobile application created using ReactJS that provides users with a means to schedule trips when using public transport.
               The application provides the user with live tracking information and the means to schedule and organise trips that they will make in the future. A
               user is also able to pay through the application and set specific reminders for any trip. This project was nominated for the UNSW DESN2000 pitch showcase in 2020.
           </p3>
           <br></br>
           <div className="skillList">
                <div className="leftCol">
                    <ul className="leftList">
                        <li>Javascript</li>
                        <li>Prototyping</li>
                    </ul>
                </div>
                <div className="rightCol">
                    <ul>
                        <li>ReactJS</li>
                        <li>Mobile Application Development</li>
                    </ul>
                </div>
            </div>
           <div className="contactButton" onClick={homeRedirect}>
                <p3 className="contact">Return</p3>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </div>
            <br></br>
        </div>
    </div>)
}

export default Transportme
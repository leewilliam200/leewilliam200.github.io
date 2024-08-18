import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import promedThumbnail from '../images/promedThumbnail.png';
import { useNavigate } from 'react-router-dom';


export const Promedmail = () => {
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
            <img className="projectImg" src={promedThumbnail}></img>
            <p1>Disease Report Daily</p1>
            <p3>Disease Report Daily is a web application, implemented using Vue.js and Flask, which allows users to browse disease reports
               from credible sources and the application displays a map containing a heat map of country-specific disease reports. The
               application also has a trending section which contains recent posts from approved social media accounts. The web application also
               sends users with a daily email with news that are specific to their interests. The application was launched alongside an API,
               created using Flask and deployed on Heroku, which provides information obtained from ProMED-mail using a Selenium web
               scraper and a SQLite3 database. This project was nominated for the UNSW SENG3011 Optiver Prize in 2021.
            </p3>
            <br></br>
            <div className="skillList">
                <div className="leftCol">
                    <ul className="leftList">
                        <li>Javascript</li>
                        <li>Vue.js</li>
                        <li>API Deployment</li>
                        <li>SQLite3</li>
                    </ul>
                </div>
                <div className="rightCol">
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Selenium</li>
                        <li>User Authentication</li>
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

export default Promedmail
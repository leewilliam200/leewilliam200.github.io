import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.png';
import prodiffThumbnail from './prodiffThumbnail.png';
import { useNavigate } from 'react-router-dom';


export const Prodiff = () => {
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
           <img className="projectImg" src={prodiffThumbnail}></img>
           <p1>Pro-diff</p1>
           <p3>Pro-diff is a web analytics tool that was created for the game League of Legends. It was created using Flask and jinja and the tool collects
               player specific data from the Riot API so the user can compare their statistics with other players. The tool also uses the Twitch API to present
               streams to the user and the tool also uses information from the Leaguepedia API to access statistics from professional players. 
           </p3>
           <br></br>
           <div className="skillList">
                <div className="leftCol">
                    <ul className="leftList">
                        <li>Python</li>
                        <li>Flask</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
                <div className="rightCol">
                    <ul>
                        <li>jinja2</li>
                        <li>API interaction</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </div>
            <br></br>
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

export default Prodiff
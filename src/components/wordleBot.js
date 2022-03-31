import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.png';
import wordleThumbnail from './wordleThumbnail.png';
import { useNavigate } from 'react-router-dom';

export const WordleBot = () => {
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
           <img className="projectImg" src={wordleThumbnail}></img>
           <p1>Wordle Bot</p1>
           <p3>Wordle Bot is a machine learning algorithm developed using Pytorch. The base game is a replica of the popular game Wordle created in Pygame. 
               The algorithm receives rewards based on the game state and continues to build upon itself after each generation
               to maximise the reward for the algorithm. 
           </p3>
           <br></br>
           <div className="skillList">
                <div className="leftCol">
                    <ul className="leftList">
                        <li>Python</li>
                        <li>Machine Learning</li>
                        <li>Data Visualisation</li>
                    </ul>
                </div>
                <div className="rightCol">
                    <ul>
                        <li>Pygame</li>
                        <li>Pytorch</li>
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

export default WordleBot
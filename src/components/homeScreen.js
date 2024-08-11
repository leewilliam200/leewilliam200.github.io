import React from 'react';
import wordleThumbnail from './wordleThumbnail.png';
import prodiffThumbnail from './prodiffThumbnail.png';
import promedThumbnail from './promedThumbnail.png';
import litRailThumbnail from './litRailThumbnail.png';
import { useNavigate } from 'react-router-dom';
import HomeNavBar from './navigationBar';

/*
 Implemented using a <p3 className="highlight"> Vue.js </p3> frontend and an API created using
                        <p3 className="highlight"> Flask </p3> and deployed on <p3 className="highlight"> Heroku </p3>
*/
export const Home = () => {
    const [isAboutVisible, setAboutVisible] = React.useState(true);
    const [isProjectVisible, setProjectVisible] = React.useState(true);
    const [isContactVisible, setContactVisible] = React.useState(true);
    const aboutRef = React.useRef();
    const projectRef = React.useRef();
    const contactRef = React.useRef();
    const navigate = useNavigate();
    React.useEffect(() => {
        const observerA = new IntersectionObserver(entries => {
          entries.forEach(entry => setAboutVisible(entry.isIntersecting));
        });
        const observerP = new IntersectionObserver(entries => {
          entries.forEach(entry => setProjectVisible(entry.isIntersecting));
        });
        const observerC = new IntersectionObserver(entries => {
            entries.forEach(entry => setContactVisible(entry.isIntersecting));
          });
        observerA.observe(aboutRef.current);
        observerP.observe(projectRef.current);
        observerC.observe(contactRef.current);
        return () => {
            observerA.unobserve(aboutRef.current);
            observerP.unobserve(projectRef.current);
            observerC.unobserve(contactRef.current);
        }
      }, []);

    const contactRedirect = () => {
        const section = document.querySelector( '.contactCont' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const handleWordleBot = () => {
        navigate('/project/wordleBot');
    }

    const handleProdiff = () => {
        navigate('/project/prodiff');
    }

    const handlePromed = () => {
        navigate('/project/promedmail');
    }

    const handleTransportme = () => {
        navigate('/project/transportme');
    }
    return (
        <div className="main">
            <HomeNavBar />
            <div className='introCont'>
                <p2>Hey there! My name is</p2>
                <p1>William Lee.</p1>
                <p3>I'm a <p3 className="highlight"> second-year software engineering </p3> graduate based in Sydney with a passion to tackle whatever challenge I am
                    faced with. I enjoy <p3 className="highlight"> learning </p3> new things and <p3 className="highlight"> innovating </p3> to create something unique. </p3>
                <br></br><br></br>
                <div className="contactButton" onClick={contactRedirect}>
                    <p3 className="contact">Contact</p3>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </div>
            </div>
            <hr className="break"></hr>
            <div id="about" className={`aboutCont ${isAboutVisible ? 'is-visible' : ''}`} ref={aboutRef}>
                <p1>About Me!</p1>
                <p3>
                    Hi! I recently graduated with a<p3 className="highlight"> Bachelor of Software Engineering </p3> at UNSW and have nearly
                    <p3 className="highlight"> two </p3> years of professional experience. I'm eager to continue building my career in the tech industry and
                    make a meaningful <p3 className="highlight"> impact </p3> through my work.
                </p3><br></br>
                <p3>
                    During my time at UNSW, I was<p3 className="highlight"> selected </p3> for the UNSW DESN2000 pitch
                    showcase in 2020 with a prototype public transport application and I was <p3 className="highlight"> nominated </p3> for the UNSW SENG3011
                    Optiver Prize in 2021 for an epidemiology web application.
                </p3><br></br>
                <p3>
                    Feel free to explore my portfolio to see the projects I've worked on and the skills I've developed. Enjoy your stay and I hope you'll learn at least a little bit more about me!
                </p3>
            </div>
            <hr className="break"></hr>
            <div id="project" className={`projectCont ${isProjectVisible ? 'is-visible' : ''}`} ref={projectRef}>
                <div className='projectDesc'>
                    <p1>My Projects</p1><br></br>
                    <p3>Here are some of the projects that I've developed over the years and what skills I have obtained in my short history of coding so far. You can click on
                        each card to see more information about the project and what skills I had developed. </p3><br></br><br></br>
                </div>
                <div className="projectInfoContainer">
                    <div className='project' onClick={handleWordleBot}>
                        <p2 className="projectTitle">Wordle Bot</p2>
                        <img className="projectImg" variant='top' src={wordleThumbnail}></img>
                        <p3 className="projectInfo">A <p3 className="highlightCard"> machine learning </p3> algorithm implemented using
                        <p3 className="highlightCard"> Pytorch </p3> on a Wordle replica created in <p3 className="highlightCard"> Pygame.</p3></p3>
                    </div>
                    <div className='project' onClick={handleProdiff}>
                        <p2 className="projectTitle">Pro-diff</p2>
                        <img className="projectImg" variant='top' src={prodiffThumbnail}></img>
                        <p3 className="projectInfo">A <p3 className="highlightCard"> web analytics </p3> tool utilising the <p3 className="highlightCard"> Riot API </p3>
                        where players can compare in-game stats with each other and in particular, professional players</p3>
                    </div>
                    <div className='project' onClick={handlePromed}>
                        <p2 className="projectTitle">Disease Report Daily</p2>
                        <img className="projectImg" variant='top' src={promedThumbnail}></img>
                        <p3 className="projectInfo">A <p3 className="highlightCard"> web application </p3> that displays disease reports and recent social
                        media posts for chosen diseases which sends a <p3 className="highlightCard"> daily </p3> email with any recent updates.</p3>
                    </div>
                    <div className='project' onClick={handleTransportme}>
                    <p2 className="projectTitle">transport.me</p2>
                        <img className="projectImg" variant='top' src={litRailThumbnail}></img>
                        <p3 className="projectInfo">A prototype <p3 className="highlightCard"> public transport scheduling </p3> application where
                        users can filter options to find their most <p3 className="highlightCard"> efficient </p3> route and see
                        <p3 className="highlightCard"> live </p3> traffic information. </p3>
                    </div>
                </div>
            </div>
            <hr className="break"></hr>
            <div id="contact" className={`contactCont ${isContactVisible ? 'is-visible' : ''}`} ref={contactRef}>
                <p1>Contact Me</p1>
                <p3>If you have any reason to contact me, you can email me at <a href="mailto:leewilliam200@gmail.com">leewilliam200@gmail.com</a>.
                Reach out to me and I'll be sure to respond to you as soon as possible. Even if it's just questions about projects I've developed in the past
                I'd be happy to answer anything that is sent my way. </p3>
            </div>
        </div>
    )
}

export default Home
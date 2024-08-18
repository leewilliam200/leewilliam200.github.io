import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Logo from './logo';
import sjLogo from '../../images/sj-logo.png';
import unswLogo from '../../images/unsw-logo.png';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CodeIcon from '@material-ui/icons/Code';

const logoStyle = {
    display: 'block',
    width: '40px',
    height: '40px',
    position: 'relative',
    left: '50%',
    top: '50%',
    marginLeft: '-20px',
    marginTop: '-20px',
}

export const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000',
                }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Jan 2023 - present"
                iconStyle={{
                    background: '#fff',
                }}
                icon={<Logo imagePath={sjLogo}/>}
            >
                <h3 className="vertical-timeline-element-title">Graduate Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Sydney</h4>
                <p>
                    Java, Apache Kafka, Spring, Python, MongoDB, Typescript, React Native, ReactJS, Agile, Project Management
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Dec 2022'
                iconStyle={{
                    background: '#fff'
                }}
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000'
                }}
                icon={<Logo imagePath={unswLogo}/>}
            >
                <h3 className='vertical-timeline-element-title'>Completed Uni Degree</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor of Software Engineering (Honours)</h4>
                <p>WAM 74</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2022 - Dec 2022"
                iconStyle={{
                    background: '#fff',
                }}
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000',
                }}
                icon={<Logo imagePath={sjLogo}/>}
            >
                <h3 className="vertical-timeline-element-title">Mobile and Web Testing Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Sydney</h4>
                <p>
                    Typescript, React Native, Python, Test Automation, Scripting
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2022 - Dec 2022"
                iconStyle={{
                    background: '#fff',
                    color: '#17183B',
                }}
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000',
                }}
                icon={<DescriptionIcon style={logoStyle}/>}
            >
                <h3 className="vertical-timeline-element-title">Thesis Paper</h3>
                <h4 className="vertical-timeline-element-subtitle">Overall Mark 78</h4>
                <p>
                    Evaluating machine learning approaches to detect personality traits through an individual’s writing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Apr 2021"
                iconStyle={{
                    background: '#fff',
                    color: '#17183B',
                }}
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000',
                }}
                icon={<EmojiEventsIcon style={logoStyle}/>}
            >
                <h3 className="vertical-timeline-element-title">Nominated for SENG3011 Optizer Prize 2021</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Jul 2020"
                iconStyle={{
                    background: '#fff',
                    color: '#17183B',
                }}
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000',
                }}
                icon={<EmojiEventsIcon style={logoStyle}/>}
            >
                <h3 className="vertical-timeline-element-title">Selected for UNSW DESN2000 Pitch Showcase</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Jan 2019'
                iconStyle={{
                    background: '#fff'
                }}
                contentStyle={{
                    background: '#17183B',
                    color: '#fff',
                    boxShadow: '0rem 0 2rem #000'
                }}
                icon={<Logo imagePath={unswLogo}/>}
            >
                <h3 className='vertical-timeline-element-title'>Commenced Uni Degree</h3>
                <h4 className='vertical-timeline-element-subtitle'>Bachelor of Software Engineering (Honours)</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline;
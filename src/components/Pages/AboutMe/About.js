import React from 'react';
import PageContent from '../../PageContent/PageContent';
import './About.scss';
import a from '../../../assets/3littleones2.jpg';
import b from '../../../assets/3littlePrincesses.jpg';
import c from '../../../assets/78.jpg';
import Tilt from 'react-tilt';


const title = 'About me';
const description = 'Some stuff about myself';

const about = () => {
    return (
        <PageContent title={title} description={description}>
            <p>More detailed info about my experience you can find on:</p>
            <a href="https://interviewme.pl/cv/filiphagno2" target={"_blank"} rel="noopener noreferrer">Online CV</a>

            <p>Privately husband of the most amazing women and father of three little princesses</p>
            <div style={{display: 'flex', flexWrap: 'wrap', height: '65%'}}>
                <Tilt className="Tilt" options={{max: 35}} style={{height: 310, width: 510, margin: '5px auto'}}>
                    <div className="Tilt-inner" style={{padding:'3px'}}>
                        <img src={c} alt={"tripplets"} height={"300"} width={"500"}/>
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{max: 35}} style={{height: 310, width: 510, margin: '0 auto'}}>
                    <img src={a} alt={"tripplets"} height={"300"} width={"500"}/>
                </Tilt>
                <Tilt className="Tilt" options={{max: 35}} style={{height: 310, width: 510, margin: '0 auto'}}>
                    <img src={b} alt={"wedding"} height={"300"} width={"500"}/>
                </Tilt>
            </div>

            <p>If only time allows enjoys one of the beloved hobbies:</p>
            <ul>
                <li>Electric Guitar</li>
                <li>Martial Arts: Taekwondo</li>
            </ul>

        </PageContent>
    );
};

export default about;
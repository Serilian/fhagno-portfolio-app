import React from 'react';
import './PageContent.scss';
import {Animated} from "react-animated-css";


const pageContent = ({title, description, children}) => {
    return (
        <div className="container">
                    <h2 className="glitch" data-text={title}>{title}</h2>


            <Animated animationIn="rollIn" isVisible={true}>
                <span className="description"> {description} </span>
            </Animated>
            {children}
        </div>
    );
};

export default pageContent;
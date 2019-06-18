import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = ({item: {title, id, type, tech, description, link}}) => {
    return (
        <div className="portfolio-item">
            <h4 className="portfolio-item__title">{title}</h4>
            <p className="portfolio-item__type"><strong>Type</strong>: {type}</p>
            <p className="portfolio-item__description"><strong>Description</strong>: {description}</p>
            <p className="portfolio-item__tech"><strong>Tech</strong>: {tech}</p>
            {link ?
                <a href={link} className="portfolio-item__link" rel="noopener noreferrer" target="_blank">Check it
                    out</a> :
                <a className="portfolio-item__link disabled"
                   rel="noopener noreferrer" href='/'
                   target="_blank">No can do</a>
            }

        </div>
    );
};

export default PortfolioItem;
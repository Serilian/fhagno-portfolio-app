import React from 'react';
import './ProjectList.scss';
import PortfolioItem from "./PortfolioItem";

const ProjectList = ({projects}) => {
    return (
        <div className="project-list">
            {projects.map(project=> (
                <PortfolioItem key={project.id} item={project} />
            ))}
        </div>
    );
};

export default ProjectList;
import React, {useState} from 'react';
import PageContent from '../../PageContent/PageContent'
import ProjectList from "./ProjectList";
import {projects} from './projects-info';
import './Portfolio.scss';

const Portfolio = () => {

    const [searchedText, setText] = useState("");

    const title = "Project portfolio";
    const description = 'Basic info about projects';



    const handleChange = (e)=> {
        setText(e.target.value);
    };

    return (
        <PageContent title={title} description={description}>
            <div style={{width: '100%', textAlign: 'center', padding: '10px'}}>
                <input type={"text"} placeholder={"Search by tech, title or type"} value={searchedText}
                       onChange={handleChange}/>
            </div>
            <ProjectList projects={projects.filter(project=> {
                return project.type.toLowerCase().includes(searchedText.toLowerCase()) ||
                    project.tech.toLowerCase().includes(searchedText.toLowerCase()) ||
                        project.title.toLowerCase().includes(searchedText.toLowerCase())
                }
            )}/>
        </PageContent>
    );
};

export default Portfolio;
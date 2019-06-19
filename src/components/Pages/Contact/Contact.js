import React from 'react';
import PageContent from "../../PageContent/PageContent";
import './Contact.scss'


const title = 'Get in touch!';
const description = "Contact me any way you feel comfortable";


const contact = () => {
    return (
        <PageContent title={title} description={description}>
            <div className="contact-list">
                <div>
                    <i className="fas fa-envelope fa-2x"/>{" "}fhagno@yahoo.com
                </div>

                <div>
                    <i className={"fas fa-mobile-alt fa-2x"}/>{" "}tel. +48 501 065
                    274
                </div>
                <div className="socials" >
                    <a
                        rel="noopener noreferrer" target="_blank"
                        href="https://www.linkedin.com/in/filip-hagno-00936a48">
                        <i className="fab fa-linkedin fa-3x" />
                    </a>
                    <a
                        rel="noopener noreferrer" target="_blank"
                        href="https://www.facebook.com/filip.hagno.9">
                        <i className="fab fa-facebook fa-3x"/>
                    </a>
                </div>
            </div>
        </PageContent>
    );
};

export default contact;
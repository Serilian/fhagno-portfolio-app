import React from 'react';
import PageContent from "../../PageContent/PageContent";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Contact.scss'


const title = 'Get in touch!';
const description = "Contact Filip any way you feel comfortable";


const contact = () => {
    return (
        <PageContent title={title} description={description}>
            <div className="contact-list">
                <div>
                    <FontAwesomeIcon icon="envelope"/> <p className="icon-p"> fhagno@yahoo.com </p>
                </div>

                <div>
                    <FontAwesomeIcon icon="mobile-alt"/> <p className="icon-p"> tel. +48 501 065
                    274 </p>
                </div>
                <div>
                    <FontAwesomeIcon icon="angle-right"/>  <p className="icon-p"><a
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.linkedin.com/in/filip-hagno-00936a48"> LinkedIn</a></p>
                </div>
            </div>
        </PageContent>
    );
};

export default contact;
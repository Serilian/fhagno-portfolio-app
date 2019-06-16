import React from 'react';
import PageContent from '../../PageContent/PageContent';

const title='About me';
const description='Some stuff about myself';

const about = () => {
    return (
        <PageContent title={title} description={description}>
            <a href="https://interviewme.pl/cv/filiphagno2">Online CV</a>
        </PageContent>
    );
};

export default about;
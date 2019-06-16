import React from 'react';
import PageContent from '../../PageContent/PageContent'


const title = 'Hello there!';

const description = (
    <>
        <p>Welcome to my world!</p>
        <hr/>
        <p>Check out my latest creations in portfolio and feel free to contact me however you prefer</p>);
    </>);

const home = () => {

    return (
        <PageContent title={title} description={description}>

        </PageContent>
    );
};

export default home;
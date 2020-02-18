import uuid from 'uuid/v4';

export const projects = [
    {
        id: uuid(),
        title: 'Student tracker',
        type: 'Web App - full stack',
        tech: 'Java, Spring Boot, Maven, React, AWS',
        description: 'Simple full stack react with springboot server app ',
        link: 'http://fullstackdemo-env.jt7yeenx5t.eu-central-1.elasticbeanstalk.com/'
    },
    {
        id: uuid(),
        title: 'Royal clothing',
        type: 'Website',
        tech: 'React, Sass, GraphQL, Stripe Payments, Firebase',
        description: 'Pet e-commerce app with integrated payments ',
        link: 'https://royal-clth-live.herokuapp.com'
    },
    {
        id: uuid(),
        title: 'TES UI',
        type: 'Website',
        tech: 'React, Emotion, Redux, React Router , Javascript',
        description: 'Sorry NDA, project for UBS ',
        link: ''
    },
    {
        id: uuid(),
        title: 'UBS app UI (sorry, NDA)',
        type: 'Website',
        tech: 'React, Emotion, Redux, React Router, Javascript ',
        description: 'POC of new version to replace legacy UI -Sorry NDA, can\'t say more ',
        link: ''
    },
    {
        id: uuid(),
        title: 'NY Economy Refrigeration',
        type: 'Mobile App',
        tech: 'React Native, Javascript',
        description: 'Mobile application supporting refrigeration service in NY area ',
        link: 'https://play.google.com/store/apps/details?id=com.nyrefservapp&hl=en'
    },
    {
        id: uuid(),
        title: 'GeekNet',
        type: 'Website',
        tech: 'React (with Hooks), Redux, Router, Node(Express), MongoDB, Heroku, Javascript',
        description: 'Pet project - network to connect with developers',
        link: 'https://morning-sands-92642.herokuapp.com/'
    },
    {
        id: uuid(),
        title: 'Smart-face-rec-app',
        type: 'Website',
        tech: 'React, Redux, Node(Express), PostgreSQL, Docker Heroku, AWS, Javascript',
        description: 'Pet project - app for smart face recognition in pictures',
        link: 'https://smart-face-rec.herokuapp.com/'
    },
    {
        id: uuid(),
        title: 'Personal Site',
        type: 'Website',
        tech: 'React, Redux, Router, Sass github-pages',
        description: 'This simple personal site',
        link: '/'
    },
    {
        id: uuid(),
        title: 'Economy Refrigeration',
        type: 'Website',
        tech: 'Wordpress',
        description: 'Company site for a refrigeration company from New York',
        link: 'http://nyeconomyrefrigeration.com/'
    },
    {
        id: uuid(),
        title: 'Modern GCR',
        type: 'Website',
        tech: 'HTML, JS, CSS, JQuery',
        description: 'Company site for a general contracting company from New York',
        link: 'http://moderngcr.com/'
    },

];
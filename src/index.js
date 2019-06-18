import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';


const app = (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();

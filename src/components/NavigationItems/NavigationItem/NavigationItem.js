import React from 'react';
import './NavigationItem.scss';
import {NavLink} from "react-router-dom";


const navigationItem = ({link, exact, children}) => {
    return (
        <li className="navigation-item">
            <NavLink
                exact={exact}
                to={link}
                activeClassName="active">
                {children}
            </NavLink>
        </li>
    )
};

export default navigationItem;
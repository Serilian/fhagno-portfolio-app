import React from 'react';
import './MobileMenuToggle.scss'

const mobileMenuToggle = ({clicked, open}) => {


    let classes = ['mobile-menu-toggle__menu-icon'];

    if(open) {
        classes = ['mobile-menu-toggle__menu-icon','mobile-menu-toggle__menu-icon--close-x'];
    }


    return (
        <div className="mobile-menu-toggle">
            <div onClick={clicked} className={classes.join(' ')}>
                <div className="mobile-menu-toggle__menu-icon__middle"></div>
            </div>
        </div>
    );
};

export default mobileMenuToggle;
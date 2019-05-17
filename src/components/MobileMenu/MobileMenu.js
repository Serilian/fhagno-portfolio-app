import React from 'react';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import './MobileMenu.scss'
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const mobileMenu = ({open, close}) => {

    let attachedClasses = ['mobile-menu', 'closed'];

    if (open) {
        attachedClasses = ['mobile-menu', 'open']
    }


    return (
        <>
            <Backdrop show={open} clicked={close}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    )
};

export default mobileMenu;
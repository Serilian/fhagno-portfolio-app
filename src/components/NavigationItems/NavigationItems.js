import React from 'react';
import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
    return (
        <ul className="navigation-items">
            <NavigationItem
                link="/" exact >Helloooo</NavigationItem>
            <NavigationItem
                link="/aboutMe">About me</NavigationItem>
            <NavigationItem
                link="/portfolio" >Project portfolio</NavigationItem>
            <NavigationItem
                link="/contact" >Contact</NavigationItem>
        </ul>
    )
};

export default navigationItems;
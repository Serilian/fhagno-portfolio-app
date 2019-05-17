import React, {Component} from 'react';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import './Header.scss'
import MobileMenuToggle from '../../components/MobileMenu/MobileMenuToggle/MobileMenuToggle';

class Header extends Component {


    render() {
        return (
            <div className="app-header">
                <MobileMenuToggle open={this.props.open} clicked={this.props.click} />
                <nav className="desktop-only">
                <NavigationItems />
                </nav>
                </div>
        );
    }
}

export default Header;
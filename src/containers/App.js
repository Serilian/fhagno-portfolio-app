import React, {Component} from 'react';
import Header from '../containers/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import AboutMe from '../components/Pages/AboutMe/About';
import Portfolio from '../components/Pages/Portfolio/Portfolio';
import Contact from '../components/Pages/Contact/Contact';
import Particles from 'react-particles-js';
import Footer from '../components/Footer/Footer';


const particlesOptions = {
    particles: {
        number: {
            value: 70
        },
        density: {
            enable: true,
            value_area: 600
        },
        color: {
            value: ['#000000']
        },
        line_linked: {
            color: '#000000',
            opacity: 1
        }
    },
};

class App extends Component {

    state = {
        showMobileMenu: false
    };

    mobileMenuToggle = () => {
        this.setState(prevState => {
            return {showMobileMenu: !prevState.showMobileMenu};
        })
    };

    closeMobileMenuHandler = () => {
        this.setState({showMobileMenu: false})
    };


    render() {
        return (
            <div className="app-container">
                <Particles className="particles"
                           params={particlesOptions}
                />
                    <Header click={this.mobileMenuToggle}
                            open={this.state.showMobileMenu}/>
                <MobileMenu open={this.state.showMobileMenu} close={this.closeMobileMenuHandler}/>

                <main className="content-container">
                    <Switch>

                        <Route path="/aboutMe" exact component={AboutMe} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>

                <footer>
                    <Footer />

                </footer>
            </div>
        );
    }
}

export default App;

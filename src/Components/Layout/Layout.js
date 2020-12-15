import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from '../_Aux/_Aux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/contact" component={ContactPage}/>
                </Switch>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;
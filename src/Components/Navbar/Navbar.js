import React, { Component } from 'react';
import classes from './Navbar.module.css';
import Manu from './Manu/Manu';
import SideDrawer from './SideDrawer/SideDrawer';
import { NavLink } from 'react-router-dom';
import Aux from '../_Aux/_Aux';

class Navbar extends Component {
    state = {
        sideDrawer: true
    }

    sideDrawerHandler = () => {
        const updateSideDrawer = !this.state.sideDrawer
        this.setState({
            sideDrawer: updateSideDrawer
        })
    }

    render() {
        return (
            <Aux>
                <SideDrawer close={this.sideDrawerHandler} open={this.state.sideDrawer}/>
            <div className={classes.Navbar}>
                <div className={classes.Logo}>
                    <NavLink to="/">
                        <i style={{ backgroundColor: 'none' }} className="fab fa-asymmetrik fa-3x"></i>
                    </NavLink>
                </div>
                <Manu clicked={this.sideDrawerHandler}/>
                <NavLink className={classes.Link} to="/">Home</NavLink>
                <NavLink className={classes.Link} to="/about">About</NavLink>
                <NavLink className={classes.Link} to="/contact">Contact</NavLink>
            </div>
            </Aux>
        )
    }
}

export default Navbar;
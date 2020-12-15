import React from 'react';
import classes from './SideDrawer.module.css';
import { NavLink } from 'react-router-dom';

const SideDrawer = (props) => {
    let dynamicClasses = null;
    if (props.open) {
        dynamicClasses = [classes.SideDrawer, classes.Close];
    } else {
        dynamicClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div className={dynamicClasses.join(' ')}>
            <i style={{ color: 'white', padding: '10px', marginTop: '5px' }} className="fab fa-asymmetrik fa-3x"></i>
            <NavLink onClick={props.close} to="/">Home</NavLink>
            <NavLink onClick={props.close} to="/about">About</NavLink>
            <NavLink onClick={props.close} to="/contact">Contact</NavLink>
        </div>
    )
}

export default SideDrawer;
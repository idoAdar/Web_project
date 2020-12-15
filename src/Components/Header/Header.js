import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
    
    render() {
        return (
            <div className={classes.bg}>
                <form className={classes.form}>
                    <h1>Go adventure</h1>
                    <p>Get Ready for your new journey</p>
                    <div className={classes.Login}>
                        <input type="text" placeholder="Enter your mail..."></input>
                        <button>LogIn</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Header;

import React from 'react';
import classes from './Manu.module.css';

const Manu = (props) => {
    return (
        <div onClick={props.clicked} className={classes.Manu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Manu;
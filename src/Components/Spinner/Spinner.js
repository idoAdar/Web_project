import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={classes.Position}>
            <div className={classes.loader}>Loading...</div>
        </div>
    )
}

export default Spinner;
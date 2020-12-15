import React from 'react';
import classes from './Backdrop.module.css';
import { withRouter } from 'react-router-dom';

const Backdrop = (props) => {
    const closeMsg = () => {
            props.history.push('/');
    }

    return (
        <div className={classes.Backdrop}>
                <div className={classes.Dropmsg}>
                    <div className={classes.HeadContainer}>
                    <h3>Great!</h3>
                </div>
                <div className={classes.PContainer}>
                    <p>One of our staff will reach you soon for more detalis</p>
                </div>
                <div className={classes.BtnPosition}>
                    <button onClick={closeMsg} className={classes.CloseBtn}><i className="fas fa-times fa-lg"></i></button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Backdrop);
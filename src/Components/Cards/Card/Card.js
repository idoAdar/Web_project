import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.setImg}>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;
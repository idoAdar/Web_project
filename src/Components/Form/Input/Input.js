import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let element = null;
    switch (props.elementType) {
        case ('input'):
            element = <input onChange={props.changed} {...props.config} className={classes.Input}/>
            break;
        case ('select'):
            element = <select onChange={props.changed} className={classes.Select}>
                        {props.config.options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.displayValue}</option>
                        })}
                    </select>;
            break;
        case ('inputCheckbox'):
            element = <div onChange={props.changed} className={classes.CheckboxContainer}>
                        <label className={classes.TextCheckbox}>I agree to receive marketing communications:</label>
                        <input {...props.config} className={classes.Checkbox}/>
                    </div>
            break;
        default:
    }

    return (
        <div className={classes.inputContainer}>
            {element}
        </div>
    )
}

export default Input;
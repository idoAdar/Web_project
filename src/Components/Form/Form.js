import React, { Component } from 'react';
import Input from './Input/Input';
import classes from './Form.module.css';
import Spinner from '../Spinner/Spinner';
import Backdrop from '../Backdrop/Backdrop';

class Form extends Component {
    state = {
        ordersForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            Phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone Number'
                },
                value: ''
            },
            country: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'israel', displayValue: 'Israel'},
                        {value: 'usa', displayValue: 'United State'},
                    ]
                },
                value: 'israel'
            },
            agree: {
                elementType: 'inputCheckbox',
                elementConfig: {
                    type: 'checkbox'
                }
            }
        },
        isLoading: false,
        submmit: false
    }

    sendingPostRequest = (e) => {
        e.preventDefault();
        const updateSummbit = this.state.submmit;
        this.setState({ isLoading: true })
        const data = {};
        for (let key in this.state.ordersForm) {
            data[key] = this.state.ordersForm[key].value;
        }

        fetch('https://web-project-open-default-rtdb.firebaseio.com/.json',
        { method: 'POST', body: JSON.stringify(data) })
            .then(response => {
                this.setState({ isLoading: false, submmit: !updateSummbit});
                 console.log(response);
            })
            .catch(err => {
                 console.log(err);
            })
    }

    inputsChangeHandler = (e, identifier) => {
        const updateState = {...this.state.ordersForm};
        const updateFormElement = updateState[identifier];
        updateFormElement.value = e.target.value;
        updateState[identifier] = updateFormElement;
        this.setState({ ordersForm: updateState });
    }
    
    render() {
        let spinner = null;
        if (this.state.isLoading) {
            spinner = <Spinner />
        }

        const ordersArray = [];
        for (let key in this.state.ordersForm) {
            ordersArray.push({
                id: key,
                config: this.state.ordersForm[key]
            });
        }

        let form = <form onSubmit={this.sendingPostRequest} className={classes.Form}>
                        {ordersArray.map((order) => {
                            return (
                               <Input 
                                    key={order.id}
                                    elementType={order.config.elementType} 
                                    config={order.config.elementConfig}
                                    changed={(e) => this.inputsChangeHandler(e, order.id)} />
                                    )
                            })}
                        <button className={classes.btn}>Sumbit</button>
                    </form>

        let backdrop = null;
        if (this.state.submmit) {
            backdrop = <Backdrop />
        }

        return (
            <div>
                <h1 className={classes.Title}>Please share with us your contact details:</h1>
                {backdrop}
                {spinner}
                {form}
            </div>
        )
    }
}

export default Form;
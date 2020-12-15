import React, { Component } from 'react';
import Card from './Card/Card';
import Aux from '../_Aux/_Aux';
import classes from './Cards.module.css';
import Img_1 from '../../images/img-1.jpg';
import Img_2 from '../../images/img-2.jpg';
import Img_3 from '../../images/img-3.jpg';
import Img_4 from '../../images/img-4.jpg';
import Img_5 from '../../images/img-8.jpg';


class Cards extends Component {
    render() {
        return (
            <Aux>
                <h1 className={classes.mainTitle}>View some of our best trip wordwide</h1>
            <div className={classes.Grid}>
            <Card 
                img={Img_1}
                title="Lorem"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                alt="red"/>
            <Card 
                img={Img_2}
                title="Another Lorem"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                alt="red"/>
            <Card 
                img={Img_3}
                title="And another one"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text."
                alt="red"/>
            </div>
            <div className={classes.Gridy}>
            <Card 
                img={Img_4}
                title="Lorem forever"
                text="It is a fact that a reader will be distracted by the readable content of a page."
                alt="red"/>
            <Card 
                img={Img_5}
                title="Lorem"
                text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                alt="red"/>
            </div>
            </Aux>
        )
    }
}

export default Cards;
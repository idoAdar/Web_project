import React from 'react';
import classes from './Profile.module.css';
import ProfileImg from '../../images/img-9.jpg';
import ProfileImg_2 from '../../images/img-6.jpg';
import Aux from '../_Aux/_Aux';

const Profile = () => {
    return (
        <Aux>
            <div className={classes.Container}>
                <div className={classes.fit}>
                    <div className={classes.Containerimg}>
                        <h3>Worldwide tropical journey</h3>
                        <img className={classes.ProfileImg} src={ProfileImg} alt={"profileImg"}/>
                    </div>
                    <div className={classes.ProfileContent}>
                        <h4>A littel more about lorem:</h4>
                        <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure
                        there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined 
                        chunks as necessary, making this the first true generator on the Internet.
                        </p>
                    </div>
                </div>
                <div className={classes.fit}>
                    <div className={classes.Containerimg}>
                        <h3>Our life is a journey</h3>
                        <img className={classes.ProfileImg} src={ProfileImg_2} alt={"profileImg"}/>
                    </div>
                    <div className={classes.ProfileContent}>
                        <h4>A littel more about lorem:</h4>
                        <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure
                        there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined 
                        chunks as necessary, making this the first true generator on the Internet.
                        </p>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default Profile;
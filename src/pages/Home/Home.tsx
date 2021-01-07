import React from 'react';
import { SliderBar } from '@UI';
import classes from './Home.module.scss';

const Home = () => {
    return (
        <div className={classes.SliderBackground}>
            <SliderBar items={[]} />
            <div className="container">
                <h1>This is home page</h1>
            </div>
        </div>
        
    );
}

export default Home;
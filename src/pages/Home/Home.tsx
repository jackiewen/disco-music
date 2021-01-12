import React from 'react';
import { SliderBar } from '@UI';
import classes from './Home.module.scss';
import { Box } from '@UI';

const Home = () => {
    return (
        <>
        <div className={classes.SliderBackground}>
            <SliderBar items={[]} />
            
        </div>
        <div className="container">
            {/* <h1>Album mới nhất 2021</h1> */}
            <div className="row" style={{height: "100vh"}}>
                <div className="col-md-9">
                    <Box title="Album mới nhất 2021" href="/new">

                    </Box>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
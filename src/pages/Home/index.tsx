import React from 'react';
import { Link } from 'react-router-dom';
import SliderBar from '@UI/SliderBar';
import classes from './Home.module.scss';
import Box from '@UI/Box';
import LatestAlbum from '@partials/LatestAlbum';
import StyleSliderBar from '@UI/StyleSliderBar';

const Home = () => {
    return (
        <>
        <div className={classes.SliderBackground}>
            <SliderBar items={[]} />
            
        </div>
        <div className="container">
            <div className="row" style={{height: "100vh"}}>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12">
                            <Box>
                                <Box.Header className="px-2 pt-3">
                                    <Box.Title className="active-text-color text-uppercase-first-letter">Album mới nhất 2021</Box.Title>
                                    <Box.Tool>
                                        <Link className="mute-link text-uppercase-first-letter" to="/view-all">view all</Link>
                                    </Box.Tool>
                                </Box.Header>
                                <Box.Body>
                                    <LatestAlbum />
                                </Box.Body>
                            </Box>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pt-3">
                            <StyleSliderBar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pt-3">
                            <Box>
                                <Box.Header className="px-2 pt-3">
                                    <Box.Title className="active-text-color text-uppercase-first-letter">Bài hát mới chia sẻ</Box.Title>
                                    <Box.Tool>
                                        <Link className="mute-link text-uppercase-first-letter" to="/view-all">view all</Link>
                                    </Box.Tool>
                                </Box.Header>
                                <Box.Body>
                                    <LatestAlbum />
                                </Box.Body>
                            </Box>
                        </div>
                        <div className="col-md-6 pt-3">
                            <Box>
                                <Box.Header className="px-2 pt-3">
                                    <Box.Title className="active-text-color text-uppercase-first-letter">Download mới nhất</Box.Title>
                                    <Box.Tool>
                                        <Link className="mute-link text-uppercase-first-letter" to="/view-all">view all</Link>
                                    </Box.Tool>
                                </Box.Header>
                                <Box.Body>
                                    <LatestAlbum />
                                </Box.Body>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
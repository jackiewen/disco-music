import React from 'react';
import { Link } from 'react-router-dom';
import SliderBar from '@UI/SliderBar';
import classes from './Home.module.scss';
import Box from '@UI/Box';
import LatestAlbum from '@partials/LatestAlbum';
import NewSongSharing from '@partials/NewSongSharing';
import LatestDownload from '@partials/LatestDownload';
import SmallSliderBar from '@src/features/UI/SmallSliderBar';
const mainSliderItems = require('@mockups/slider-items.json');
const styleSliderItems = require('@mockups/style-slider-items.json');
const topicSliderItems = require('@mockups/topic-slider-items.json');

const Home = () => {
    return (
        <>
        <div className={classes.SliderBackground}>
            <SliderBar sliderItems={mainSliderItems} />
            
        </div>
        <div className="container">
            <div className="row" style={{height: "100vh"}}>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 py-2">
                            <Box>
                                <Box.Header className="px-2">
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
                        <div className="col-md-12 py-2">
                            <SmallSliderBar sliderItems={styleSliderItems} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 py-2">
                            <Box>
                                <Box.Header className="px-2">
                                    <Box.Title className="active-text-color text-uppercase-first-letter">Bài hát mới chia sẻ</Box.Title>
                                    <Box.Tool>
                                        <Link className="mute-link text-uppercase-first-letter" to="/view-all">view all</Link>
                                    </Box.Tool>
                                </Box.Header>
                                <Box.Body>
                                    <NewSongSharing />
                                </Box.Body>
                            </Box>
                        </div>
                        <div className="col-md-6 py-2">
                            <Box>
                                <Box.Header className="px-2">
                                    <Box.Title className="active-text-color text-uppercase-first-letter">Download mới nhất</Box.Title>
                                    <Box.Tool>
                                        <Link className="mute-link text-uppercase-first-letter" to="/view-all">view all</Link>
                                    </Box.Tool>
                                </Box.Header>
                                <Box.Body>
                                    <LatestDownload />
                                </Box.Body>
                            </Box>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 py-2">
                            <SmallSliderBar sliderItems={topicSliderItems} />
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
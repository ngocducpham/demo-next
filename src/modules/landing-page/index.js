import React, { Fragment } from 'react';
import Hero from './Hero/Hero';
import Locations from './Locations/Locations';

const LandingPage = ({ news }) => {
    return (
        <Fragment>
            <Hero />
            <Locations news={news} />
        </Fragment>
    );
};

export default LandingPage;

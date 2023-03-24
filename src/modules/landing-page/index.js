import React, { Fragment } from 'react';
import Hero from './Hero/Hero';
import Locations from './Locations/Locations';

const LandingPage = () => {
    return (
        <Fragment>
            <Hero />
            <Locations />
        </Fragment>
    );
};

export default LandingPage;

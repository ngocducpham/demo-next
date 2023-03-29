import Head from 'next/head';
import React, { Fragment } from 'react';
import Hero from './hero/Hero';
import Homes from './mainContent/homes/Home';

const LandingPageMobile = ({ news }) => {
    return (
        <Fragment>
            <Hero news={news} />
            <Homes news={news} />
        </Fragment>
    );
};

export default LandingPageMobile;

import RenderContext from '@/components/common/RenderContext';
import PublicLayout from '@/components/layout/PublicLayout';
import useDevices from '@/hooks/useDevices';
import Head from 'next/head';
import React, { Fragment } from 'react';
import Hero from './hero/Hero';
import Homes from './mainContent/homes/Home';

const Landing = ({ news }) => {
    const Desktop = () => {
        return (
            <>
                <Head>
                    <title>Demo Landing Page</title>
                </Head>
                <Fragment>
                    <Hero news={news} />
                    <Homes news={news} />
                </Fragment>
            </>
        );
    };

    const Mobile = () => {
        return (
            <>
                <Head>
                    <title>Demo Landing Page</title>
                </Head>
                <Fragment>
                    <div>This is mobile layout</div>
                </Fragment>
            </>
        );
    };
    return <RenderContext layout={{ theme: PublicLayout }} desktop={{ device: Desktop }} mobile={{ device: Mobile }} />;
};

export default Landing;

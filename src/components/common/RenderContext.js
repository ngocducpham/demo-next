import useDevices from '@/hooks/useDevices';
import Head from 'next/head';
import React, { Fragment } from 'react';

const RenderContext = ({ desktop, mobile, initDevice, title = '', ...props }) => {
    const device = useDevices();
    const isMobile = initDevice === undefined ? device : initDevice;
    const Component = isMobile ? mobile?.device : desktop?.device;
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <Component {...props} />
        </Fragment>
    );
};

export default RenderContext;

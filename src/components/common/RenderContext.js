import useDevices from '@/hooks/useDevices';
import React from 'react';
import PublicLayout from '../layout/PublicLayout';
import { Spin } from 'antd';
const RenderContext = ({ desktop, mobile, layout }) => {
    const { isMobile } = useDevices();
    const ComponentLayout = layout?.theme || PublicLayout;
    const Component = isMobile ? mobile?.device : isMobile === null ? Spin : desktop?.device;
    return (
        <ComponentLayout>
            <Component />
        </ComponentLayout>
    );
};

export default RenderContext;

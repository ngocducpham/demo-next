import useDevices from '@/hooks/useDevices';
import React from 'react';
import PublicLayout from '../layout/PublicLayout';

const RenderContext = ({ desktop, mobile, layout }) => {
    const { isMobile } = useDevices();
    const ComponentLayout = layout?.theme || PublicLayout;
    const Component = isMobile ? mobile?.device : desktop?.device;
    return (
        <ComponentLayout>
            <Component />
        </ComponentLayout>
    );
};

export default RenderContext;

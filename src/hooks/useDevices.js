import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';
const calcDevices = (width) => {
    const isMobile = width < 768;
    const isDesktop = !isMobile;
    return { isMobile, isDesktop };
};

const useDevices = () => {
    const [devices, setDevices] = useState(false);

    const handleResize = (e) => {
        setDevices(calcDevices(e.target.innerWidth));
    };
    useEffect(() => {
        const parser = new UAParser();
        const isMobile = parser.getDevice().type === 'mobile';
        setDevices(isMobile);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return devices;
};

export default useDevices;

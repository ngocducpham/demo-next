import { useEffect, useState } from 'react';
const calcDevices = (width) => {
    const isMobile = width < 768;
    const isDesktop = !isMobile;
    return { isMobile, isDesktop };
};

const useDevices = () => {
    const [devices, setDevices] = useState({ isMobile: null, isDesktop: null });

    const handleResize = (e) => {
        setDevices(calcDevices(e.target.innerWidth));
    };
    useEffect(() => {
        setDevices(calcDevices(window.innerWidth));
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

import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

const useDevices = () => {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const parser = new UAParser();
        const result = parser.getResult();

        setIsMobile(result.device.type === "mobile");
    }, []);

    return isMobile;
};

export default useDevices;

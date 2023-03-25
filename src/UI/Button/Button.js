import { useRouter } from 'next/router';
import React from 'react';

import classes from './Button.module.scss';

const Button = ({ outline, children, onClick, to }) => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                onClick && onClick();
                router.push(to);
            }}
            className={`${classes.button} ${outline ? classes.outline : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;

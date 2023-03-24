import Link from 'next/link';
import React from 'react';

import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <Link href="/" className={classes.logo}>
            <span>Demo</span>
        </Link>
    );
};

export default Logo;

import Button from '@/UI/Button/Button';
import Image from 'next/image';
import React, { Fragment } from 'react';

import background from '../../../assets/background.jpg';

import classes from './Hero.module.scss';

const HomePageContent = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>Demo NextJs App</h1>
            <p className={classes.hero__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </Fragment>
    );
};

const Hero = ({ isDynmic, children }) => {
    return (
        <div className={classes.container}>
            I<Image src={background} alt="" />
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    {!isDynmic && <HomePageContent />}
                    {isDynmic && <h1 className={classes.hero__content__title}>{children}</h1>}
                </div>
            </div>
        </div>
    );
};

export default Hero;

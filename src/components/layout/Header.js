import Logo from '@/UI/Logo/Logo';
import React from 'react';
import Nav from './Nav/Nav';
import classes from './Header.module.scss';
const Header = () => {
    return (
        <header className={classes.header}>
            <Logo />
            <Nav />
            <div className={classes.header__menu}>
                {/* <div className={classes.header__menu__toggle}>{menuToggle}</div> */}
                <aside className={classes.menu}>
                    <Nav isMenu />
                </aside>
            </div>
        </header>
    );
};

export default Header;

import useAuth from '@/hooks/useAuth';
import Button from '@/UI/Button/Button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

import classes from './Nav.module.scss';

const Nav = ({ isMenu, menuToggle }) => {
    // const { profile } = useAuth();
    const { data } = useSession();

    return (
        <nav className={classes.nav}>
            <ul>
                {data ? (
                    <>
                        {' '}
                        <li>
                            <Link href="/profile">Hello {data.user.fullName}</Link>
                        </li>
                        <li>
                            <a onClick={signOut}>Log out</a>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link href="/login">Log in</Link>
                    </li>
                )}
            </ul>

            <Button to="https://shop-cms.developteam.net/admins" className={classes.booknow} onClick={menuToggle}>
                CMS
            </Button>
        </nav>
    );
};

export default Nav;

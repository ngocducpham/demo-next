import React, { useState } from 'react';
import Head from './Head';
import Link from 'next/link';
import styles from './header.module.css';
import { signOut, useSession } from 'next-auth/react';
import { showSucsessMessage } from '@/services/notifyService';
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const session = useSession();
    console.log('session', session);

    return (
        <>
            <Head />
            <header className={styles.header}>
                <div className="container paddingSmall">
                    <nav>
                        <ul className={navbar ? 'navbar' : 'flex'} onClick={() => setNavbar(false)}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            {session.data?.user ? (
                                <>
                                    <li>
                                        <Link href="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                signOut();
                                                showSucsessMessage('Log out success');
                                            }}
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                        <button className={styles.barIcon} onClick={() => setNavbar(!navbar)}>
                            {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

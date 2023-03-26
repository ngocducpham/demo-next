import React, { useState } from 'react';
import Head from './Head';
import Link from 'next/link';
import styles from './header.module.css';
const Header = () => {
    const [navbar, setNavbar] = useState(false);

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
                            <li>
                                <Link href="/culture">Culture</Link>
                            </li>
                            <li>
                                <Link href="/politics">Politics</Link>
                            </li>
                            <li>
                                <Link href="/memes">Memes</Link>
                            </li>
                            <li>
                                <Link href="/sports">Sports</Link>
                            </li>
                            <li>
                                <Link href="/boxed">Boxed</Link>
                            </li>
                            <li>
                                <Link href="/reviews">Reviews</Link>
                            </li>
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

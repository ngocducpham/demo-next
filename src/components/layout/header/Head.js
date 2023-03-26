import React from 'react';
import logo from '@/assets/images/logo.png';
import headerb from '@/assets/images/headerb.png';
import Image from 'next/image';
import styles from './header.module.css';
const Head = () => {
    return (
        <>
            <section className={styles.head}>
                <div className="container flexSB paddingTB">
                    <div className={styles.logo}>
                        <Image className={styles.img} src={logo} alt="" />
                    </div>
                    <div className="ad">
                        <Image src={headerb} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;

import React from 'react';
import logo from '@/assets/images/logo-vnexpress.jpg';
import headerb from '@/assets/images/unnamed.jpg';
import Image from 'next/image';
import styles from './header.module.css';
const Head = () => {
    return (
        <>
            <section className={styles.head}>
                <div className="container flexSB paddingTB">
                    <div className={styles.ad}>
                        <Image className={styles.imgLogo} src={headerb} width={1000} height={1000} alt="" />
                    </div>
                    <div className={styles.logo}>
                        <Image className={styles.img} width={500} src={logo} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;

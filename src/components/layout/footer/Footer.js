import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';
import logo from '@/assets/images/logo-vnexpress.jpg';
import hero1 from '@/assets/images/hero/hero1.jpg';
import hero2 from '@/assets/images/hero/hero2.jpg';
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={classNames(styles.box, styles.logo)}>
                        <Image src={logo} alt="" />
                        <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
                        <i className="fa fa-envelope"></i>
                        <span> demo@beautiful.com </span> <br />
                        <i className="fa fa-headphones"></i>
                        <span> +99 9999999</span>
                    </div>
                </div>
            </footer>
            <div className={styles.legal}>
                <div className="container flexSB">
                    <p>© all rights reserved</p>
                    <p>
                        made with <i className="fa fa-heart"></i> by sonson
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;

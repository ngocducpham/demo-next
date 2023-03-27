import React from 'react';
import styles from './index.module.css';
import Heading from '@/components/common/heading/Heading';
import SocialMedia from '@/components/common/social/SocialMedia';

const Side = () => {
    return (
        <>
            <Heading title="Stay Connected" />
            <SocialMedia />

            <Heading title="Subscribe" />

            <section className={styles.subscribe}>
                <h1 className={styles.title}>Subscribe to our New Stories</h1>
                <form action="">
                    <input type="email" placeholder="Email Address..." />
                    <button>
                        <i className="fa fa-paper-plane"></i> SUBMIT
                    </button>
                </form>
            </section>
        </>
    );
};

export default Side;

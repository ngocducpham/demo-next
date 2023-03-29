import Side from '@/components/common/side/Side';
import React from 'react';
import Popular from '../popular/Popular';
import styles from './index.module.css';

const Homes = ({ news }) => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.mainContent}>
                        <Popular news={news}/>
                    </section>
                    <section className={styles.sideContent}>
                        <Side />
                    </section>
                </div>
            </main>
        </>
    );
};

export default Homes;

import Side from '@/components/common/side/Side';
import { formatDateString } from '@/utils';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
const NewDetailMobile = ({ news }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={classNames(styles.mainContent, styles.details)}>
                    <h1 className={styles.title}>{news.title}</h1>

                    <div className={styles.author}>
                        <span style={{ marginRight: '10px' }}>by {news.createdBy} on </span>
                        {/* <img src={news.authorImg} alt="" /> */}
                        <label>{formatDateString(news.createdDate) || ''}</label>
                    </div>

                    <div className={styles.social}>
                        <div className={styles.socBox}>
                            <i className="fab fa-facebook-f"></i>
                            <span>SHARE</span>
                        </div>
                        <div className={styles.socBox}>
                            <i className="fab fa-twitter"></i>
                            <span>TWITTER</span>
                        </div>
                        <div className={styles.socBox}>
                            <i className="fab fa-pinterest"></i>
                        </div>
                        <div className={styles.socBox}>
                            <i className="fa fa-envelope"></i>
                        </div>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: news.content }}></div>
                </section>
                <section className={styles.sideContent}>
                    <Side />
                </section>
            </div>
        </main>
    );
};

export default NewDetailMobile;

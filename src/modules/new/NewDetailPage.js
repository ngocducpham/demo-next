import React, { Fragment } from 'react';
import styles from './index.module.scss';
const NewDetailPage = ({ news }) => {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.title}>{news.title}</div>
                <div className={styles.description}>{news.description}</div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: news.content }}></div>
            </div>
        </Fragment>
    );
};

export default NewDetailPage;

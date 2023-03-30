import React from 'react';
import styles from './index.module.scss';
import LoadingSpin from 'react-loading-spin';
const LoadingPage = () => {
    return (
        <div className={styles.container}>
            <LoadingSpin size="large" />
        </div>
    );
};

export default LoadingPage;

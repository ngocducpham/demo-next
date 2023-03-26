import React from 'react';
import styles from './index.module.css';

const Heading = ({ title }) => {
    return (
        <>
            <div className={styles.heading}>
                <h6>{title}</h6>
            </div>
        </>
    );
};

export default Heading;

import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import styles from './index.module.scss';
import dynamic from 'next/dynamic';

const Loading = ({ show = false }) => {
    const [ node ] = useState(document.createElement('div'));

    useEffect(() => {
        show && document.body.appendChild(node);

        return () => show && document.body.removeChild(node);
    }, [ node, show ]);

    return ReactDOM.createPortal(
        <div className={styles.loadingContainer}>
            <Spin size="large" />
        </div>,
        node,
    );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: false });

import React, { useState } from 'react';
import styles from './hero.module.css';
import Card from './Card';
const Hero = ({ news }) => {
    const [ items, setIems ] = useState(news.data || []);

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.container}>
                    {items.map((item, index) => index < 4 && <Card key={index} item={item} />)}
                </div>
            </section>
        </>
    );
};

export default Hero;

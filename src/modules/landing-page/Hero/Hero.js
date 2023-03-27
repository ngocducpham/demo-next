import React, { useState } from 'react';
import { hero } from '@/dummyData';
import styles from './hero.module.css';
import Card from './Card';
const Hero = ({ news }) => {
    const [items, setIems] = useState(news.data || []);

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.container}>
                    {items.map((item, index) => {
                        return <>{index < 4 ? <Card key={item.id} item={item} /> : <></>}</>;
                    })}
                </div>
            </section>
        </>
    );
};

export default Hero;

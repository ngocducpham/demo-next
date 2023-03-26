import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './hero.module.css';
import classNames from 'classnames';
const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.img}>
                    <Image width={1000} src={cover} alt="" />
                </div>
                <div className={styles.text}>
                    <span className={styles.category}>{catgeory}</span>
                    {/*<h1 className='titleBg'>{title}</h1>*/}
                    <Link href={`/SinglePage/${id}`}>
                        <h1 className={styles.titleBg}>{title}</h1>
                    </Link>
                    <div className="author flex">
                        <span>by {authorName}</span>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

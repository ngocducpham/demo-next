import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './hero.module.css';
import classNames from 'classnames';
import { formatDateString, imageLoader } from '@/utils';
const Card = ({ item: { id, avatar, description, title, createdBy, createdDate } }) => {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.img}>
                    <Image width={1280} height={1024} src={imageLoader(avatar)} alt="" />
                </div>
                <div className={styles.text}>
                    <span className={styles.category}>{description}</span>
                    {/*<h1 className='titleBg'>{title}</h1>*/}
                    <Link href={`/news/${id}`}>
                        <h1 className={styles.titleBg}>{title}</h1>
                    </Link>
                    <div className={classNames(styles.author, 'flex')}>
                        <span>by {createdBy}</span>
                        <span>
                            {formatDateString(createdDate)}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

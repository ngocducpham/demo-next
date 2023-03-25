import React from 'react';

import classes from './Locations.module.scss';

import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';

import Link from 'next/link';
import Image from 'next/image';
import { AppConstants } from '@/constants';
import { useRouter } from 'next/router';

const myLoader = ({ src }) => {
    return `${AppConstants.contentRootUrl}${src}`;
};

const Locations = ({ page, news }) => {
    const mapData = news.data;
    const router = useRouter();
    const handleClick = (id) => {
        router.push(`/news/${id}`);
    };
    return (
        <div className={classes.container}>
            <div className={`${classes.locations} ${page ? classes.page : ''}`}>
                <div className={classes.locations__content}>
                    <h2 className={classes.locations__content__title}>Discover a New</h2>
                    <div className={classes.locations__content__gallery}>
                        {mapData.map((item, index) => (
                            <div className={classes.gallery__item} key={index} onClick={() => handleClick(item.id)}>
                                <Image
                                    loader={myLoader}
                                    src={item.avatar}
                                    alt={item.title}
                                    width={200}
                                    height={150}
                                    className={classes.gallery__item__img}
                                />
                                <div className={classes.overlay} />
                                <div className={classes.gallery__item__content}>
                                    <h2 className={classes.gallery__item__content__location}>{item.title}</h2>
                                </div>
                                {item.pinTop > 0 && <div className={classes.gallery__item__tag}>Top</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;

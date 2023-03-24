import React from 'react';

import classes from './Locations.module.scss';

import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';

import Link from 'next/link';
import Image from 'next/image';

const locationData = [
    { id: 1, location: 'Bora Bora', isFeatured: true },
    { id: 2, location: 'Maldives', isFeatured: true },
    { id: 3, location: 'Cabo San Lucas', isFeatured: false },
    { id: 4, location: 'Croatia', isFeatured: false },
    { id: 5, location: 'Greece', isFeatured: false },
    { id: 6, location: 'Albania', isFeatured: true },
    { id: 7, location: 'Bora Bora', isFeatured: true },
    { id: 8, location: 'Maldives', isFeatured: true },
    { id: 9, location: 'Cabo San Lucas', isFeatured: false },
];

const Locations = ({ page }) => {
    const mapData = !page ? locationData.slice(0, 6) : locationData;
    return (
        <div className={classes.container}>
            <div className={`${classes.locations} ${page ? classes.page : ''}`}>
                <div className={classes.locations__content}>
                    <h2 className={classes.locations__content__title}>Discover a New</h2>
                    <div className={classes.locations__content__gallery}>
                        {mapData.map(({ id, location, isFeatured, img }) => (
                            <div className={classes.gallery__item} key={id}>
                                <Image src={img} alt={location} className={classes.gallery__item__img} />
                                <div className={classes.overlay} />
                                <div className={classes.gallery__item__content}>
                                    <h2 className={classes.gallery__item__content__location}>{location}</h2>
                                </div>
                                {isFeatured && <div className={classes.gallery__item__tag}>Featured</div>}
                            </div>
                        ))}
                    </div>
                    {!page && (
                        <div className={classes.locations__content__viewmore}>
                            <Link href="/locations">
                                view more <BsArrowRight />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Locations;

import React from 'react';
import styles from './index.module.css';

import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Heading from '@/components/common/heading/Heading';
import classNames from 'classnames';
import Image from 'next/image';
import { formatDateString, imageLoader } from '@/utils';
import { useRouter } from 'next/router';

const Popular = ({ news }) => {
    const router = useRouter();
    const settings = {
        className: 'center',
        centerMode: false,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 2,
        speed: 500,
        rows: 4,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 4,
                },
            },
        ],
    };
    return (
        <>
            <section className={styles.popular}>
                <Heading title="Popular" />
                <div className="content">
                    <Slider {...settings}>
                        {news.data.map((val, index) => {
                            return (
                                <div className={styles.items} key={index}>
                                    <div
                                        onClick={() => router.push(`/news/${val.id}`)}
                                        className={classNames(styles.box, 'shadow')}
                                    >
                                        <div className={classNames(styles.images, 'row')}>
                                            <div className={styles.img}>
                                                <Image width={500} height={500} src={imageLoader(val.avatar)} alt="" />
                                            </div>
                                            <div class="category category1">
                                                <span>{val.description}</span>
                                            </div>
                                        </div>
                                        <div className={classNames(styles.text, 'row')}>
                                            <h1 className="title">{val.title.slice(0, 40)}...</h1>
                                            <div className={styles.date}>
                                                <i class="fas fa-calendar-days"></i>
                                                <label>{formatDateString(val.createdDate)}</label>
                                            </div>
                                            <div className={styles.comment}>
                                                <i class="fas fa-comments"></i>
                                                <label>{0}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Popular;

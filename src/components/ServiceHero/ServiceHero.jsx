import React from 'react';
import styles from './style.module.css';

export const ServiceHero = ({
    image = '',
    video = '',
    title = '',
    desc = '',
    max_width_more = ''
}) => {

    const backgroundStyle = image ? { backgroundImage: `url(${image})` } : {};
    return (
        <section
            className={`${styles.section} ${styles.bg}`}
            style={backgroundStyle}
        >
            <div className={`relative ${styles.service_wrapper}`}>
                {video ? (
                    <>
                        <video src={video} alt="video" className={styles.bg_service} controls autoPlay muted loop />

                        <div className={`${styles.service_content} ${max_width_more === 1 ? styles.max_width_more : ''}`}>
                            <h2 className='title center'>
                                {title}
                            </h2>

                            <p className={styles.service_desc}>
                                {desc}
                            </p>
                        </div>
                    </>
                ) : image ? (
                    <div className={styles.heroImage}>
                        {/* <img className={styles.bg_service} src={image} alt={title} /> */}

                        <div className={`${styles.service_content} ${max_width_more === 1 ? styles.max_width_more : ''}`}>
                            <h2 className='title center mb-10'>
                                {title}
                            </h2>

                            <p className={styles.service_desc}>
                                {desc}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};


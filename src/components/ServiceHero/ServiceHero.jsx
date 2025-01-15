import React from 'react';
import styles from './style.module.css';

export const ServiceHero = ({
    image = '',
    video = '',
    title = '',
    desc = ''
}) => {
    return (
        <section className={styles.section}>
            <div className={`relative ${styles.service_wrapper}`}>
                {video ? (
                    <>
                        <video src={video} alt="video" className={styles.bg_service} controls autoPlay muted loop />
                        
                        <div className={styles.service_content}>
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
                            <img className={styles.bg_service} src={image} alt={title} />
                            
                             <div className={styles.service_content}>
                                <h2 className='title center'>
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


import { Helmet } from "react-helmet";
import styles from '../styles/service_transport.module.css';
import React, { useState, useEffect } from 'react';


import our_1 from '/service/our_1.png';
import our_2 from '/service/our_2.png';
import our_3 from '/service/our_3.png';

import { GetCost } from "../sections";
import VideoSection from "../components/VideoSection/VideoSection";
export default function ServiceTransport() {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let src;

    if (screenWidth >= 1024) {
        src = our_1;
    } else if (screenWidth < 1024 && screenWidth > 480) {
        src = our_2
    } else {
        src = our_3
    }

    const data = [
        {
            'content': 'Грузовые бортовые автомобили с манипулятором грузоподъемностью 3, 5, 7 тонн',
            'img': '../service/car_1.png',
        },

        {
            'content': 'Самосвалы с прицепами общей грузоподьемностью 25 тонн, оборудованные грейферными  установками грузоподъемностью 1, 3, 5 тонн',
            'img': '../service/car_2.png',
        },

        {
            'content': 'Экскаваторы массой от 28 до 40 тонн, оборудованные гидравлическими ножницами, грейферными захватами, ковшами',
            'img': '../service/car_3.png',
        },

        {
            'content': 'Седельные тягачи (контейнеровозы, ломовозы опен топ) грузоподъемностью 25 тонн',
            'img': '../service/car_4.png',
        },

        {
            'content': 'Специальные мультилифты с прицепами грузоподьемностью 25 тонн',
            'img': '../service/car_5.png',
        },
        {
            'content': 'Вилочные погрузчики грузоподьемностью 1, 3, 5 тонн',
            'img': '../service/car_6.png',
        },
        {
            'content': 'Самосвалы грузоподъемностью 15 тонн',
            'img': '../service/car_7.png',
        },


    ]
    return (
        <>
            <Helmet>
                <title>ГК "Восточный Альянс" - ТРАНСПОРТНЫЕ УСЛУГИ</title>
                <meta name="description" content=">ГК Восточный Альянс - ТРАНСПОРТНЫЕ УСЛУГИ" />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="ТРАНСПОРТНЫЕ УСЛУГИ" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://va.eco/service_transport" />
                <meta property="og:type" content="website" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://va.eco/service_transport" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <VideoSection />

            <section className={styles.section}>
                <div className={`${styles.container} container`}>
                    <h2 className="title toggle_color center">Перечень техники ГК «Восточный Альянс»</h2>
                    <ul className={styles.car_list}>
                        {data.map((item, idx) => {
                            return (
                                <li key={idx} className={styles.item}>
                                    <div className="image-wrapper">
                                        <img src={item.img} alt="" className={styles.item_img} />
                                    </div>
                                    <p className={styles.item_content}>
                                        {item.content}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.page_wrapper} page-wrapper`}>
                    <img src={src} className={styles.img_item} width={1880} height={551} alt="" />
                </div>
            </section>

            <GetCost />

        </>
    )
}

import { Helmet } from "react-helmet";

import styles from '../styles/service_transport.module.css';

import { ServiceHero } from "../components/index";

import React, { useState, useEffect } from 'react';


import our_1 from '/service/our_1.png';
import our_2 from '/service/our_2.png';
import our_3 from '/service/our_3.png';

import { GetCost } from "../sections";
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

        if(screenWidth >= 1440){
            src = our_1;
        } else if(screenWidth >= 769){
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
            'content': 'Самосвалы с прицепами общей грузоподьемностью 25 тонн, оборудованные грейферными  установками грузоподъемностью 1,5,3 тонны',
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
            'content': 'Вилочные погрузчики грузоподьемностью 1, 5, 3, 5 тонн',
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
                <title>ТРАНСПОРТНЫЕ УСЛУГИ</title>
                <meta name="description" content="Описание вашей компании, услуг и уникальных преимуществ." />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="ТРАНСПОРТНЫЕ УСЛУГИ" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://example.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card (for Twitter sharing) */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="О компании - Ваша компания" />
                <meta name="twitter:description" content="Описание вашей компании и услуг." />
                <meta name="twitter:image" content="URL_картинки_для_шеринга" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://example.com/about" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <ServiceHero
                title="ТРАНСПОРТНЫЕ УСЛУГИ"
                image="/service/service_2.png"
                desc="Имеем большой парк автомобилей для организации погрузки и вывоза лома своими силами."
            />

            <section className={styles.section}>
                <div className="container">
                    <h2 className="title">Перечень техники ГК «Восточный Альянс»</h2>
                    <ul className={styles.car_list}>
                        {data.map((item, idx) => {
                            return (
                                <li key={idx} className={styles.item}>
                                    <img src={item.img} alt="" className={styles.item_img} />
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
                <div className="page-wrapper">
                    <img src={src} className={styles.img_item} alt="" />
                </div>
            </section>

            <GetCost />

        </>
    )
}

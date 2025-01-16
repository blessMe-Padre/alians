import { Helmet } from "react-helmet";

import styles from '../styles/price.module.css';

import { ServiceHero } from "../components";
import { HaveQuestion, Faq } from "../sections";
export default function Price() {

    const data = [
        {
            title: 'Черный лом',
            data: [
                {
                    type: 'Лом марки 3А',
                    cost: '14 000 ₽ / тонна',
                },
                {
                    type: 'Лом марки 5А',
                    cost: '11 900 ₽ / тонна',
                },
                {
                    type: 'Лом марки 8А, 9А',
                    cost: '13 500 ₽ / тонна',
                },
                {
                    type: 'Лом марки 12А',
                    cost: '11 500 ₽ / тонна',
                },
                {
                    type: 'Лом марки 13А',
                    cost: '6 500 ₽ / тонна',
                },
                {
                    type: 'Лом марки 13А-1 ',
                    cost: '12 100 ₽ / тонна',
                },
                {
                    type: 'Стружка, пакетированный лом  ',
                    cost: 'Не принимаются',
                },
            ]
        },
        {
            title: 'Цветной лом',
            data: [
                {
                    type: 'Лом меди  ',
                    cost: '720 000 ₽ / тонна',
                },
                {
                    type: 'Лом бронзы ',
                    cost: '525 000 ₽ / тонна',
                },
                {
                    type: 'Лом латуни ',
                    cost: '425 000 ₽ / тонна',
                },
                {
                    type: 'Лом АКБ',
                    cost: '58 000 ₽ / тонна',
                },
                {
                    type: 'Лом алюминия',
                    cost: '130 000 ₽ / тонна',
                },
                {
                    type: 'Лом нержавейки (10%)',
                    cost: '60 000 ₽ / тонна',
                },
                {
                    type: '',
                    cost: '',
                },
               
            ]
        },
    ];
    

    return (
        <>
            <Helmet>
                <title>Цены страница - Ваша компания</title>
                <meta name="description" content="Описание вашей компании, услуг и уникальных преимуществ." />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="О компании - Ваша компания" />
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
                image="../info/price.png"
            />

            
            <section className={styles.section}>
                <div className="container">
                    <h2 className="title_blue toggle_color center">Актуальные Цены на приём металлолома на 01.11.2024*</h2>
                
                    <div className={styles.wrapper}>
                        {data.map((item, index) => {

                            return (
                                <div key={index}>
                                    <h3 className={styles.item_title}>{item.title}</h3>
                                    <tr className={index % 2 ? `${styles.bg_head_blue}` : `${styles.bg_head_orange}`}>
                                        <th>Тип лома</th>
                                        <th>Цена</th>
                                    </tr>
                                
                                    {item.data.map((subItem, idx) => {
                                        return (
                                            <tr key = { idx } className = {`${styles.row} ${idx % 2 ? styles.bg_row_white : styles.bg_row_gray}`}>
                                                <td>
                                                    {subItem.type}
                                                </td>

                                                <td>
                                                    {subItem.cost}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                            
                                </div>
                            )
                        })}
                    </div>


                    <p className={styles.info}>
                        *В связи с нестабильностью рынка, просим уточнять актуальные цены на лом у наших менеджеров по номеру телефона, указанному в контактах.
                    </p>
                </div>
            </section>
            
            <Faq />

            <HaveQuestion />

        </>
    )
}

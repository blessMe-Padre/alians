import { Helmet } from "react-helmet";

import styles from '../styles/price.module.css';

import { ServiceHero } from "../components";
import { HaveQuestion, Faq } from "../sections";
export default function Price() {
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
                    <h2 className="title_blue toggle_color">Актуальные Цены на приём металлолома на 01.11.2024*</h2>
                
                    <div className={styles.wrapper}>
                        <div className={styles.item}>
                            <p className={styles.item_title}>
                                Черный лом
                            </p>
                            <table>
                                <thead>
                                    <tr className={styles.bg_head_blue}>
                                        <th>Тип лома</th>
                                        <th>Цена</th>
                                    </tr>

                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                         <div className={styles.item}>
                            <p className={styles.item_title}>
                                Черный лом
                            </p>
                            <table>
                                <thead>
                                    <tr className={styles.bg_head_orange}>
                                        <th>Тип лома</th>
                                        <th>Цена</th>
                                    </tr>

                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                    <tr className={`${styles.bg_row_gray} ${styles.row}`}>
                                        <td>Лом марки 3А </td>
                                        <td>14 000 ₽ / тонна</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
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

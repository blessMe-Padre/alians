import styles from "../styles/homepage.module.css";

import { Helmet } from "react-helmet";

import { MapInfo } from "../sections";
import Button from "./../components/Button/Button";

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Главная страница - Ваша компания</title>
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

            <section className={`${styles.hero} hero`}>
                <div className={styles.hero_bg_wrapper}>
                    <img className={styles.hero_bg} src="./hero.webp" alt="hero" width={1800} height={751} />

                    <div className={styles.hero_content}>
                        <p className={styles.hero_text}>Железная надежность, железная выгода...</p>
                        <h1 className={styles.hero_title}>Переработка лома черных и цветных металлов</h1>
                        <Button
                            href="#popup"
                            text="Получить оценку металлолома"
                        />
                    </div>
                </div>

                <div className="container">
                    <ul className={styles.hero_list}>
                        <li>
                            <img src="./icons/hero-icon-1.svg" alt="icon" width={55} height={55} />
                            <p>Широкий спектр услуг:приемка лома, демонтаж и разделка, погрузка и перевозка собственными силами
                            </p>                </li>
                        <li>
                            <img src="./icons/hero-icon-2.svg" alt="icon" width={55} height={55} />
                            <p>Надежная репутация на Дальнем Востоке более 10 лет. Работает 5 приемных пунктов</p>                </li>
                        <li>
                            <img src="./icons/hero-icon-3.svg" alt="icon" width={55} height={55} />
                            <p>Наши участки оснащены современными качественным оборудованием</p>                </li>
                        <li>
                            <img src="./icons/hero-icon-4.svg" alt="icon" width={55} height={55} />
                            <p>Высокие цены, быстрая оплата. Используем индивидуальный подход к каждому клиенту</p>                </li>
                    </ul>
                </div>
            </section>

            <section className={styles.license}>
                <h2 className="title center toggle_color">Лицензированная деятельность группы компаний
                    «ВОСТОЧНЫЙ АЛЬЯНС»</h2>
                <div className={styles.license_wrapper}>
                    <ul className={styles.license_list}>
                        <li className={styles.license_item}>
                            <div className={styles.license_count}>01</div>
                            <p><strong>Основным направлением деятельности ГК «Восточный Альянс»</strong> является прием и переработка лома черных и цветных металлов.</p>
                        </li>
                        <li className={styles.license_item}>
                            <div className={styles.license_count}>02</div>
                            <p><strong>Предлагаем комплекс услуг на профессиональном уровне:</strong> демонтаж, резка, погрузка и вывоз металлолома в наши пункты приема.</p>
                        </li>
                        <li className={styles.license_item}>
                            <div className={styles.license_count}>03</div>
                            <p><strong>Работаем как с физическими, так и с юридическими лицами.</strong> Постоянно улучшаем сервис для наших клиентов.</p>
                        </li>
                    </ul>

                    <div className={`${styles.license_block} image-wrapper`}>
                        <img src="./content/image-1.webp" alt="img" width={890} height={537} />
                    </div>
                </div>

            </section>


            {/* <MapInfo pattern={2} /> */}

        </>
    )
}

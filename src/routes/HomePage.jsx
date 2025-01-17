import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/homepage.module.css";
import { Helmet } from "react-helmet";

import { MapInfo, Faq, HowWeWork, HaveQuestion, GetCost, Cost } from "../sections";
import Button from "./../components/Button/Button";
import Popup from "./../components/Popup/Popup";


export default function HomePage() {
    const [popupActive, setPopupActive] = useState(false);
    const handleClick = () => {
        setPopupActive(true);
    }
    return (
        <>
            <Helmet>
                <title>ГК "Восточный Альянс" - Главная</title>
                <meta name="description" content="Переработка лома черных и цветных металлов" />
                <meta name="keywords" content="Переработка лома черных и цветных металлов" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="Переработка лома черных и цветных металлов" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://va.eco" />
                <meta property="og:type" content="website" />


                {/* Additional Metadata */}
                <link rel="canonical" href="https://va.eco" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Popup active={popupActive} setActive={setPopupActive} />

            <section className={`${styles.hero} hero`}>
                <div className={styles.hero_bg_wrapper}>
                    <img className={styles.hero_bg} src="./hero.webp" alt="hero" width={1800} height={751} />

                    <div className={styles.hero_content}>
                        <p className={styles.hero_text}>Железная надежность, железная выгода...</p>
                        <h1 className={styles.hero_title}>Переработка лома черных и цветных металлов</h1>
                        <Button
                            handleClick={handleClick}
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

            <section className={`${styles.areas} areas`}>
                <div className="container">
                    <h2 className="title center toggle_color">направления работы</h2>
                    <ul className={styles.areas_list}>
                        <li className={styles.areas_item}>
                            <Link to="/service_pererabotka">
                                <div className="image-wrapper">
                                    <img src="./content/image-2.webp" width={467} height={250} alt="image" />
                                </div>
                                <div className={styles.areas_item_content}>
                                    <h3>Заготовка и переработка лома и отходов черных и цветных металлов</h3>
                                    <p>Большая благоустроенная территория с удобным подъездом, оборудованные цеха для сортировки и хранения лома, сертифицированные автомобильные весы с максимальной нагрузкой до 60 тонн, современное оборудование и высококвалифицированный персонал</p>
                                    <img className={styles.areas_item_img} src="./icons/arrow-top-right.svg" width={40} height={40} alt="icon" />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.areas_item}>
                            <Link to="/service_transport">
                                <div className="image-wrapper">
                                    <img src="./content/image-3.webp" width={467} height={250} alt="image" />
                                </div>
                                <div className={styles.areas_item_content}>
                                    <h3>Транспортные услуги</h3>
                                    <p>Собственный парк техники различной модификации (грузовые автомобили, грейферные и крановые установки, экскаваторы, мультилифты и иная спецтехника)</p>
                                    <img className={styles.areas_item_img} src="./icons/arrow-top-right.svg" width={40} height={40} alt="icon" />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.areas_item}>
                            <Link to="/service_expedition">
                                <div className="image-wrapper">
                                    <img src="./content/image-4.webp" width={467} height={250} alt="image" />
                                </div>
                                <div className={styles.areas_item_content}>
                                    <h3>Услуги внутрипортовой транспортной экспедиции при организации международной перевозки грузов</h3>
                                    <p>Услуга включает в себя целый комплекс таких услуг как: оформление всех необходимых документов, завоз и вывоз, прием и выдача грузов, терминальная обработка, погрузо-разгрузочные и складские услуги, информационное сопровождение и т.д. Услуга предоставляется «под ключ»</p>
                                    <img className={styles.areas_item_img} src="./icons/arrow-top-right.svg" width={40} height={40} alt="icon" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <GetCost />
            <HowWeWork />
            <Cost />
            <Faq />
            <HaveQuestion />
            <MapInfo pattern={1} />
        </>
    )
}

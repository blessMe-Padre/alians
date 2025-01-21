import { Helmet } from "react-helmet";
import styles from '../styles/about.module.css';
import { Link } from "react-router-dom";
import ab_1 from '/about/ab_1.png';
import ab_2 from '/about/ab_2.png';

import { ServiceHero } from '../components'

import { HowWeWork, Faq, HaveQuestion } from '../sections/';
export default function About() {
    return (
        <>
            <Helmet>
                <title>ГК "Восточный Альянс" - О компании</title>
                <meta name="description" content="Группа компаний 'Восточный Альянс'" />
                <meta name="keywords" content="Группа компаний 'Восточный Альянс'" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="О компании - Группа компаний 'Восточный Альянс'" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://va.eco/about" />
                <meta property="og:type" content="website" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://va.eco/about" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <ServiceHero
                title='Группа компаний "Восточный Альянс"'
                image="../about/about.webp"
            />

            <section className={styles.section}>
                <div className={`${styles.container} container`}>
                    <h2 className="title toggle_color center">О нас</h2>

                    <div className={styles.ab_wrapper}>
                        <div className={styles.ab_item}>
                            <img src={ab_1} alt='' className={styles.img_ab} />
                            <div className={styles.ab_content}>
                                <p className={styles.main_text}>
                                    Наши ценности
                                </p>
                                <p className={styles.desc_text}>
                                    — Честность перед клиентом
                                </p>
                                <p className={styles.desc_text}>
                                    — Гибкий подход в ценообразовании
                                </p>
                                <p className={styles.desc_text}>
                                    — Лояльное отношение
                                </p>
                                <p className={styles.desc_text}>
                                    — Работаем на 110%
                                </p>
                                <p className={styles.desc_text}>
                                    — Стабильность и надежность
                                </p>
                            </div>
                        </div>

                        <div className={styles.ab_item}>
                            <img src={ab_2} alt='' className={styles.img_ab} />

                            <div className={styles.ab_content}>
                                <p className={styles.main_text}>
                                    Состав
                                </p>
                                <p className={styles.desc_text}>
                                    У нас действует 5 приемных пунктов, и работает более 60 высококвалифицированных сотрудников. Имеем парк автомобилей для осуществления доставки лома собственными силами.
                                </p>
                            </div>
                        </div>
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


            <HowWeWork />

            <Faq />

            <HaveQuestion />



        </>
    )
}

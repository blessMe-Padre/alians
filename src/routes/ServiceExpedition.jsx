import { Helmet } from "react-helmet";

import styles from '../styles/service_exp.module.css';

import { ServiceHero } from "../components/index"; 
import complex from '/service/complex.png';

import why_1 from '/service/why_1.svg';
import why_2 from '/service/why_2.svg';
import why_3 from '/service/why_3.svg';

import { GetCost } from "../sections";
export default function ServicePererabotka() {
    return (
        <>
            <Helmet>
                <title>Услуги внутрипортовой транспортной экспедиции при организации международной перевозки грузов</title>
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
                title="Услуги внутрипортовой транспортной экспедиции при организации международной перевозки грузов"
                image="/service/service_3.png"
                max_width_more={1}
            />

            <section className={styles.section}>
                <div className=''>
                    <h2 className='title_blue toggle_color center'>весь комплекс услуг</h2>

                    <div className={styles.complex_wrapper}>
                        <div>
                            <img src={complex} alt="" className={styles.img_complex} />
                        </div>
                        
                        <div className={`${styles.bg_complex} ${styles.item}`}>
                            <ul className={styles.complex_list}>

                                Предоставим необходимый комплекс услуг по внутрипортовому экспедированию импортных 
                                и экспортных грузов «под ключ»

                                    <li className={styles.coplex_item}>Внутрипортовое экспедирование</li>
                                    <li className={styles.coplex_item}>Терминалы Приморского края</li>   
                                    <li className={styles.coplex_item}>Вывоз морских контейнеров</li>   
                                    <li className={styles.coplex_item}>Полный комплекс услуг по обработке грузов</li>  
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.container} container`}>
                    <h2 className='title_blue toggle_color center'>почему наша компания</h2>

                    <div className={styles.why_wrapper}>
                        <div className={`${styles.why_item} box_shadow_main`}>
                            <img src={why_1} alt="" className={styles.why_icon} />
                            <p className={styles.why_title}>Гибкие <br /> цены</p>
                        </div>
                        <div className={`${styles.why_item} box_shadow_main`}>
                            <img src={why_2} alt="" className={styles.why_icon} />
                            <p className={styles.why_title}>Индивидуальный <br/> подход</p>
                        </div>
                        <div className={`${styles.why_item} box_shadow_main`}>
                            <img src={why_3} alt="" className={styles.why_icon} />
                            <p className={styles.why_title}>Весь комплекс 
                            услуг «под ключ»</p>
                        </div>
                    </div>
                </div>
            </section>

            <GetCost />

        </>
    )
}

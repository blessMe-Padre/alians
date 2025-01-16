import { Helmet } from "react-helmet";

import styles from '../styles/service_pererabotka.module.css';

import pattern from '/service/pattern.png';
import mettals_1 from '/service/mettals_1.png';
import mettals_2 from '/service/mettals_2.png';

import per_1 from '/service/per_1.svg';
import per_2 from '/service/per_2.svg';
import per_3 from '/service/per_3.svg';

import { ServiceHero } from "../components/index";

import { GetCost } from "../sections";
export default function ServicePererabotka() {
    return (
        <>
            <Helmet>
                <title>Заготовка и переработка лома и отходов черных и цветных металлов</title>
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
                title="Заготовка и переработка лома и отходов черных и цветных металлов"
                image="/service/service_1.png"
                desc="Используем комплексный подход по взаимодействию с клиентами. Применяем современные технологии и высокий уровень профессионализма наших сотрудников для улучшения качества процесса приемки и формирования лояльности клиентов."
            />

            <section className={styles.section}>
                <div className="page-wrapper">
                    <h2 className="title toggle-color center">Комплексная переработка <br /> металлолома</h2>

                    <div className={styles.pererabotka_wrapper}>
                        
                        <div>
                            <img src={pattern} className={styles.pattern} alt="pattern" />
                        </div>

                        <div className={styles.pererabotka_wrapper_content}>
                            <ul className={styles.pererabotka_list}>
                                <li className={styles.pererabotka_item}>
                                    <img src={per_1} alt="" className="" />
                                    <p className={styles.item_desc}>
                                        Комплексная переработка металлолома способствует рациональному использованию природных ресурсов и минимизации объемов отходов. Мы перерабатываем лом и отправляем его на экспорт и на заводы нашей страны.
                                    </p>
                                </li>

                                <li className={styles.pererabotka_item}>
                                    <img src={per_2} alt="" className="" />
                                    <p className={styles.item_desc}>
                                        Процесс переработки лома включает в себя сортировку, измельчение, очистку с последующим прессованием его в брикеты. Недостаточная эффективность технологий, нарушение требований к переработке – это одна из проблем, стоящих перед компаниями. На нашем предприятии используется современное оборудование для сортировки лома, у сотрудников, осуществляющих приемку, имеются все разрешительные документы для безопасной переработки лома.   
                                    </p>
                                </li>

                                <li className={styles.pererabotka_item}>
                                    <img src={per_3} alt="" className="" />
                                    <p className={styles.item_desc}>
                                        Мы предоставляем Вам контейнер с открытым верхом под накопление лома и отходов. В процессе осуществления деятельности все металлические отходы будут складироваться в него. После наполнения (15-20 тонн), мы привозим порожний и забираем наполненный контейнер. Автомобиль самостоятельно выгружает и загружает контейнеры на прицеп, тем самым экономя Ваше время и деньги. 
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className="title toggle-color center">Металлы, какие они бывают?</h2>

                    <div className={styles.me_wrapper}>
                        <div className={styles.me_item}>
                            <img src={mettals_1} alt='' className={styles.img_me} />
                            <div className={styles.me_content}>
                                <p className={styles.main_text}>
                                    Чёрные
                                </p>
                                <p className={styles.desc_text}>
                                    Железо и сплавы на его основе. Это группа, включающая железо, сталь и чугун. Эти металлы склонны к окислению и образованию черной корки на поверхности при воздействии агрессивных сред, обладающие высокой прочностью и устойчивостью к износу. Это делает их идеальными для использования в строительстве, металлургической промышленности и многих других отраслях.
                                </p>
                            </div>
                        </div>

                        <div className={styles.me_item}>
                            <img src={mettals_2} alt='' className={styles.img_me} />

                            <div className={styles.me_content}>
                                <p className={styles.main_text}>
                                    Чёрные
                                </p>
                                <p className={styles.desc_text}>
                                    Железо и сплавы на его основе. Это группа, включающая железо, сталь и чугун. Эти металлы склонны к окислению и образованию черной корки на поверхности при воздействии агрессивных сред, обладающие высокой прочностью и устойчивостью к износу. Это делает их идеальными для использования в строительстве, металлургической промышленности и многих других отраслях.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <GetCost />

        </>
    )
}

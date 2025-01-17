import { Helmet } from "react-helmet";
import styles from '../styles/post.module.css';

import { ServiceHero } from '../components'

import post from '/post/post_1.png';
import post_2 from '/post/post_2.png';

import post_icon_1 from '/post/post_1_i.png';
import post_icon_2 from '/post/post_2_i.png';

import { HaveQuestion } from '../sections/';
export default function Postavchiki() {
    return (
        <>
            <Helmet>
                <title>ГК "Восточный Альянс" - Поставщикам</title>
                <meta name="description" content="Наша компания занимается скупкой металлолома в Дальневосточном Федеральном округе уже более десяти лет" />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="ГК Восточный Альянс - Поставщикам" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://va.eco/postavchiki" />
                <meta property="og:type" content="website" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://va.eco/postavchiki" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>


            <ServiceHero
                image="../post/post.png"
            />

            <section className={styles.section}>
                <div className={`${styles.container} container`}>
                    <h2 className="title toggle_color center">Поставщикам</h2>

                    <div className={styles.post_wrapper}>
                        <div>
                            <img src={post} className={styles.pattern} alt="pattern" />
                        </div>

                        <div className={styles.post_wrapper_content}>
                            <ul className={styles.post_list}>
                                <li className={styles.post_item}>
                                    <img src={post_icon_1} alt="" className="" />
                                    <p className={styles.item_title}>
                                        Покупка металлолома
                                    </p>
                                    <p className={styles.item_desc}>
                                        Наша компания занимается скупкой металлолома в Дальневосточном Федеральном округе уже более десяти лет. За время своей деятельности мы собрали коллектив настоящих профессионалов, обзавелись собственным парком специализированной техники и площадками для приёма и хранения металлолома. За годы работы в сфере покупки металлолома нас выбрали в качестве партнёров сотни продавцов металлолома, многие из них стали постоянными клиентами.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.post_wrapper_content} ${styles.post_item_orange}`}>
                            <ul className={styles.post_list}>
                                <li className={styles.post_item}>
                                    <img src={post_icon_2} alt="" className="" />
                                    <p className={styles.item_title}>
                                        Транспортные услуги
                                    </p>
                                    <p className={styles.item_desc}>
                                        Осуществляем перевозку чёрного и цветного металлолома любого вида и размера. Для транспортировки лома навалом, мы предоставляем грузовой автотранспорт со специальным кузовом — открытым контейнером (опен топ). Для самостоятельной погрузки металла, некоторые опен топы оснащаются грузовым краном с грейфером. Перевозка упакованного лома и металлической стружки в брикетах, либо мешках (биг бэгах), может осуществляться на обычном грузовом автотранспорте.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <img src={post_2} className={styles.pattern} alt="pattern" />
                        </div>
                    </div>
                </div>
            </section>

            <HaveQuestion />



        </>
    )
}

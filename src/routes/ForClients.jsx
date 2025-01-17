import { Helmet } from "react-helmet";
import styles from '../styles/forClients.module.css';

import { ServiceHero } from '../components'

import { HaveQuestion } from '../sections/';
export default function ForClients() {
    return (
        <>
            <Helmet>
                <title>ГК "Восточный Альянс" - для клиентов</title>
                <meta name="description" content="Группа компаний «Восточный Альянс» имеет богатый опыт в работе с ломом и отходами черного и цветного видов металлолома." />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="ГК Восточный Альянс" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://va.eco/for_clients" />
                <meta property="og:type" content="website" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://va.eco/for_clients" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>


            <ServiceHero
                image="../info/clients.webp"
            />

            <section className={styles.section}>
                <div className="container">
                    <h2 className="title_blue toggle_color">для клиентов</h2>

                    <div className={styles.content}>
                        <p>
                            Группа компаний «Восточный Альянс» имеет богатый опыт в работе с ломом и отходами черного и цветного видов металлолома. Мы контролируем весь процесс деятельности: от демонтажа и приемки металлолома до окончательного расчета с клиентом. Непрерывное обучение и совершенствование команды позволяет свести к минимуму споры и разногласия. Наличие собственного автомобильного парка дает преимущество в ценообразовании перед конкурентом на агрессивном рынке лома.
                        </p>
                    </div>
                </div>
            </section>


            <HaveQuestion />



        </>
    )
}

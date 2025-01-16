import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from '/logo.svg';

export default function Footer() {

    const footerData = {
        logo: logo,
        phone: '+7(999)617-73-31',
        phoneLink: 'tel:+79996177331',
        email: 'info@va.eco',
        emailLink: 'mailto:info@va.eco'
    };


    const servicesData = {
        title: "Услуги",
        items: [
            {
                link: '/service_pererabotka',
                title: "Заготовка и переработка лома черных и цветных металлов",
            },

            {
                link: '/service_transport',
                title: "Транспортные услуги",
            },

            {
                link: '/service_expedition',
                title: "Услуги внутрипортовой транспортной экспедиции при организации международной перевозки грузов",
            }
            
        ]
    };

    
    const pagesData = {
        title: "Для вас",
        items: [
            {
                link: '/about',
                title: "О компании",
            },
            
            {
                link: '/postavchiki',
                title: "Поставщикам",
            },

            {
                link: '/for_clients',
                title: "Клиентам",
            },

            {
                link: '/for_workers',
                title: "Сотрудникам",
            },

            {
                link: '/price',
                title: "Цены",
            },
           
            {
                link: '/contacts',
                title: "Контакты",
            },
        ]
    };
    

    return (
        <section className={styles.section}>
            <div className={`${styles.bg_footer} page-wrapper`}>
                <div className="container">
                    <div className={styles.footer_wrapper}>

                        <div className={styles.footer_content}>
                            <img src={footerData.logo} className={styles.logo_img} alt="logo_footer" />
                            <a className={styles.footer_contact} href={footerData.phoneLink}>{footerData.phone}</a>
                            <a className={styles.footer_contact} href={footerData.emailLink}>{footerData.email}</a>
                        </div>

                        <ul className={styles.footer_content}>
                            <p className={styles.title_footer}>{servicesData.title}</p>
                            {servicesData.items.map((item, index) => (
                                <li key={index} className={styles.service_link}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                             ))}
                        </ul>

                        <ul className={styles.footer_content}>
                            <p className={styles.title_footer}>{pagesData.title}</p>
                            <ul className={styles.pages_list}>
                                {pagesData.items.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>

                        </ul>

                    </div>
                    <div className={styles.policy}>
                        <a href="/policy">Политика конфиденциальности</a>
                        <p>©2025. ГК «Альянс». Все права защищены</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

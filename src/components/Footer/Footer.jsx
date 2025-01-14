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
            "Заготовка и переработка лома черных и цветных металлов",
            "Транспортные услуги",
            "Демонтаж металлоконструкций",
        ]
    };

    
    const pagesData = {
        title: "Для вас",
        items: [
            "О компании",
            "Поставщикам",
            "Клиентам",
            "Сотрудникам",
            "Цены",
            "Контакты",
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
                                    {item}
                                </li>
                             ))}
                        </ul>

                        <ul className={styles.footer_content}>
                            <p className={styles.title_footer}>{pagesData.title}</p>
                            <ul className={styles.pages_list}>
                                {pagesData.items.map((item, index) => (
                                    <li key={index}>
                                        {item}
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

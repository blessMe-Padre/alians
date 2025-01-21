import { useState } from "react";

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Logo from '/logo.svg';
import Down from '/icons/arrow-down.svg';

import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import MenuButton from "../Menu-button/Menu-button";

export default function Header() {
    const [popupActive, setPopupActive] = useState(false);
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        setPopupActive(true);
    }
    const handleOpenedClick = () => {
        setOpened(!opened);
        document.body.classList.toggle("blur");
        document.body.classList.toggle("lock");
    }

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" width={198} height={67} className={styles.logo} />
                    </Link>

                    <nav className={styles.nav}>
                        <ul>
                            <li className={styles.nav_li}>
                                <Link className={styles.link} to="/">
                                    <div className={styles.link_wrapper}>
                                        <span>Услуги</span>
                                        <img className={styles.link_img} src={Down} />
                                    </div>
                                </Link>
                                <ul className={styles.submenu}>
                                    <li><Link className={styles.link} to="/service_pererabotka">Заготовка и переработка лома и отходов черных и цветных металлов</Link></li>
                                    <li><Link className={styles.link} to="/service_transport">ТРАНСПОРТНЫЕ УСЛУГИ</Link></li>
                                    <li><Link className={styles.link} to="/service_expedition">Услуги внутрипортовой транспортной экспедиции при организации международной перевозки грузов</Link></li>
                                </ul>
                            </li>

                            <li className={styles.nav_li}>
                                <Link className={styles.link} to="/">
                                    <div className={styles.link_wrapper}>
                                        <span>Информация</span>
                                        <img className={styles.link_img} src={Down} />
                                    </div>
                                </Link>
                                <ul className={styles.submenu}>
                                    <li><Link className={styles.link} to="/postavchiki">для поставщиков</Link></li>
                                    <li><Link className={styles.link} to="/for_clients">для клиентов</Link></li>
                                    <li><Link className={styles.link} to="/for_workers">для сотрудников</Link></li>
                                </ul>
                            </li>

                            <li><Link className={styles.link} to="/about">О компании</Link></li>
                            <li><Link className={styles.link} to="/contacts">Контакты</Link></li>
                            <li><Link className={styles.link} to="/price">Цены</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.header_items_contact}>
                        <a className={styles.header_link} href="tel:+79996177331">+7 (999) 617-73-31</a>
                        <a className={styles.header_link} href="mailto:info@va.eco">info@va.eco</a>
                    </div>

                    <div className={styles.header_button_wrapper}>
                        <Button
                            handleClick={handleClick}
                            href="#popup"
                            text="Заказать звонок"
                        />

                        <a target="_blank" href="https://wa.me/+79996177331" className={styles.header_whatsapp}>
                            <img src="./icons/whatsapp.svg" width={20} height={20} alt="whatsapp" />
                        </a>
                    </div>

                    <MenuButton
                        onClick={handleOpenedClick}
                        opened={opened}
                    />
                </div>
            </div>

            <Popup active={popupActive} setActive={setPopupActive} />

            {/* мобильное меню */}
            <div className={`${styles.mobile_menu} ${opened ? styles.open : ''}`}>

                <nav className={styles.nav_mobile}>
                    <ul>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/">Главная</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/about">О нас</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/contacts">Контакты</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/service_pererabotka">Заготовка и переработка лома и отходов черных и цветных металлов</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/service_transport">Транспортные услуги</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/service_expedition">Услуги внутрипортовой транспортной экспедиции при организации международной перевозки грузов</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/postavchiki">Для поставщиков</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/for_clients">Для клиентов</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/for_workers">Для сотрудников</Link></li>
                        <li><Link onClick={handleOpenedClick} className={styles.link} to="/price">Цены</Link></li>
                    </ul>
                </nav>

                <a className={styles.header_link} href="tel:+79996177331">+7 (999)617-73-31</a>
                <a className={styles.header_link} href="mailto:info@va.eco">info@va.eco</a>

                <div className={styles.header_button_wrapper}>
                    <Button
                        handleClick={handleClick}
                        href="#popup"
                        text="Заказать звонок"
                    />

                    <a target="_blank" href="https://wa.me/+79996177331" className={styles.header_whatsapp}>
                        <img src="./icons/whatsapp.svg" width={20} height={20} alt="whatsapp" />
                    </a>
                </div>

            </div>
        </div >
    )
}

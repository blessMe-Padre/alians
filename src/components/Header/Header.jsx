import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from '/logo.svg'
import Down from '/icons/arrow-down.svg'
import Button from "../Button/Button";
export default function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" width={198} height={67} />
                    </Link>

                    <nav className={styles.nav}>
                        <Link className={styles.link} to="/">Главная</Link>
                        <Link className={styles.link} to="/about">
                            <div className={styles.link_wrapper}>
                                <span>О нас</span>
                                <img className={styles.link_img} src={Down} />
                            </div>
                            <ul className={styles.submenu}>
                                <li><Link className={styles.link} to="/about">О нас1</Link></li>
                                <li><Link className={styles.link} to="/about">О нас2</Link></li>
                                <li><Link className={styles.link} to="/about">О нас3</Link></li>
                            </ul>
                        </Link>
                        <Link className={styles.link} to="/contacts">Контакты</Link>
                        <Link className={styles.link} to="/price">Цены</Link>
                    </nav>

                    <a className={styles.header_link} href="tel:+79996177331">+7(999)617-73-31</a>
                    <a className={styles.header_link} href="mailto:info@va.eco">info@va.eco</a>

                    <div>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from '/logo.svg'
export default function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" width={198} height={67} />
                    </Link>
                    <nav>
                        <Link to="/">Главная</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/price">Цены</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

import { Link, useRouteError } from "react-router-dom";
import styles from '../styles/error.module.css';
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <h2 className='title'>Страница не найдена</h2>
                <p className={styles.text}>К сожалению, запрашиваемая страница не найдена. Возможно, вы перешли по ссылке, в которой была допущена ошибка, или ресурс был удален.</p>
                <Link href="/" className={styles.link}>На главную</Link>
            </div>
        </div>
    );
}

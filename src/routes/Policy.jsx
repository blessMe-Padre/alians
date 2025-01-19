import axios from "axios";
import { useState, useEffect } from 'react';
import styles from '../styles/policy.module.css';

export default function Policy() {
    const [data, setData] = useState([]);
    const [content, setContent] = useState('');
    console.log(content);

    const getPageData = async () => {
        try {
            const response = await axios.get('https://api.va.eco/wp-json/wp/v2/pages/3');
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении поста:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getPageData();
                setData(data);
                setContent(data.content.rendered);

            } catch (error) {
                console.error("Ошибка при загрузке поста:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className={styles.section}>
            <h1 className={`${styles.title} title toggle_color`}>{data?.title?.rendered}</h1>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>

        </section>
    )
}

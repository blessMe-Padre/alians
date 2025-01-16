import axios from "axios";
import { useState, useEffect } from 'react';
import styles from './style.module.css';

const items = [
    {
        title: 'Черный лом',
        data: [
            {
                image: './avatar.png',
                type: 'Лом марки 3А ',
                cost: '14 000 ₽ / тонна',
            },
            {
                image: './avatar.png',
                type: 'Лом марки 3А ',
                cost: '14 000 ₽ / тонна',
            },
            {
                image: './avatar.png',
                type: 'Лом марки 3А ',
                cost: '14 000 ₽ / тонна',
            },
        ]
    },
    {
        title: 'Цветной лом',
        data: [
            {
                image: './avatar.png',
                type: 'Лом марки 3А ',
                cost: '120 000 ₽ / тонна',
            },
            {
                image: './avatar.png',
                type: 'Лом марки 3А ',
                cost: '20 000 ₽ / тонна',
            },
            {
                image: './avatar.png',
                type: 'Лом марки 3А ',
                cost: '10 000 ₽ / тонна',
            },
        ]
    },
];

const Cost = () => {
    const [active, setActive] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [featuredImage, setFeaturedImage] = useState();

    const openTab = e => setActive(+e.target.dataset.index);
    const apiBaseUrl = "https://api.va.eco/wp-json/wp/v2/posts/7";

    const getPost = async () => {
        try {
            const response = await axios.get(apiBaseUrl);
            return response.data.acf.item;
        } catch (error) {
            console.error("Ошибка при получении поста:", error);
            throw error;
        }
    };

    // Функция для получения всех изображений из массива post.acf.item
    const getPostImages = async (items) => {
        if (!items || !Array.isArray(items) || items.length === 0) {
            console.error("Массив items пустой или не существует");
            return;
        }

        try {
            const avatarIds = items.map((item) => item?.avatar).filter(Boolean);
            if (avatarIds.length === 0) {
                console.error("ID аватаров не найдены");
                return;
            }

            // Загружаем данные для каждого аватара
            const imageRequests = avatarIds.map((id) =>
                axios.get(`https://api.va.eco/wp-json/wp/v2/media/${id}`)
            );

            const responses = await Promise.all(imageRequests);
            const images = responses.map((res) => res.data.source_url); // Извлекаем URL всех изображений

            setFeaturedImage(images); // Сохраняем массив URL изображений
        } catch (error) {
            console.error("Ошибка при получении изображений:", error);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const product = await getPost();
                if (product) {
                    setPost(product);
                    getPostImages(product);
                }
            } catch (error) {
                console.error("Ошибка при загрузке постов:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []); //


    return (
        <section className={styles.section}>
            <div className={styles.main_image}>
                <img src="./content/info.webp" alt="" />
            </div>

            <div className="container">
                <div className={styles.section_wrapper}>
                    <h2 className={`title ${styles.title}`}> Стоимость металлолома на 01.11.2024*</h2>

                    <div className={styles.buttons_wrapper}>
                        {
                            items.map((button, index) => (
                                <button
                                    className={`${styles.tabs_btn} ${index === active ? `${styles.active}` : ''}`}
                                    onClick={openTab}
                                    data-index={index}
                                    key={index}
                                >{button.title}</button>
                            ))
                        }
                    </div>

                    <div className={styles.table_header}>
                        <div>Тип лома</div>
                        <div className={styles.table_header_cost}>Цена/тонна</div>
                    </div>
                    {items[active] && (
                        <ul className={styles.table_list}>
                            {items[active].data.map((item, index) => (
                                <li
                                    className={styles.table_item}
                                    key={index}>
                                    <div className={styles.table_item_inner}>
                                        <img src={item.image} alt="image" width={70} height={70} />
                                        <p>{item.type}</p>
                                    </div>
                                    <p><strong>{item.cost}</strong></p>
                                </li>
                            ))}
                        </ul>
                    )}

                    <p className={styles.table_text}>*В связи с нестабильностью рынка, просим уточнять актуальные цены на лом у наших менеджеров по номеру телефона, указанному в контактах.</p>


                </div>
            </div>
        </section >
    )
}

export default Cost;


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
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении поста:", error);
            throw error;
        }
    };

    const getPostImage = () => {
        axios
            .get(post?._links["wp:featuredmedia"][0]?.href)
            .then((res) => {
                setFeaturedImage(res.data.source_url);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const product = await getPost();
                if (product != 0) {
                    setIsLoading(false);
                    setPost(product);
                    getPostImage();
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);


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


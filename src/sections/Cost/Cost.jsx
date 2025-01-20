import axios from "axios";
import { useState, useEffect } from 'react';
import styles from './style.module.css';

const Cost = () => {
    const [active, setActive] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [featuredImage, setFeaturedImage] = useState();

    const openTab = e => setActive(+e.target.dataset.index);
    const apiBaseUrl = "https://api.va.eco/wp-json/wp/v2/posts?include[]=7&include[]=19";

    const getPosts = async () => {
        try {
            const response = await axios.get(apiBaseUrl);
            return response.data;
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
            const avatarIds = items
                .flatMap((post) => post.acf?.item?.map((item) => item?.avatar))
                .filter(Boolean);

            if (avatarIds.length === 0) {
                console.error("ID аватаров не найдены");
                return;
            }

            const imageRequests = avatarIds.map((id) =>
                axios.get(`https://api.va.eco/wp-json/wp/v2/media/${id}`)
            );

            const responses = await Promise.all(imageRequests);
            const images = responses.map((res) => res.data.source_url);

            setFeaturedImage(images);
        } catch (error) {
            console.error("Ошибка при получении изображений:", error.message || error);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const product = await getPosts();

                if (product) {
                    const reordered = [product[1], product[0]];
                    setPosts(reordered);
                    await getPostImages(reordered);
                }
            } catch (error) {
                console.error("Ошибка при загрузке постов:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);


    return (
        <section className={styles.section}>
            <div className={styles.main_image}>
                <img src="./content/info.webp" alt="" />
            </div>

            <div className="container">
                <div className={styles.section_wrapper}>
                    <h2 className={`title ${styles.title}`}> Стоимость металлолома на 20.01.2025*</h2>

                    <div className={styles.buttons_wrapper}>
                        {
                            posts.map((button, index) => (
                                <button
                                    className={`${styles.tabs_btn} ${index === active ? `${styles.active}` : ''}`}
                                    onClick={openTab}
                                    data-index={index}
                                    key={index}
                                >{button.title.rendered}</button>
                            ))
                        }
                    </div>

                    <div className={styles.table_header}>
                        <div>Тип лома</div>
                        <div className={styles.table_header_cost}>Цена/тонна</div>
                    </div>

                    {posts[active] && posts[active].acf?.item?.length > 0 && (
                        <ul className={styles.table_list}>
                            {posts[active].acf.item.map((item, index) => (

                                <li
                                    className={styles.table_item}
                                    key={index}>
                                    <div className={styles.table_item_inner}>
                                        {Array.isArray(featuredImage) && featuredImage[index] ? (
                                            <img
                                                src={featuredImage[index]}
                                                alt={"Изображение"}
                                                width={70}
                                                height={70}
                                            />
                                        ) : (
                                            <img
                                                src="loading.gif"
                                                alt="Загрузка..."
                                                width={70}
                                                height={70}
                                            />
                                        )}
                                        <p>{item.title}</p>
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


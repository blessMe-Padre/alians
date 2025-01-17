import axios from "axios";
import { useState, useEffect } from 'react';

import { Helmet } from "react-helmet";
import styles from '../styles/price.module.css';

import { ServiceHero } from "../components";
import { HaveQuestion, Faq } from "../sections";

export default function Price() {
    const [posts, setPosts] = useState([]);
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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const product = await getPosts();

                if (product) {
                    const reordered = [product[1], product[0]];
                    setPosts(reordered);
                }
            } catch (error) {
                console.error("Ошибка при загрузке постов:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Helmet>
                <title>Цены страница - Ваша компания</title>
                <meta name="description" content="Описание вашей компании, услуг и уникальных преимуществ." />
                <meta name="keywords" content="компания, услуги, преимущества, о нас" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="О компании - Ваша компания" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://example.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card (for Twitter sharing) */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="О компании - Ваша компания" />
                <meta name="twitter:description" content="Описание вашей компании и услуг." />
                <meta name="twitter:image" content="URL_картинки_для_шеринга" />

                {/* Additional Metadata */}
                <link rel="canonical" href="https://example.com/about" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <ServiceHero
                image="../info/price.png"
            />

            <section className={styles.section}>
                <div className="container">
                    <h2 className="title_blue toggle_color center">Актуальные Цены на приём металлолома на 20.01.2025*</h2>

                    <div className={styles.wrapper}>
                        {posts.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3 className={styles.item_title}>{item.title.rendered}</h3>
                                    <div className={index % 2 ? `${styles.bg_head_blue}` : `${styles.bg_head_orange}`}>
                                        <div>Тип лома</div>
                                        <div>Цена</div>
                                    </div>

                                    {item.acf.item.map((subItem, idx) => {
                                        return (
                                            <div key={idx} className={`${styles.row} ${idx % 2 ? styles.bg_row_white : styles.bg_row_gray}`}>
                                                <div>
                                                    {subItem.title}
                                                </div>

                                                <div>
                                                    {subItem.cost}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>


                    <p className={styles.info}>
                        *В связи с нестабильностью рынка, просим уточнять актуальные цены на лом у наших менеджеров по номеру телефона, указанному в контактах.
                    </p>
                </div>
            </section>

            <Faq />

            <HaveQuestion />

        </>
    )
}

import axios from "axios";
import { useState, useEffect } from 'react';

import styles from './style.module.css';
import faq_bg from '/public/faq/faq.png';
import { motion } from 'framer-motion'

const Faq = () => {
    const [faqData, setFaqData] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    const getPost = async () => {
        try {
            const response = await axios.get('https://api.va.eco/wp-json/wp/v2/posts/42');
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении поста:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const post = await getPost();
                setFaqData(post.acf.faq);

            } catch (error) {
                console.error("Ошибка при загрузке поста:", error);
            }
        };

        fetchProducts();
    }, []);

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },

        hidden: {
            opacity: 0,
            height: 0,
        }
    }

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className='title_blue toggle_color center'>ОТВЕТИЛИ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>


                <div className={styles.content_wrapper}>
                    <ul className={styles.list}>
                        {faqData.map((item, index) => (
                            <li
                                key={index}
                                className={`${styles.item} overflow-hidden`}
                            >
                                <div
                                    className={styles.button_wrapper}
                                    onClick={() => handleClick(index)}
                                >
                                    <div className="flex gap-10">
                                        <button className={styles.button}>{item.question}</button>
                                    </div>
                                    <div className={`${styles.button_decor} ${openIndex === index ? styles.is_active : ''}`}></div>
                                </div>

                                <div>
                                    <motion.div
                                        layout
                                        variants={variants}
                                        initial={'hidden'}
                                        animate={openIndex === index ? 'visible' : 'hidden'}
                                        className="parallax-wrapper"
                                    >
                                        <div className={styles.content}>
                                            <p className={styles.item_content}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </li>
                        ))}
                    </ul>


                    <img src={faq_bg} className={styles.faq_bg} alt='' />
                </div>
            </div>
        </section>
    )
}

export default Faq;
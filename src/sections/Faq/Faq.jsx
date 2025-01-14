import styles from './style.module.css';
import faq_bg from '/public/faq/faq.png';
import { motion } from 'framer-motion'
import { useState } from 'react';

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

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
        setOpenIndex(openIndex === index? null : index);
    }

    const data = [
        {
            'question': 'Какой вид лома можно сдать?',
            'answer': "Какой вид лома можно сдать?"
        },

        {  
            'question': 'Какой вид лома нельзя сдать??',
            'answer': "Какой вид лома нельзя сдать??"
        },

        {
            'question': 'Какой вес лома считается минимальным для сдачи??',
            'answer': "Какой вес лома считается минимальным для сдачи??"
        },

        {
            'question': 'Где узнать точную цену приемки лома металлов на сегодня??',
            'answer': "Где узнать точную цену приемки лома металлов на сегодня??"
        },

        {
            'question': 'Что вы делаете с принятым металлоломом??',
            'answer': "Что вы делаете с принятым металлоломом??"
        },

        {
            'question': 'Можно ли заказать демонтаж и вывоз лома??',
            'answer': "Можно ли заказать демонтаж и вывоз лома??"
        }
    ]



    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className='title_blue center'>ОТВЕТИЛИ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>

                
                <div className={styles.content_wrapper}>
                     <ul className={styles.list}>
                        {data.map((item, index) => (
                            <li
                                key={item.index}
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
import styles from './style.module.css';

const HowWeWork = () => {

    const data = [
        {
            'title': 'Оставляете заявку',
            'desc': 'Прием заявки, обсуждение и согласование стоимости лома и деталей сделки',
            'icon': '/icons/phone.svg',
        },

        {
            'title': 'Консультация специалиста',
            'desc': 'Выезд нашего специалиста или ваш приезд в приемный пункт',
            'icon': '/icons/person.svg',
        },

        {
            'title': 'Выполнение работ',
            'desc': 'Демонтаж, сортировка, погрузка, вывоз лома',
            'icon': '/icons/auto.svg',
        },

        {
            'title': 'Оплата',
            'desc': 'Взвешивание лома и моментальная оплата',
            'icon': '/icons/pay.svg',            
        }
    ]


    let count = 1;

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className='title center'>Как мы работаем</h2>

                <ul className={styles.how_we_work_list}>
                    {data.map((item, idx) => {
                        return (
                            <li className={styles.item} key={idx}>
                                <div className={styles.item_wrapper}>
                                    <img className={styles.item_icon} src={item.icon} alt={item.title} />
                                    <p className={styles.item_title}>{item.title}</p>
                                </div>
                                <p className={styles.item_desc}>{item.desc}</p>
                                <div className={styles.count}>0{count++}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default HowWeWork;
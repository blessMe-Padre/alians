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
    const openTab = e => setActive(+e.target.dataset.index);

    return (
        <section className={styles.section}>
            cost

            {items.map((button, index) => (
                <button
                    className={`${styles.tabs_btn} ${index === active ? `${styles.active}` : ''}`}
                    onClick={openTab}
                    data-index={index}
                    key={index}
                >{button.title}</button>
            ))}

            <div>
                {items[active] && (
                    <ul>
                        {items[active].data.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <img src={item.image} alt={item.type} />
                                    <p>{item.type}</p>
                                </div>
                                <p>{item.cost}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default Cost;


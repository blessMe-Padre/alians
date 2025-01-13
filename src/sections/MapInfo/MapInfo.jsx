import styles from './style.module.css';
import pattern_bg from '/public/assets/map_info/pattern_bg_1.png';
import pattern_bg_2 from '/public/assets/map_info/pattern_bg_2.png';
import geo from '/public/assets/icons/geo.svg';

const MapInfo = ({ pattern }) => {
    
    const data = [
        {
            'title': 'Центральный офис',
            'address': 'Приморский край, г. Владивосток, ул. Некрасовская, 36Б, офис 903',
            'phone': '+7 (999) 617-73-31',
            'phone_bot': '+79996177331',
            'email': 'info@va.ecos'
        },

        {
            'title': 'Пункт приема',
            'address': 'г. Находка, ул. Сахалинская 39Б',
            'phone': '+7 (924) 797-97-79',
            'phone_bot': '+79247979779',
            'email': 'vertexprim@gmail.com'
        },

        {
            'title': 'Пункт приема',
            'address': 'Приморский край, г. Артем, ул. Ленина, д. 1/3',
            'phone': '+7 (914) 712-73-77',
            'phone_bot': '+79147127377',
            'email': 'vertexprim@gmail.com'
        },

        {
            'title': 'Пункт приема',
            'address': 'Приморский край, г. Партизанск, ул. Фабричная, 8а',
            'phone': '+7 (924) 249-13-52',
            'phone_bot': '+79242491352',
            'email': 'ankor20211@gmail.com'
        },
        
        {
            'title': 'Пункт приема',
            'address': 'Приморский край, городской округ ЗАТО город Фокино, г. Фокино, ул. Заводская, д. 10',
            'phone': '+7 (924) 239-99-66',
            'phone_bot': '+79242399966',
            'email': 'ankor20211@gmail.com'
        },

        {
            'title': 'Пункт приема',
            'address': 'Приморский край, г. Большой Камень, ул. Колхозная, 105А',
            'phone': '+7 (914) 661-11-59',
            'phone_bot': '+79146611159',
            'email': 'ankor20211@gmail.com'
        },


    ]

    let src = '';
    
    console.log(pattern)

    switch (pattern) {
        case 1:
            src = pattern_bg
            break;
        
        case 2:
            src = pattern_bg_2
            break;
         default:
            src = '';
            console.error(`Error: invalid pattern: ${pattern}`);

    }

    console.log(src);
    

    return (
        <section className={styles.section}>
            <div className='page-wrapper relative'>
               <img src={src} className={styles.background} alt='' />
                <div className={styles.content_wrapper}>
                    <h2 className='title title_mobile_blue'>
                        Пункты приема
                    </h2>

                    <div className={styles.map_wrapper}>
                      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0240e239f5d8c368095b6d7c70785ca8fd020bb6effb88ff84b12c5c98efdba4&amp;source=constructor" height="647" frameborder="0"></iframe>
                    </div>

                    
                    <div className={`${styles.contacts_wrapper} box_shadow_main`}>
                        <ul className={styles.contacts_list}>
                            {data.map((item, idx) => (
                                <li key={idx} className={styles.contacts_item}>
                                    <img src={geo} className={styles.geo_svg} alt='geo' />
                                    <p className={styles.item_title}>{item.title}</p>
                                    <p className={styles.item_address}>{ item.address}</p>
                                    <p className={styles.item_phone}><a href={`tel:${item.phone_bot}`}>{ item.phone}</a></p>
                                    <a className={styles.item_email} href={item.item_email}>{item.email}</a>
                                </li>
                            ))}
                        </ul>

                        <p className={styles.contact_info}>Все приемные пункты работают с 9:00 до 18:00</p>
                    </div>
                </div> 
            </div>
        </section>
    )
}


export default MapInfo;
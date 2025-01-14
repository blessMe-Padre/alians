import styles from './style.module.css';
import Form from './../../components/Form/Form';

const HaveQuestion = () => {
    return (
        <section className={`${styles.section} have_q`}>
            <div className="container">
                <div className={styles.section_wrapper}>
                    <div className={styles.section_item}>
                        <Form
                            title="остались вопросы?"
                            subtitle="Задайте их нашему специалисту"
                            color="#ffffff"
                            background="rgba(255, 255, 255, 0.19)"
                        />
                    </div>

                    <div className={`${styles.image_wrapper} image-wrapper`}>
                        <img src="./content/image-6.webp" width={475} height={431} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HaveQuestion;


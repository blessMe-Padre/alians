import { Helmet } from "react-helmet";

import { ServiceHero } from "../components/index";
export default function ServicePererabotka() {
    return (
        <>
            <Helmet>
                <title>Заготовка и переработка лома и отходов черных и цветных металлов</title>
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
                title="Заготовка и переработка лома и отходов черных и цветных металлов"
                image="/service/service_1.png"
                desc="Используем комплексный подход по взаимодействию с клиентами. Применяем современные технологии и высокий уровень профессионализма наших сотрудников для улучшения качества процесса приемки и формирования лояльности клиентов."
            />

        </>
    )
}

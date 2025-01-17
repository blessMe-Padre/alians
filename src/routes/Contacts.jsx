import { Helmet } from "react-helmet";
import { MapInfo } from "../sections";
export default function Contacts() {
    return (
        <>
            <Helmet>
                <title>ГК "Восточный Альянс" - Контакты</title>
                <meta name="description" content="Пункты приема" />
                <meta name="keywords" content="Пункты приема" />

                {/* Open Graph (for social media sharing, like Facebook) */}
                <meta property="og:title" content="Восточный Альянс" />
                <meta property="og:description" content="Узнайте больше о нашей компании и наших услугах." />
                <meta property="og:image" content="URL_картинки_для_шеринга" />
                <meta property="og:url" content="https://va.eco/contacts" />
                <meta property="og:type" content="website" />


                {/* Additional Metadata */}
                <link rel="canonical" href="https://va.eco/contacts" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>



            <MapInfo pattern={2} />
        </>
    )
}

import AboutPeopleDetail from "@/app/_components/AboutPeopleDetail";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import { getAboutPeopleByName } from "@/app/pages/_lib/api";

export default async function Page({ params }) {
    const { lang, name } = params;
    const data = await getAboutPeopleByName(name, lang);

    return (
        <Container>
            <Breadcrumbs lang={lang} />
            <AboutPeopleDetail data={data} lang={lang} />
        </Container>
    );
}

import AboutPeopleDetail from "@/app/_components/AboutPeopleDetail";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import { getAboutPeopleByName } from "@/app/pages/_lib/api";


export default async function Page({ params }) {
    const data = await getAboutPeopleByName(params.name);
    return (
        <Container>
        <Breadcrumbs />
        <AboutPeopleDetail data={data} />
        </Container>
    );
}

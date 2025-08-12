import Container from "@/app/_components/Container";
import ArticleDetailClient from "@/app/_components/ArticleDetailById";

export default function Page({ params }) {
  const { lang, id } = params;

  return (
    <Container>
      <ArticleDetailClient id={id} lang={lang} />
    </Container>
  );
}

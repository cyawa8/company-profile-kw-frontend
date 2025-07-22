import Container from "@/app/_components/Container";
import ArticleDetailClient from "@/app/_components/ArticleDetailById";

export default function Page({ params }) {
  return (
    <Container>
      <ArticleDetailClient id={params.id} />
    </Container>
  );
}

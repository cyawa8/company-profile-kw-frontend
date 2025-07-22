import { AnimatedDiv } from "./AnimatedDiv";
import Container from "./Container";
import PeopleList from "./HomePeopleList";
import SectionHeader from "./SectionHeader";

export default function People() {
  return (
    <Container>
        <SectionHeader />
        <AnimatedDiv delay={0}>
        <PeopleList />
        </AnimatedDiv>
    </Container>
  );
}

import AboutJourney from "@/app/_components/AboutJourney";
import Container from "@/app/_components/Container";
import H1 from "@/app/_components/H1";

export const metadata = {
  title: "About",
};

export default function Journey(){
    return(
      <Container>
        <div className="flex justify-center">
            <H1>Our Journey</H1>
        </div>
        <AboutJourney />
      </Container>
    );
}
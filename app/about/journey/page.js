import AboutJourney from "@/app/_components/AboutJourney";
import AnimatedParagraph from "@/app/_components/AnimatedParagraph";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import H1 from "@/app/_components/H1";

export const metadata = {
  title: "About",
};

export default function Journey(){
    return(
      <Container>
        <Breadcrumbs/>
        <AnimatedParagraph delay={0}>
        <div className="flex justify-center">
            <H1>Our Journey</H1>
        </div>
        </AnimatedParagraph>
        <AnimatedParagraph delay={50}>
        <div>
          <h1 className="flex text-justify">
            Innovation lights our path; inspiration drives every step. From the seeds of a bold idea, we’ve transformed challenges into opportunities and dreams into reality. Each year, we grow, adapt, and shape the future—together, one milestone at a time. Our journey is not just about reaching a destination, but about creating lasting impact along the way.
          </h1>
        </div>
        </AnimatedParagraph>
        
      <AnimatedParagraph delay={100}>
        <AboutJourney />
      </AnimatedParagraph>
      
      </Container>
    );
}
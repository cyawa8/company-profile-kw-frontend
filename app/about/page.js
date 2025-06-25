import Container from "../_components/Container";
import H1 from "../_components/H1";

export const metadata = {
  title: "About",
};

export default function About(){
    return(
      <Container>
        <H1>Reading The Credit Cycle</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p>Pepper has built, scaled, financed and managed Lending and Loan Servicing businesses across multiple markets, asset classes and economic cycles. We do it through residential and commercial property, as well as consumer, small business, auto and equipment finance.</p>
          <p>We understand the credit cycle. The ebb and flow of the market. The interplay between reward and risk. How economies behave, and where opportunities hide. And the gaps between theoretical models, and the people they describe.</p>
        </div>
      </Container> 
    );
}
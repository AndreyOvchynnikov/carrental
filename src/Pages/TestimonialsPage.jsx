import { Helmet } from "react-helmet";
import PageHead from "components/PageHead";
import Testimonials from "../components/Testimonials";
import Banner from "components/Banner";

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Car Rental / Testimonials</title>
      </Helmet>
      <PageHead pageName="Testimonials" />
      <Testimonials />
      <Banner />
    </>
  );
};

export default TestimonialsPage;

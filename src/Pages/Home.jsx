import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import HomeBanner from "components/HomeBanner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Car Rental</title>
      </Helmet>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <HomeBanner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </>
  );
};

export default Home;

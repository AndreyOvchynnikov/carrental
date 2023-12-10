import PageHead from '../components/PageHead';
import AboutCompany from 'components/AboutCompany';
import PlanTrip from "../components/PlanTrip";
import Banner from "components/Banner";


const About = () => {
  
  return (
    <>
      <PageHead pageName="About" />
      <AboutCompany />
      <PlanTrip />
      <Banner />
    </>
  );
}

export default About;

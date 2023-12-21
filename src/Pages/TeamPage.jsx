// import { Helmet } from "react-helmet";
import PageHead from "components/PageHead";
import Team from "components/Team";
import Banner from "components/Banner";

const TeamPage = () => {
 
  return (
    <>
      {/* <Helmet>
        <title>Car Rental / Team</title>
      </Helmet> */}
      <PageHead pageName="Our Team" />
      <Team />
      <Banner />
    </>
  );
};

export default TeamPage;

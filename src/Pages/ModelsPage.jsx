// import { Helmet } from "react-helmet";
import PageHead from "components/PageHead";
import Models from "components/Models";
import Banner from "components/Banner";

const ModelsPage = () => {
  
  return (
    <>
      {/* <Helmet>
        <title>Car Rental / Models</title>
      </Helmet> */}
      <PageHead pageName="Vehicle Models" />
      <Models />
      <Banner />
    </>
  );
};

export default ModelsPage;

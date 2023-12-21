// import { Helmet } from "react-helmet";
import PageHead from "components/PageHead";
import Banner from "components/Banner";
import Contacts from "components/Contacts";


function ContactsPage() {
  
  return (
    <>
      {/* <Helmet>
        <title>Car Rental / Contacts</title>
      </Helmet> */}
      <PageHead pageName="Contact" />
      <Contacts />
      <Banner />
    </>
  );
};

export default ContactsPage;

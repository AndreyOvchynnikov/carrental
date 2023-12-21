import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "components/context/authContext";
import Navbar from "../Navbar";
import Footer from "components/Footer";
import Loader from "components/Loader";

const SharedLayout = () => {

    const { isLoading } = useAuthContext();

    return (
        <>
            {isLoading && <Loader />}
            <>
                <Navbar />
                <main>
                    {/* <Suspense fallback={<Loader />}> */}
                        <Outlet />
                    {/* </Suspense> */}
                </main>
                <Footer />
            </>
        </>
     
        
        
    )
};

export default SharedLayout;
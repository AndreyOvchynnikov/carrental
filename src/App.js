import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./components/context/authContext";
import "../src/index.css";

const SharedLayout = lazy(() => import("./components/SharedLayout"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const ModelsPage = lazy(() => import("./pages/ModelsPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));


const App = () => {
  
function appHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}

  window.addEventListener('resize', appHeight);
  appHeight();

  return (

    <AuthContext>
        <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactsPage />} />
        </Route>
      </Routes>
    </AuthContext>
      
  );
};

export default App;

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./components/context/authContext";
import "../src/index.css";

const SharedLayout = lazy(() => import("./components/SharedLayout"));
const About = lazy(() => import("./Pages/About"));
const Home = lazy(() => import("./Pages/Home"));
const ModelsPage = lazy(() => import("./Pages/ModelsPage"));
const TestimonialsPage = lazy(() => import("./Pages/TestimonialsPage"));
const TeamPage = lazy(() => import("./Pages/TeamPage"));
const ContactsPage = lazy(() => import("./Pages/ContactsPage"));


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

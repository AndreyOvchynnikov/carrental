import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SharedLayout from "components/SharedLayout";
import { Route, Routes } from "react-router-dom";
import ModelsPage from "./Pages/ModelsPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import TeamPage from "./Pages/TeamPage";
import ContactsPage from "./Pages/ContactsPage";

function App() {

function appHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}

  window.addEventListener('resize', appHeight);
  appHeight();




  return (
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
  );
}

export default App;

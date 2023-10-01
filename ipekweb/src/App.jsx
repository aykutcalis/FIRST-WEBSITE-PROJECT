import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Project } from "./components/Project";
import { Production } from "./components/Production";
import { EngineeringProject } from "./Pages/Services/EngineeringProject";
import { IndustrialProject } from "./Pages/Services/IndustrialProject";
import { EnvironmentProject } from "./Pages/Services/EnvironmentProject";
import { Perfumes } from "./Pages/ProjectPageDivs/ProjectsMain/Perfumes";
import { Frades } from "./Pages/ProjectPageDivs/ProjectsMain/Frades";
import { Otomation } from "./Pages/ProjectPageDivs/ProjectsMain/Otomation";
import { IndustryFrades } from "./Pages/ProjectPageDivs/ProjectsMain/IndustryFrades";
import { Extraction } from "./Pages/ProjectPageDivs/ProjectsMain/Extraction";
import { Food } from "./Pages/ProjectPageDivs/ProjectsMain/Food";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import { WeldingTrainingCourses_1 } from "./Pages/ProductionPageDİvs/Production/WeldingTrainingCourses_1";
import { WrongPath } from "./components/WrongPath";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services" exact element={<Services />} />
        <Route
          path="/services/engineering-project"
          exact
          element={<EngineeringProject />}
        />
        <Route
          path="/services/ındustrial-project"
          exact
          element={<IndustrialProject />}
        />
        <Route
          path="/services/environment-project"
          exact
          element={<EnvironmentProject />}
        />
        <Route path="/projects" exact element={<Project />} />
        <Route path="/production" exact element={<Production />} />

        <Route path="/projects/perfumes" exact element={<Perfumes />} />
        <Route path="/projects/frades" exact element={<Frades />} />
        <Route path="/projects/otomation" exact element={<Otomation />} />
        <Route
          path="/projects/ındustryFrades"
          exact
          element={<IndustryFrades />}
        />
        <Route path="/projects/extraction" exact element={<Extraction />} />
        <Route path="/projects/food" exact element={<Food />} />
        <Route path="/privacyPolicy" exact element={<PrivacyPolicy />} />
        <Route
          path="/production/weldingTrainingCourses_1"
          exact
          element={<WeldingTrainingCourses_1 />}
        />
        <Route path="*" exact element={<WrongPath />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

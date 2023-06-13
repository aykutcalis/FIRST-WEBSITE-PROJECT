import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Project } from "./components/Project";
import { Courses } from "./components/Courses";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/menu" exact element={<Blog />} />
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
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/" exact element={<Home />} />
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

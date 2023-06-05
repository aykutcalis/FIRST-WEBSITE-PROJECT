import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Project } from "./components/Project";
import { Courses } from "./components/Courses";
import { SecretPolicy } from "./components/SecretPolicy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/menu" exact element={<Blog />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/projects" exact element={<Project />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/secretPolicy" exact element={<SecretPolicy />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

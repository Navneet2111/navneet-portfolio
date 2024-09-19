import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Projects from "./components/projects";
import Contact from "./components/contact";


function App() {
  return (
    <Router>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/qualification" element={<Qualification />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

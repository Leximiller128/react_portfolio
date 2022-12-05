import "./App.css";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Aboutme from "./componets/Aboutme";
import Contact from "./componets/Contact";
import Projects from "./componets/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="outterdiv">
        <Navbar />
        <div className="bodydiv">
          <Routes>
            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<Aboutme />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

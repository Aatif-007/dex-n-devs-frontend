
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Hire from "./Components/Hire";
import Contact from "./Pages/Contact";
import Clients from "./Components/Clients";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import CustomForm from "./Pages/CustomerForm";
import AdminDashboard from "./Pages/AdminDashboard";
import NoRoute from "./Pages/NoRoute";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />s
          <Route path="/hire" element={<Hire />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/admin" element={<CustomForm />} />
          <Route path="/dashboard4me" element={<AdminDashboard />} />
          <Route path="*" element={<NoRoute/>} />

        </Routes>
      </Router>
    </div>

  )
};


export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import About from "./Component/About";
import Addcar from "./Component/Addcar";
import Booking from "./Component/Booking";
import Cars from "./Component/Cars";
import Contacts from "./Component/Contacts";
import Index from "./Component/Index";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import Resentbooking from "./Component/Resentbooking";
import Services from "./Component/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="py-3">
          <Routes>
            <Route path="/about" exact element={<About />} />
            <Route path="/addcar" exact element={<Addcar />} />
            <Route path="/booking" exact element={<Booking />} />
            <Route path="/cars" exact element={<Cars />} />
            <Route path="/contacts" exact element={<Contacts />} />
            <Route path="/" exact element={<Index />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/registration" exact element={<Registration />} />
            <Route path="/resentbooking" exact element={<Resentbooking />} />
            <Route path="/services" exact element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

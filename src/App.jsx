
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home/Home";
import Navbar from "./layouts/NavBar/NavBar";
import Footer from "./layouts/Footer/Footer";
import Contact from "./pages/contact/Contact";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;






import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home/Home";
import Navbar from "./layouts/NavBar/NavBar";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;





import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/Navbar/Navbar.js";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;
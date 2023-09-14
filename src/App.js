import logo from "./logo.svg";
import "./App.css";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Toast from "./Toast";
import FAQ from "./FAQ";
import Faq2 from "./Faq2";
import AccordionComponent from "./AccordionComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
import NavBar2 from "./Navbar2";
import Explore from "./Table/Explore";



function App() {
  return (
    <>
    <Toast/>
      <ToastContainer />

    <NavBar2/>
    <NavBar/>
    <Navigation/>
    <Explore/>
      
      <FAQ/> 
      <Faq2/>
      <div>
        <div className="Faq">
          <AccordionComponent />
        </div>
      </div>
      <Table/>
    </>
  );
}

export default App;

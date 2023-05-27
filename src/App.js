import logo from "./logo.svg";
import "./App.css";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Toast from "./Toast";

function App() {
  return (
    <>
      <Toast/>
      <ToastContainer />
    </>
  );
}

export default App;

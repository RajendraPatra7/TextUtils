import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not !

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // TO AUTOMATICALLY DISMISS THE ALERT AFTRE INTERVAL

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
      // document.title = "TextUtils - Dark Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      // document.title = "TextUtils - Light Mode ";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alertMsg={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Your Text To Analyze ! "
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;

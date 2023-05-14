import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#535f6b";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";
      // setInterval(()=>{
      //     document.title="TextUtils is Amazing"
      // },1000);
      // setInterval(()=>{
      //   document.title="Install TextUtils"
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d8dde3";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        toggleMode={toggleMode}
        mode={mode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <About /> */}

        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;

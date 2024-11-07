import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";
import {Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });

    const alertBox = document.getElementsByClassName("alerts")[0];
    alertBox.style.animation = "none";
    alertBox.style.display = "block";
    setTimeout(() => {
      alertBox.style.animation = "slideDown .4s linear";
    }, 10);

    setTimeout(() => {
      console.log("hello");
      alertBox.style.animation = "";
      alertBox.style.animation = "sildeUp 0.4s linear";
      setTimeout(() => {
        alertBox.style.display = "none";
      }, 400);
    }, 2000);
  };

  const styleToggle = () => {
    if (mode === "light") {
      console.log("dark");
      document.body.style.backgroundColor = "black";
      setMode("dark");
      showAlert("Dark mode Enabled!", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light mode Enabled!", "success");
    }
  };

  const redTheme = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "#3b0505";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        logoTitle="TextUtils"
        mode={mode}
        toggleStyle={styleToggle}
        redTheme={redTheme}
      />
      <div className="alerts">
        {alert && <Alert showAlert={showAlert} alert={alert} />}
      </div>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter text for updating"
                showAlert={showAlert}
                mode={mode}
              />
            }
          ></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

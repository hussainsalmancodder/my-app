// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Aboutme from "./components/Aboutme";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); // Enable wheather darkmode or not
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 6000);
  };
  const settogglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", "success");
      document.title = "textUrils - dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "textUrils - light mode";
    }
  };
  return (
    <>
      <Alert alert={alert} />
      <BrowserRouter>
        <Navbar
          title="Hello pakistan"
          aboutText="Hello About"
          mode={mode}
          togglemode={settogglemode}
        />
        <Routes>
          <Route path="/about" element={<Aboutme />}></Route>
          <Route
            path="text"
            element={
              <TextForm
                showalert={showalert}
                heading="This is a Headings"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

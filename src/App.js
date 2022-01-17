import {useState} from "react";
import "./App.css";
import Register from "./pages/register/register";
import Login from "../src/pages/login/login";
import Home from "../src/pages/home/home";

function App() {
 
  return (
    <div className="App">
     <Register />
     {/* <Home /> */}
    </div>
  );
}

export default App;

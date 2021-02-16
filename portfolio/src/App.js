import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Greeting from "./components/Greeting/Greeting.jsx";
import Navmenu from "./components/Navigation/Navmenu";
import Portfolio from "./components/Portfolio/Portfolio";

function App(props) {
  return (
    <div>
      <Greeting></Greeting>
      <Navmenu></Navmenu>
      <About></About>
      <Portfolio projects={props.state.projects}></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;

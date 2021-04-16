import React, { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Greeting from "./components/Greeting/Greeting.jsx";
import Navmenu from "./components/Navigation/Navmenu";
import Portfolio from "./components/Portfolio/Portfolio";

function App(props) {
  // const [section, setSection] = useState("greeting");

  const about = React.useRef();
  const contact = React.useRef();
  const greeting = React.useRef();
  const portfolio = React.useRef();

  function scrollPage(link) {
    link.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <div>
      <Greeting
        about={about}
        scrollPage={scrollPage}
        greeting={greeting}
      ></Greeting>
      <Navmenu
        contact={contact}
        portfolio={portfolio}
        greeting={greeting}
        about={about}
        scrollPage={scrollPage}
      ></Navmenu>
      <About about={about}></About>
      <Portfolio
        portfolio={portfolio}
        projects={props.state.projects}
      ></Portfolio>
      <Contact contact={contact}></Contact>
    </div>
  );
}

export default App;

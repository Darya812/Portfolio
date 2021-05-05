import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Introduction from "./components/Introduction/Introduction";
import Navmenu from "./components/Navigation/Navmenu";
import ParticlesWrapper from "./components/ParticlesWrapper/ParticlesWrapper";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const about = React.useRef();
  const contact = React.useRef();
  const greeting = React.useRef();
  const portfolio = React.useRef();

  const [section, setSection] = useState(greeting);

  function scrollPage(link) {
    link.current.scrollIntoView({ block: "start", behavior: "smooth" });
    setSection(link);
  }

  function scrollListener() {
    let scrollH = window.pageYOffset + 30;

    if (scrollH < about.current.offsetTop) {
      return setSection(greeting);
    } else if (
      scrollH >= about.current.offsetTop &&
      scrollH < portfolio.current.offsetTop
    ) {
      return setSection(about);
    } else if (
      scrollH >= portfolio.current.offsetTop &&
      scrollH < contact.current.offsetTop - 100
    ) {
      return setSection(portfolio);
    }
    return setSection(contact);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div>
      <ParticlesWrapper>
        <Introduction
          about={about}
          scrollPage={scrollPage}
          greeting={greeting}
        />
      </ParticlesWrapper>
      <Navmenu
        section={section}
        contact={contact}
        portfolio={portfolio}
        greeting={greeting}
        about={about}
        scrollPage={scrollPage}
      />
      <About about={about} />
      <Portfolio portfolio={portfolio} />
      <Contact contact={contact} />
    </div>
  );
}

export default App;

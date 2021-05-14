import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Navmenu from "./components/Navigation";
import ParticlesWrapper from "./components/ParticlesWrapper";
import Portfolio from "./components/Portfolio";

function App() {
  const about = useRef();
  const contact = useRef();
  const greeting = useRef();
  const portfolio = useRef();

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

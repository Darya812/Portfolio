import raindrop from "./Project/images/raindrop.png";
import weather from "./Project/images/weather.png";
import syngolo from "./Project/images/syngolo.png";
import flex from "./Project/images/flex.png";
import drum from "./Project/images/drum.png";

const state = {
  projects: [
    {
      id: "0",
      name: "Weather App",
      description: "Three days weather forecast app with geolocation",
      img: weather,
      linkDemo: "https://darya812.github.io/fancy-weather/",
      linkGithub: "https://github.com/Darya812/fancy-weather/tree/weather",
    },
    {
      id: "1",
      name: "Raindrops Game",
      description:
        "A math simulator that allows you to consolidate the skills of arithmetic operations: addition, subtraction, multiplication and division",
      img: raindrop,
      linkDemo: "https://darya812.github.io/raindrops/",
      linkGithub: "https://github.com/Darya812/raindrops/tree/game",
    },
    {
      id: "2",
      name: "Drum kit",
      description:
        "A music application in which you can play sounds by pressing keys on the keyboard",
      img: drum,
      linkDemo: "https://darya812.github.io/Drum-Kit/",
      linkGithub: "https://github.com/Darya812/Drum-Kit/tree/drum",
    },

    {
      id: "3",
      name: "Flex Panel",
      description: "JavaScript image slider",
      img: flex,
      linkDemo: "https://darya812.github.io/Flex-Panel-Gallery/",
      linkGithub:
        "https://github.com/Darya812/Flex-Panel-Gallery/tree/flex-panel",
    },
    {
      id: "4",
      name: "Simple Singolo",
      description: "kkjhdkuashfdkh;aohf",
      img: syngolo,
      linkDemo: "https://darya812.github.io/singolo/",
      linkGithub: "https://github.com/Darya812/singolo/tree/singolo_branch",
    },
  ],
};

export default state;

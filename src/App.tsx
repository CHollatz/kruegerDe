import React, { useState } from "react";
import "./App.css";
import { About, Downloads, Footer, Header, Navbar } from "./components";
import Scroll, { animateScroll as scroll } from "react-scroll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Konami from "react-konami-code";
import mouse from "./assets/2mouse.png";

const App = () => {
  const Element = Scroll.Element;
  const scroller = Scroll.scroller;

  const [isCustomCursor, setIsCustomCursor] = useState<boolean>(false);

  const onNavPress = (ref: string) => {
    scroller.scrollTo(ref, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

  const easterEgg = () => {
    alert("Hey, du hast etwas gefunden! Super gemacht!");
    setIsCustomCursor(!isCustomCursor);
  };

  console.log(`url(${mouse})`);

  return (
    <div
      className="relative"
      style={{ cursor: isCustomCursor ? `url(${mouse}) ,default` : "" }}
    >
      {/* <Element name="navbar"> */}
      <Navbar />
      {/* </Element> */}
      {/* <Element name="header"> */}
      <Header onNavPress={onNavPress} />
      {/* </Element> */}
      {/* <Element name="about">
            <About />
        </Element> */}
      {/* <Element name="samples"> */}
      <Downloads />
      {/* </Element> */}
      {/* <Element name="footer"> */}
      <Footer />
      {/* </Element> */}
      {/* <Konami action={() => easterEgg()} timeout={1000} /> */}
      {/* <button
        className="fixed bottom-0 right-0 h-10 w-10 rounded-lg m-8 border border-blue-400 bg-gray-800 text-gray-200"
        onClick={() => scroll.scrollToTop()}
      >
        <ArrowUpwardIcon />
      </button> */}
    </div>
  );
};

export default App;

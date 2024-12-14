"use client";
import React, { useState } from "react";
import { Downloads, Footer, Header, Navbar } from "../components";
import Konami from "react-konami-code";
import mouse from "../assets/2mouse.png";
import "./globals.css";

const App = () => {
  const [isCustomCursor, setIsCustomCursor] = useState<boolean>(false);

  const easterEgg = () => {
    alert("Hey, du hast etwas gefunden! Super gemacht!");
    setIsCustomCursor(!isCustomCursor);
  };

  return (
    <div
      className="relative"
      style={{ cursor: isCustomCursor ? `url(${mouse}) ,default` : "" }}
    >
      <Konami action={easterEgg} />
      <Navbar />
      <Header />
      <Downloads />
      <Footer />
    </div>
  );
};

export default App;

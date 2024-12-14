import React, { useRef, useState } from "react";
import jugger from "../assets/kapitel-1-jugger.mp3";
import buch from "../assets/buch.png";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import AudioPlayer, { AudioPlayerRef } from "./Audio/AudioPlayer";

const Slideout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const playerRef = useRef<AudioPlayerRef | undefined>(undefined);

  const pausePlayer = () => {
    if (playerRef.current) {
      playerRef.current.playPauseHandler();
    }
  };

  const toggleSlideout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={() => {
          pausePlayer();
          toggleSlideout();
        }}
        className={`fixed top-0 transform ${
          isOpen
            ? "lg:translate-x-[60rem] bg-gray-800 hidden lg:block"
            : "translate-x-0 bg-orange-800"
        } z-50  text-white p-2 focus:outline-none transition-transform duration-300 rounded-r-lg`}
      >
        {isOpen ? (
          <CloseIcon />
        ) : (
          <div className="text-left">
            <p>Mein Hörbuch jetzt erhältlich!</p>
            <p>&quot;Geschichten aus Tausend und einem Turnier&quot;</p>
            <div className="flex">
              <p>Jetzt hier reinhören!</p>
              <TouchAppIcon />
            </div>
          </div>
        )}
      </button>

      <div
        className={`fixed top-0 left-0 rounded-br-lg bg-gray-800 text-white w-screen lg:w-[60rem] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-xl z-40`}
      >
        <div className="p-2 text-sm lg:text-base">
          <div className="flex">
            <Image src={buch} alt="" className="hidden lg:block w-64 pr-2" />
            <div className="lg:p-2 pr-4">
              <h2 className="text-2xl font-bold mb-4">
                Geschichten aus Tausend und einem Turnier
              </h2>
              <p>
                Ist zum einen eine anekdotische Nacherzählung die den Werdegang
                und die Erlebnisse eines Juggerspielers, der zufällig auch noch
                mein Bruder ist, und zum anderen eine Sammlung an märchenhaften
                Geschichten anderer aus der Szene, rund um die Entstehung und
                die Commmunity. Du weißt nicht was Jugger ist? Das erkläre ich
                Dir direkt im ersten Kapitel in das Du hier schoneinmal
                reinlauschen kannst
              </p>
              <div className="lg py-2">
                <AudioPlayer
                  rounded
                  key={""}
                  audioSrc={jugger}
                  ref={playerRef}
                />
              </div>
              <div>
                Lust auf Mehr oder Fragen? Das zweistündige komplette Hörbuch
                kannst Du für den Selbstkostenpreis von 5€ erwerben. Einfach
                eine E-Mail mit Deiner Anschrift an fk.synchron@gmail.com
              </div>
            </div>
            <button
              onClick={() => {
                pausePlayer();
                toggleSlideout();
              }}
              className={`fixed top-0 right-0 p-2 ${
                isOpen ? "block lg:hidden" : ""
              }`}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideout;

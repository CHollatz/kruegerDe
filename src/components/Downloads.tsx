import React from "react";
import { AudioButton, AudioPlayer } from "./Audio";
import korra from "../assets/korra.mp4";
import vaiana from "../assets/vaiana.mp4";
import darkShadows from "../assets/darkShadows.mp4";

import helikopter from "../assets/helikopter.mp3";
import herrenmode from "../assets/herrenmode.mp3";
import nimmerPlatt from "../assets/nimmerPlatt.mp3";
import rafael from "../assets/rafael.mp3";
import sandmann from "../assets/sandmann.mp3";
import fragezeichen from "../assets/3Fragezeichen.mp3";
import werther from "../assets/wer-schoss-auf-werther.mp3";

const posts = [
  {
    title: "Die Legende von Korra",
    description: "",
    videoSrc: korra,
    audioSrc: undefined,
  },
  {
    title: "Vaiana",
    description: "",
    videoSrc: vaiana,
    audioSrc: undefined,
  },
  {
    title: "Dark Shadows",
    description: "",
    videoSrc: darkShadows,
    audioSrc: undefined,
  },
];

const projects = [
  {
    title:
      "Wer schoss auf Werther? - Ein True-Crime Audio-Walk (©Kulturamt der Stadt Wetzlar)",
    description: ``,
    videoSrc: undefined,
    audioSrc: werther,
  },
  {
    title:
      "Die drei Fragezeichen und der Superpapagei Mitmachhörspiel (©Lauscherlounge)",
    description: ``,
    videoSrc: undefined,
    audioSrc: fragezeichen,
  },
  {
    title: "Herrenmode",
    description: ``,
    videoSrc: undefined,
    audioSrc: herrenmode,
  },
  {
    title: "Rafael",
    description: ``,
    videoSrc: undefined,
    audioSrc: rafael,
  },
  {
    title: "Helikopter",
    description: ``,
    videoSrc: undefined,
    audioSrc: helikopter,
  },
  {
    title: "Der Sandmann",
    description: ``,
    videoSrc: undefined,
    audioSrc: sandmann,
  },
  {
    title: "Der kleine Junkie Nimmerplatt",
    description: ``,
    videoSrc: undefined,
    audioSrc: nimmerPlatt,
  },
];

export const Downloads = () => {
  return (
    <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative w-full md:w-2/3 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-blue-400 sm:text-4xl">
            Hörproben
          </h2>
          <p className="mt-3 mx-auto text-xl text-gray-200 sm:mt-4 leading-8">
            Hier ein paar (Hör-) Proben meiner bisherigen Arbeiten
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div>
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8"
              >
                {post.audioSrc && (
                  <div className="flex-shrink-0">
                    <AudioPlayer key={post.title} audioSrc={post.audioSrc} />
                  </div>
                )}

                <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-200">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-200">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  {post.videoSrc && (
                    <div style={{ alignSelf: "end" }}>
                      <AudioButton
                        type="download"
                        downloadSrc={post.videoSrc}
                      />
                    </div>
                  )}
                </div>
                {post.videoSrc && (
                  <div className="flex-shrink-0">
                    <video width="100%" height="auto" controls>
                      <source src={post.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            {projects.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8"
              >
                {post.audioSrc && (
                  <div className="flex-shrink-0">
                    <AudioPlayer key={post.title} audioSrc={post.audioSrc} />
                  </div>
                )}

                <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-200">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-200">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  {post.videoSrc && (
                    <div style={{ alignSelf: "end" }}>
                      <AudioButton
                        type="download"
                        downloadSrc={post.videoSrc}
                      />
                    </div>
                  )}
                </div>
                {post.videoSrc && (
                  <div className="flex-shrink-0">
                    <video width="100%" height="auto" controls>
                      <source src={post.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-200 text-xs mt-4">
          Sollten Sie Probleme mit dem Abspielen der Dateien haben, deaktivieren
          Sie bitte Ihren Adblocker.
        </p>
      </div>
    </div>
  );
};

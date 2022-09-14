import React from "react";
import { AudioButton, AudioPlayer } from "./Audio";
import korra from "../assets/korra.mp4";
import vaiana from "../assets/vaiana.mp4";
import darkShadows from "../assets/darkShadows.mp4";

import animatedMinds from "../assets/animatedMinds.mp4";
import frozen2 from "../assets/frozen2.mp4";

import tuner from "../assets/tuner.mp3";
import helikopter from "../assets/helikopter.mp3";
import rafael from "../assets/rafael.mp3";

const posts = [
  {
    title: "Die Legende von Korra",
    description: `Der Ausschnitt aus „Die Legende von Korra“ war als Aufnahmeprojekt leider ein wenig vom Pech verfolgt, zunächst ließen sich weder
DvD- noch Blue-Ray-Version abgreifen, dann ließen sich nirgendwo passende Soundeffekte finden und zuletzt verschwand zwischenzeitlich
die Session. Jedoch, all dies konnte behoben werden, und ich finde es ist eine meiner besten Arbeiten dieses Halbjahr geworden.
Inhaltlich behandelt die Szene ein Aufeinandertreffen von Avatar Korra und dem Wasserbändiger Tarrlock, einem Ratsmitglied der Regierung
von Republika, der Stadt in dem das Geschehen spielt.
Vor allem die actionreichen Kampfszenen und das im Gegensatz dazu stehende sehr ruhige Gespräch geben dieser Aufnahme auch eine gewisse
Vielfalt an Emotionen. Auch hat es mir Spaß gemacht einmal nicht den „netten“ zu spielen, sondern den Bösewicht raushängen zu lassen.
`,
    videoSrc: korra,
    audioSrc: undefined,
  },
  {
    title: "Vaiana",
    description: `Der Ausschnitt aus dem Film „Vaiana“ in dem Vaiana das erste Mal Auf den Halbgott Maui trifft und von diesem deutlich weniger begeistert
ist als er es gewohnt ist war eine meiner ersten Synchronaufnahmen überhaupt.  Die sehr von sich selbst überzeugte Art meiner Figur und
das dabei konsequente falschverstehen seiner Gesprächspartnerin hat mir an dieser Aufnahme den meisten Spaß gemacht. Auch das gegenseitige
Unterbrechen und ins Wort fallen hat sie zwar anspruchsvoll, aber dadurch auch durchaus spaßig werden lassen.`,
    videoSrc: vaiana,
    audioSrc: undefined,
  },
  {
    title: "Dark Shadows",
    description: `Die Synchronisation von Johnny Depp in dem Ausschnitt von Dark Shadows war die Aufnahme, an der wir vermutlich am längsten gefeilt haben.
Denn sie enthält viele kleine Nuancen, Reacs und unterschiedliche Stimmungen. Jedoch denke ich, dass wir trotzdem das Beste aus dem Clip
herausgeholt haben. Auch dass uns die originalspur der Hintergrundgeräusche und Musik zur Verfügung stand trägt, wie ich finde einen großen
Teil zum stimmigen Gesamtbild bei. Inhaltlich sehen wir das Aufeinandertreffen von dem Vampir Barnabas Collins (Johnny Depp) und der Hexe
Angelique Bouchard (Eva Green). Sie hatte ihn aufgrund von unerwiederten Gefühlen für ihn vor annähernd 200 Jahren in einem Sarg vergraben lassen,
aus dem er kürzlich befreit wurde und nun zurück im Familienanwesen ist.`,
    videoSrc: darkShadows,
    audioSrc: undefined,
  },
];

const projects = [
  {
    title: "Animated Minds",
    description: ``,
    videoSrc: animatedMinds,
    audioSrc: undefined,
  },
  {
    title: "Frozen 2 - Olaf",
    description: ``,
    videoSrc: frozen2,
    audioSrc: undefined,
  },
  {
    title: "Tuner",
    description: ``,
    videoSrc: undefined,
    audioSrc: tuner,
  },
  {
    title: "Helikopter",
    description: ``,
    videoSrc: undefined,
    audioSrc: helikopter,
  },
  {
    title: "Rafael",
    description: ``,
    videoSrc: undefined,
    audioSrc: rafael,
  },
];

export const Downloads = () => {
  return (
    <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative w-full md:w-2/3 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-blue-400 sm:text-4xl">
            Projektarbeit
          </h2>
          <p className="mt-3 mx-auto text-xl text-gray-200 sm:mt-4 leading-8">
            Dieses Halbjahr war das Thema Synchronisation. Im Gegensatz zu den
            vorangegangenen Hörspielen wurden hier die Sprachparts wieder
            einzeln aufgenommen, weshalb es teilweise recht fordernd war,
            schnelle Reaktionen authentisch zu gestalten. Auch das „auf
            Lippe“-Arbeiten war durchaus anspruchsvoll, hat aber meiner Meinung
            nach auch zum Großteil den Reiz dieser Disziplin ausgemacht. Alles
            in Allem denke ich, dass das Synchronisieren, vor allem von
            Animierten Filmen und Serien und die Hörspiele mir bisher am meisten
            Spaß bereitet haben und ich hoffe später einmal in diese Richtung
            arbeiten zu können.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
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
                    <AudioButton type="download" downloadSrc={post.videoSrc} />
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
        <div className="text-center mt-32">
          <h2 className="text-3xl tracking-tight font-extrabold text-blue-400 sm:text-4xl">
            Hausaufgabe
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {projects.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
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
                    <AudioButton type="download" downloadSrc={post.videoSrc} />
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
        <p className="text-gray-200 text-xs mt-4">
          Sollten Sie Probleme mit dem Abspielen der Dateien haben, deaktivieren
          Sie bitte Ihren Adblocker.
        </p>
      </div>
    </div>
  );
};

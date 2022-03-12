import React from 'react'
import { AudioPlayer } from './Audio';
import lama from "../assets/lama.mp3";
import kanguru from "../assets/kanguru.mp3";
import freundschaft from "../assets/freundschaft.mp3";

const posts = [
    {
        title: 'Das Känguru Manifest',
        description:
            `Als erstes Sample, das ich für meine Projektarbeit einreichen wollte, stand dieser Text für mich fest.
Inhaltlich befinden sich die drei Akteure Marc-Uwe Kling, das Känguru und eine Angestellte, wie der Titel schon verrät, in der Ausländerbehörde. Dort versucht das Känguru der unmotivierten Angestellten klarzumachen, dass es aufgrund seiner Festanstellung bei Marc-Uwe nicht abgeschoben werden kann. Besonders interessant an diesem Text finde ich sowohl die verschiedenen Tempi und Gemütszustände der Akteure, als auch die Tatsache, dass die englische, französische und spanische Übersetzung des Wortes „Scheißverein“ wie selbstverständlich im Redefluss einzubauen waren.
`,
        audioSrc: kanguru
    },
    {
        title: 'Ein Königreich für ein Lama',
        description:
            `Das Sample der Restaurantszene aus „Ein Königreich für ein Lama“ habe ich ausgewählt, da es mir sowohl bei der Aufnahme, als auch beim späteren Hören am meisten Spaß gemacht hat.
Obgleich ich im Nachhinein festgestellt habe, dass wir die Szene gänzlich anders angelegt haben als die Originalsprecher dies im Film tun, finde ich, dass unsere Version einen eigenen Charme besitzt.
Besonders gefallen hat mir die Herausforderung bei diesem Text, dass er aufgrund des schnellen Dialoges größtenteils als eine einzige zusammenhängende Aufnahme produziert werden musste.
Auch finde ich, dass die, wie im Kinder/Jugendgenre gewünscht, überzogene Darstellung der Charaktere viel zur Dynamik und dem Unterhaltungswert des Samples beitragen.
`,
        audioSrc: lama

    },
    {
        title: 'Freundschaft Plus',
        description:
            `Die Entscheidung, welches mein drittes und letztes Sample werden sollte, fiel mir nicht leicht. Einerseits wollte ich, da die ersten beiden Hörproben beide einen eher lustigen Charakter haben, nicht noch einen Text nehmen, der in diese Richtung geht, andererseits halte ich dies für meine Stärke.
Ich habe mich letztendlich für die Krankenhausszene aus „Freundschaft Plus“ entschieden.
Die Aufnahme selbst ist zwar recht kurz, aber ich finde es ist uns doch gelungen die Szene so anzulegen wie sie gedacht ist und ihr dennoch unsere eigene Note zu verleihen.
`,
        audioSrc: freundschaft

    }
]

export const Downloads = () => {

    return (
        <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

            <div className="relative w-full md:w-2/3 mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-blue-400 sm:text-4xl">Hörproben</h2>
                    <p className="mt-3 mx-auto text-xl text-gray-200 sm:mt-4 leading-8">
                        Auch in diesem Halbjahr sollten wieder Hörproben aus den Aufnahmen des vergangenen Halbjahres präsentiert werden. Die Entscheidung fiel mir nicht leicht, aber ich denke ich habe die richtigen Texte ausgewählt. Das Einsprechen der Hörspiele hat mir enorm viel Spaß bereitet. Vor allem die Möglichkeit im Studio aufeinander zu reagieren und schnell hin und her wechselnde Gespräche zu realisieren hat für mich den besonderen Reiz ausgemacht. Gerade im Vergleich zu den vorangegangenen Hörbuchaufnahmen.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <AudioPlayer key={post.title} audioSrc={post.audioSrc} />
                            </div>
                            <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-200">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-200">{post.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <p className='text-gray-200 text-xs mt-4'>Sollten Sie Probleme mit dem Abspielen der Dateien haben deaktivieren Sie bitte Ihren Adblocker.</p>
            </div>
        </div>
    )
}
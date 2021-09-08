import React from 'react'
import { AudioPlayer } from './Audio';
import literatur from "../assets/Literatur.mp3";
import nachrichten from "../assets/Nachrichten.mp3";
import schauspiel from "../assets/Schauspiel.mp3";
import werbung from "../assets/Werbung.mp3";
import werbungWav from "../assets/Werbung.wav";

const posts = [
    {
        title: 'Literatur',
        description:
            `Die Textpassage aus Naomi Noviks "Drachenbrut", dem ersten Band der "Die Feuerreiter seiner Majestät"-Reihe
 war das erste Sample, das für meine Projektarbeit feststand. Ausgewählt habe ich sie aus zwei Gründen: Zum einen
Ist es eine meiner persönlich liebsten Buchreihen, sodass ich mich recht gut in die Situation eindenken kann, zum andern
hat die Szene meiner Meinung nach eine Schöne Spannung und trotzdem ist recht klar worum es geht.
Außerdem ist mir bisher nicht bekannt, dass es von dieser Reihe eine Hörbuchumsetzung gibt und das finde ich extrem schade,
        lässt sich aber vielleicht hierdurch ändern.
In das Gesamtthema Großbritannien passt der Text, da die Hauptperson Will Laurence, ein Britischer Marinekapitän, der
sich in der Situation wiederfindet, in den napoleonischen Kriegen ein sehr seltenes Drachenei zu erbeuten, dessen Schlüpfling
von diesem Moment an sein komplettes Leben umkrempeln wird.`,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        audioSrc: literatur
    },
    {
        title: 'Nachrichten',
        description:
            `Der Nachrichtentext, den ich mir ausgesucht habe, handelt von einem Aufschwung in der britischen Wirtschaft. Damit ist er
für mein Gesamtthema Großbritannien prädestiniert. Außerdem finde ich, dass Wirtschaftsnachrichten der Inbegriff der
im Nachrichtengenre geforderten Informationsvermittlung darstellen und somit gut für ein Beispielsample in dieser
Kategorie geeignet sind. Der Artikel erschien am 12.08.2021 auf tagesschau.de und behandelt die Zusammenhänge der
britischen Wirtschaft mit Lockerungen der Corona-Maßnahmen.`,
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        audioSrc: nachrichten

    },
    {
        title: 'Schauspiel',
        description:
            `Der Ausschnitt aus Jan-Philipp Zymnys Text "Erster Monolog der Lady Cuttlefish", in der von der Bühnenversion leicht
alternierenden Form aus seinem Buch "Es war zweimal - Eine schriftliche Meditation über den Sinn und die Geheimnisse des Lebens"
ist ein Text über den ich lange nachgedacht habe. Die Tatsachen, dass er aus der Perspektive einer überspitzt dargestellten
britischen Lady geschrieben und vom Autor auf diversen Poetryslams bereits live vorgetragen wurde, haben mich zwar abgeschreckt,
aber letztendlich habe ich mich doch dafür entschieden. Nicht zuletzt, weil er sehr viel Spielraum für verschiedene Interpretationen
bietet, aber auch wegen seines einfach absurden und verquerten Witzes, die den Text zu einem meiner Lieblinge von Zymny machen.`,
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        audioSrc: schauspiel

    }, {
        title: 'Werbung',
        description:
            `Für mein werbisches Sample habe ich mich für einen TV-Spot einer Kenwood Küchenmaschine aus 2021 entschieden. In mein
Gesamtthema passt der Spot insofern, dass Kenwood eine britische Marke ist. Ich habe diesen Text ausgesucht, da er in den
wenigen Sätzen, aus denen der Spot besteht viele verschiedene Emotionen bedient und fast jeder zum Thema Küche/Kochen einen
Bezug hat. `,
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        audioSrc: werbung

    },
]

export const Downloads = () => {

    return (
        <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

            <div className="relative w-full md:w-2/3 mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-blue-400 sm:text-4xl">Hörproben</h2>
                    <p className="mt-3 mx-auto text-xl text-gray-200 sm:mt-4 leading-8">
                        Das übergeordnete Gesamtthema dieser Projektarbeit soll alle Samples miteinander verknüpfen, Ich entschied mich für ein
                        Thema, mit dem fast jeder zumindest einige Dinge verbindet, aber in erster Linie eines, das mich selbst interessiert:
                        Großbritannien.
                        Die Texte der Sample-Tracks stehen alle auf die ein oder andere Weise mit diesem Thema in Verbindung, sei es als Schauplatz
                        einer gesamten Buchreihe oder nur durch den Firmensitz der beworbenen Firma.
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
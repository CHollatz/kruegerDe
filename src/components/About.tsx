export const About = () => {
  return (
    <div className="relative py-16 bg-gray-700 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg w-2/3 mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-black"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-black"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-black"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 md:w-2/3 mx-auto">
        <h1>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-blue-400 sm:text-4xl">
            Wer ich bin?
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Mein Name ist Fabian Krüger und solange ich mich erinnere bin ich
          begeisterter Zuhörer. Ob nun Hörbücher und -spiele, synchronisierte
          Filme und Videospiele, der Offsprecher in Dokumentationen; schon früh
          wollte ich etwas derartiges machen.
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Neben meiner Tätigkeit als Technischer Prduktdesigner, dem
          hobbymäßigen Spielen von Handball und Pen-and-Paper-Rollenspielen, bis
          zur aktiven Mitgliedschaft im örtlichen Faschingsverein habe ich eine
          Ausbildung zum Sprecher absolviert. Da mir dies große Freude bereitete
          möchte ich nun in diese Brance einsteigen.
        </p>

        <h1>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-blue-400 sm:text-4xl">
            Die Fakten:
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-200 leading-8">
          Name: Fabian Krüger
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Geboren: 12.05.1996
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Kreisläufer auf dem Handballfeld: seit 2007
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Begeisterter Pen-and-Paper-Spieler: seit ca.2010
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Ausgebildeter Technischer Produktdesigner: seit 2016
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Aktives Mitglied &quot;Närrisches Kommitee Büblingshausen&quot;: seit
          2017
        </p>
        <p className="mt-8 text-xl text-gray-200 leading-8">
          Ausbildung zum (Synchron-)Sprecher an der Deutschen POP: April 2021
          bis September 2022
        </p>
      </div>
    </div>
  );
};

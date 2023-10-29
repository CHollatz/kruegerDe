import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import mic from "../assets/mikro.jpg";
import logo from "../assets/logo.png";

interface IHeader {
  onNavPress: (val: string) => void;
}

const navigation = [
  { name: "Über", href: "about" },
  { name: "Hörproben", href: "samples" },
  { name: "Kontakt", href: "footer" },
];

export const Header = (props: IHeader) => {
  const { onNavPress } = props;

  return (
    <div className="relative bg-gray-600  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-600  transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div>
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-600  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <p
                      key={item.name}
                      onClick={() => onNavPress(item.href)}
                      className="font-medium cursor-pointer text-gray-200 hover:text-blue-400"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-gray-600  ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-blue-400.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-gray-600  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <p
                        onClick={() => onNavPress(item.href)}
                        key={item.name}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-blue-400 hover:bg-gray-50 cursor-pointer"
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {/* <span className="block xl:inline">Hallo Welt!</span> */}
                <span className="block text-blue-400 xl:inline">
                  Hallo Welt!
                </span>
              </h1>
              <p className="mt-3 text-xl text-gray-200 leading-8 mr-8">
                Das schreiben Programmierer auf ihren ersten Gehversuchen
                meistens in die oberste Zeile ihrer ersten Webseite. Nun bin ich
                kein Programmierer, aber hier ist meine Webseite, mit der ich
                mich und meine ersten Schritte in die Welt des
                (Synchron-)Sprechens vorstelle.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={mic}
          // src={pult}
          alt=""
        />
      </div>
    </div>
  );
};

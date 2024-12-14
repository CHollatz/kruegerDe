import React from "react";

import fabiHeader from "../assets/fabiHeader.jpg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative bg-gray-600 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-600 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <a
            href="mailto:fk.synchron@gmail.com"
            className="ml-3 bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <div className="h-12 w-12 p-3">
              <svg
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </div>
            <p className="text-lg">fk.synchron@gmail.com</p>
          </a>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="-ml-0.5 block text-blue-400 xl:inline">
                  Fabian Krüger
                </span>
              </h1>
              <p className="mt-3 text-xl text-gray-200 leading-8">
                Die Stimme für dein Projekt
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={fabiHeader}
          alt=""
        />
      </div>
    </div>
  );
};

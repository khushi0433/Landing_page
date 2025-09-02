import React from "react";
import { Quote } from "lucide-react";

export default function Hero() {
  return (
    <main>
      <div className="relative isolate px-6 pt-0 lg:px-5">
        <div className="mx-auto max-w-2xl pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-40">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Master Tailwind CSS From{" "}
              <span className="text-green-300 font-thin decor-underline">
                Tailwindinit
              </span>
            </h1>
            <p className="mt-8 text-lg font-thin text-white sm:text-xl">
              Learn how to create modern, responsive, and beautifully designed
              websites with Tailwind CSS. From utility-first styling to advanced
              layouts, unlock the power to design faster and smarter without
              writing endless custom CSS.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-light text-gray-200 shadow-sm hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:text-green-900"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

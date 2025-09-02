import React from "react";


export default function Footer() {
  return (
<footer className="bg-black shadow-sm w-full">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-white sm:text-center">
      © 2023{" "}
      <a
        href="https://flowbite.com/"
        className="hover:underline text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        TailWindinit™
      </a>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
      <li>
        <a href="/about" className="hover:underline me-4 md:me-6">
          Home
        </a>
      </li>
      <li>
        <a href="/privacy" className="hover:underline me-4 md:me-6">
          AboutUs
        </a>
      </li>
      <li>
        <a href="/license" className="hover:underline me-4 md:me-6">
          Licensing
        </a>
      </li>
      <li>
        <a href="/contact" className="hover:underline">
          ContactUs
        </a>
        <a href="https://github.com/khushi0433" className="hover:underline ms-4">
          My_Github
        </a>
      </li>
    </ul>
  </div>
</footer>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Header() {
  return (
    <NavigationMenu.Root>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">TailwindInit</span>
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="TailwindInit Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="Open main menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-green-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-green-600"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-green-600"
          >
            AboutUs
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white hover:text-green-600"
          >
            ContactUs
          </a>
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-light text-white shadow-sm hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600"
          >
            Log in
          </a>
        </div>
      </nav>
    </NavigationMenu.Root>
  );
}

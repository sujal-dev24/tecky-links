"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-700 transition-colors">
              <span className="text-2xl font-bold text-white">T</span>
            </div>
            <span className="text-2xl font-bold text-purple-900">
              TECKY<span className="text-purple-600">Links</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-purple-700 hover:underline font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-purple-700 hover:underline font-medium transition duration-300"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-purple-700 hover:underline font-medium transition duration-300"
            >
              About
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/shortend-url"
              className="px-6 py-2.5 text-white bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg transition duration-200"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg transition duration-200"
            >
              About
            </Link>
            <div className="pt-4 space-y-3">
              <Link
                href="/shortend-url"
                className="block px-4 py-2 text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

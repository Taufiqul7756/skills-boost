"use client";

import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import Link from "next/link";
import { CiDark } from "react-icons/ci";
import { LuSunMedium } from "react-icons/lu";
import { Button } from "@nextui-org/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle the actual theme here
  };

  return (
    <nav className={`w-full p-4 bg-white dark:bg-gray-800 shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <Link
            href="/courses"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            COURSES
          </Link>
          <Link
            href="/developers"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            FOR DEVELOPERS
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            BLOG
          </Link>
        </div>

        <div className="flex justify-between items-center md:justify-center md:space-x-4 w-full md:w-auto">
          <Link href="/" className="text-lg font-bold">
            Logo
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            <FaBars size={24} />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <FaSearch
            className="text-gray-800 dark:text-gray-200 cursor-pointer"
            size={20}
          />
          <button onClick={toggleTheme}>
            {darkMode ? <LuSunMedium size={20} /> : <CiDark size={20} />}
          </button>
          {/* <Link
            href="/login"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            LOGIN
          </Link> */}

          <Button
            className="bg-slate-300 font-bold"
            radius="full"
            href="/login"
          >
            LOGIN
          </Button>

          {/* <Link
            href="/signup"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            SIGNUP
          </Link> */}
          <Button
            className="bg-[#001731] font-semibold text-white"
            radius="full"
            href="/signup"
          >
            SIGNUP
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            href="/courses"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            COURSES
          </Link>
          <Link
            href="/developers"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            FOR DEVELOPERS
          </Link>
          <Link
            href="/blog"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            BLOG
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <button onClick={toggleTheme}>
                {darkMode ? <LuSunMedium size={20} /> : <CiDark size={20} />}
              </button>
            </div>

            <div className="flex justify-end items-center gap-10">
              <FaSearch
                className="text-gray-800 dark:text-gray-200 cursor-pointer"
                size={20}
              />
              {/* <Link
                href="/login"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                LOGIN
              </Link> */}
              <Button
                className="bg-slate-300 font-bold"
                radius="full"
                href="/login"
              >
                LOGIN
              </Button>
              <Button
                className="bg-[#001731] font-semibold text-white"
                radius="full"
                href="/signup"
              >
                SIGNUP
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

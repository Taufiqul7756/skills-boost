"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { CiDark } from "react-icons/ci";
import { LuSunMedium } from "react-icons/lu";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import logo from "../../public/Logo.svg";
import CoursesDropdown from "./CoursesDropdown";

const CustomNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar className="bg-[#FDFCE8]">
      <div className="flex justify-start items-start">
        <div className="">
          <NavbarContent className="hidden md:flex space-x-6">
            <NavbarItem>
              <Button className="bg-[#FDFCE8] text-md" onClick={toggleDropdown}>
                COURSES
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Link href="/developers">FOR DEVELOPERS</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/blog">BLOG</Link>
            </NavbarItem>
          </NavbarContent>
        </div>

        <div className="px-24">
          <NavbarBrand className="flex justify-center w-full md:w-auto">
            <Link href="/">
              <Image
                src={logo}
                className=" cursor-pointer "
                alt="LOGO"
                width={138}
                height={25}
              />
            </Link>
          </NavbarBrand>
        </div>

        <div>
          <NavbarContent className="hidden md:flex items-center space-x-4">
            <CiSearch className="cursor-pointer" size={20} />
            <button onClick={toggleTheme}>
              {darkMode ? <CiDark size={20} /> : <LuSunMedium size={20} />}
            </button>
            <Button
              className="bg-white font-semibold"
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
          </NavbarContent>
        </div>
      </div>

      {showDropdown && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg">
          <CoursesDropdown />
        </div>
      )}

      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="md:hidden ">
        <NavbarMenuItem className="mt-16">
          <Link href="" onClick={toggleDropdown}>
            COURSES
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/developers">FOR DEVELOPERS</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/blog">BLOG</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <div className="flex justify-between items-center space-x-4 mt-10">
            <div>
              <CiSearch className="cursor-pointer" size={20} />
            </div>
            <div className="flex justify-between items-center gap-5">
              <button onClick={toggleTheme}>
                {darkMode ? <LuSunMedium size={20} /> : <CiDark size={20} />}
              </button>
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
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;

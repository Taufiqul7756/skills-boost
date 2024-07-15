"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
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
} from "@nextui-org/react";
import logo from "../../public/Logo.svg";

const CustomNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar className="" isBordered>
      <div className="flex justify-between items-center">
        <div className="">
          <NavbarContent className="hidden md:flex space-x-6">
            <NavbarItem>
              <Link href="/courses">COURSES</Link>
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
            <Image src={logo} alt="LOGO" width={138} height={25} />
          </NavbarBrand>
        </div>

        <div>
          <NavbarContent className="hidden md:flex items-center space-x-4">
            <FaSearch className="cursor-pointer" size={20} />
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
          </NavbarContent>
        </div>
      </div>

      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="md:hidden">
        <NavbarMenuItem>
          <Link href="/courses">COURSES</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/developers">FOR DEVELOPERS</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/blog">BLOG</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <div className="flex items-center space-x-4">
            <FaSearch className="cursor-pointer" size={20} />
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
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;

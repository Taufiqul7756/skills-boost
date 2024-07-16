"use client";

import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import logo from "../../public/Logo.svg";
import paypal from "../../public/PayPal svg.png";
import Mastercard from "../../public/Mastercard svg.png";
import visa from "../../public/visa.png";
import express from "../../public/express.png";
import vector from "../../public/Vector.png";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-400"
      // style={{
      //   backgroundImage: `url(${vector.src}) `,
      //   backgroundSize: " auto ",
      //   backgroundRepeat: "repeat-x",
      //   backgroundPosition: "bottom",
      // }}
    >
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 bg-footer-pattern bg-size-2 bg-repeat-2 w-full h-auto lg:h-[387px]">
        {/* first column - LOGO */}
        <div className="grid justify-center items-center">
          <div>
            <Image src={logo} alt="LOGO" width={138} height={25} className="" />
            <div className="grid gap-3 mt-5 text-[#F9F9F9] ">
              <p> Got Questions? Call us 24/7</p>
              <div className="flex justify-start items-center gap-2">
                <IoIosCall />
                <p>+02 055 4156</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <MdOutlineMail />
                <p>Hello@skillboost.com</p>
              </div>
              <div className="flex justify-start items-center gap-2 ">
                <IoLocationSharp />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6 text-white">
              <FaFacebookF size={23} />
              <FaTwitter size={23} />
              <FaLinkedin size={23} />
              <FaInstagram size={23} />
            </div>
          </div>
          <div className="absolute mt-[120px] ">
            <Image
              src={vector}
              alt="LOGO"
              width={500}
              height={50}
              className=""
            />
          </div>
        </div>

        {/* Company */}
        <div className="text-[#F9F9F9]">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <div className="font-md">
            <ul className="grid gap-2">
              <li className="mb-2">
                <a href="#" className="hover:text-blue">
                  All Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Instructor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Become a Instructor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-[#F9F9F9]">
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="grid gap-2">
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Helps Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div className="text-[#F9F9F9]">
          <div className="absolute mt-[57px] ">
            <Image
              src={vector}
              alt="LOGO"
              width={500}
              height={50}
              className=""
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Categories
            </h3>
            <ul className="grid gap-2">
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Web Security
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  DevOps
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Special Topics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribes */}
        <div className="text-[#F9F9F9]">
          <h3 className="text-lg font-semibold text-white mb-4">Subscribes</h3>
          <p className="text-md">
            2000+ Our students are subscribed around the world. Don’t be shy
            introduce yourself!
          </p>
          <div className="flex mt-8">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 p-2 shadow-sm">
              <FaEnvelope className="text-black dark:text-gray-300 mx-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 rounded-full"
              />
              <button className="bg-[#1C2130] text-white p-2 rounded-full">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#0C0F22] py-[16px] px-[120px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left text-[#F9F9F9]">
          <p className="text-sm">All Rights Reserved. © 2024 skillboost.com</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>We are using safe for</span>
            <div className="bg-slate-100 flex justify-center p-2 items-center w-[60px] h-[32px] px-[18px] gap-0 rounded-sm">
              <Image src={visa} alt="Visa" width={32} height={32} />
            </div>
            <div className="bg-slate-100 flex justify-center p-2 items-center w-[60px] h-[32px] px-[18px] gap-0 rounded-tl-4 rounded-sm">
              <Image src={paypal} alt="Visa" width={32} height={32} />
            </div>
            <div className="bg-slate-100 flex justify-center p-2 items-center w-[60px] h-[32px] px-[18px] gap-0 rounded-tl-4 rounded-sm">
              <Image src={Mastercard} alt="Visa" width={32} height={32} />
            </div>
            <div className="bg-slate-100 flex justify-center p-2 items-center w-[60px] h-[32px] px-[18px] gap-0 rounded-tl-4 rounded-sm">
              <Image src={express} alt="Visa" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

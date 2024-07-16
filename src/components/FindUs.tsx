import React from "react";
import android from "../../public/images/android.png";
import Image from "next/image";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { IoIosFlash } from "react-icons/io";
import cursor from "../../public/images/Coursor.gif";

const FindUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 px-4 mt-16 lg:px-48 bg-white">
      {/* Left Side */}
      <div className="flex flex-col items-start lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <div className="flex items-center mb-4 py-2">
          <Button className=" font-semibold px-2 py-6 rounded-full bg-[#F7F8F8]">
            <IoIosFlash size={24} className="bg-[#DDE0F3] px-1 rounded-full" />
            Download and Enjoy
          </Button>
          <div className="absolute lg:mt-[2px] Lg:ml-[130px] sm:mt-[2px] sm:ml-[130px]  hidden md:block ">
            <Image
              src={cursor}
              alt="LOGO"
              width={70}
              height={70}
              className=""
            />
          </div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          The Best Place To Learn? <br /> Wherever You Are.
        </h2>
        <p className="text-[#1C2130]">
          With the UpSkill App, you can learn no matter where you are. Download
        </p>
        <p className="mb-6 text-[#1C2130]">
          now to learn anything, anytime for free.
        </p>

        <div className="flex justify-center items-center gap-5 mb-12">
          <div className="flex justify-center items-center gap-5 ">
            <Button
              className="flex justify-center items-center gap-2 bg-[#131836] p-7 rounded-md"
              startContent={
                <IoLogoGooglePlaystore size={35} className="text-white" />
              }
            >
              <div className="grid justify-center items-center text-white ">
                <span className="font-thin">Get It On </span>
                <span>Google Play </span>
              </div>
            </Button>
          </div>
          <div className="flex justify-center items-center gap-5 ">
            <Button
              className="flex justify-center items-center gap-2 bg-[#131836] p-7 rounded-md"
              startContent={<FaApple size={35} className="text-white" />}
            >
              <div className="grid justify-center items-center text-white ">
                <span className="font-thin">Download </span>
                <span>App Store </span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center lg:w-1/2 space-x-4">
        <Image src={android} alt="Phone Left" width={200} height={400} />
        <Image src={android} alt="Phone Right" width={200} height={400} />
      </div>
    </section>
  );
};

export default FindUs;

import { Button, Input } from "@nextui-org/react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#DFD6F2] via-[#f6eaf3] to-[#FDFCE8] py-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center mb-4 py-2">
            <Button className=" font-semibold px-2 py-6 rounded-full bg-[#F7F8F8]">
              <IoIosFlash
                size={24}
                className="bg-[#DDE0F3] px-1 rounded-full"
              />
              The Leader in Online Learning
            </Button>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Develop Your Skills and Advance Your Career
        </h1>
        <p className="text-gray-700 mb-8">
          Begin, transition, or progress your career with over 5,000 courses,
          Professional Certificates, and degrees from prestigious universities
          and leading companies.
        </p>
        <div className="flex items-center justify-center mb-8 bg-white ">
          <Input
            placeholder="Search our 4000+ courses"
            className="rounded-full"
            startContent={<IoBookSharp className="h-5 w-5 text-[#1C2130]" />}
            endContent={
              <IoSearchCircleSharp className="h-8 w-8 text-[#1C2130]" />
            }
          />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center">
            <FaCheck className="h-5 w-5 text-[#131836]" />
            <span className="ml-2 text-sm">Trusted by 4,000+ companies</span>
          </div>
          <div className="flex items-center">
            <FaCheck className="h-5 w-5 text-[#131836]" />
            <span className="ml-2 text-sm">Free Forever</span>
          </div>
          <div className="flex items-center">
            <FaCheck className="h-5 w-5 text-[#131836]" />
            <span className="ml-2 text-sm">Set up in just 1 day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

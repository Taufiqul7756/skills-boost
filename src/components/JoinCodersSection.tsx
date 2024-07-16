import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import vector from "../../public/Vector.png";
import cursor from "../../public/images/Coursor.gif";
import Image from "next/image";

const JoinCodersSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-32 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
        {/* Left Side */}
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <div className="grid">
            <span className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Join thousands <br /> of coders
            </span>
          </div>
          <Button className="bg-white rounded-md" endContent={<FaArrowRight />}>
            Get Started
          </Button>
          <div className="absolute mt-[-35px] ml-[88px] hidden md:block ">
            <Image
              src={cursor}
              alt="LOGO"
              width={70}
              height={70}
              className=""
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div>
            <h3 className="text-3xl font-bold text-blue-500">1M+</h3>
            <p className="text-white">Global Learners</p>

            <div className="absolute mt-[-150px] mr-[100px] hidden md:block ">
              <Image
                src={vector}
                alt="LOGO"
                width={500}
                height={50}
                className=""
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">30k+</h3>
            <p className="text-white">People enrolled</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">110+</h3>
            <p className="text-white">Countries</p>
            <div className="absolute mt-[-150px] ml-[-200px] hidden md:block ">
              <Image
                src={vector}
                alt="LOGO"
                width={500}
                height={50}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCodersSection;

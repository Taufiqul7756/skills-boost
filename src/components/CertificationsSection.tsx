import React from "react";
import Image from "next/image";
import certificate from "../../public/images/certificate.png";
import fullStack from "../../public/images/full-stack.png";
import { Card, CardBody } from "@nextui-org/react";

const ProjectsAndCertificationsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Code In Your Browser
        </h2>
        <p className="text-gray-600">
          No need to download additional software! Run your Browser..
        </p>
      </div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Build real-world projects and gain practical experience.
          </h3>
          <p className="text-gray-600 mb-6">
            Create real-world projects and enhance your portfolio. Learn with
            our beginner-focused approach, covering every step from start to
            finish.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              "Full-Stack Development",
              "Frontend Development",
              "Backend Development",
              "Automation Development",
            ].map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow rounded-md"
              >
                <CardBody className="flex items-start p-2">
                  <div className="flex justify-start items-center">
                    <div>
                      <Image
                        src={fullStack}
                        alt="Full-Stack Icon"
                        className="w-8 h-8 mr-3"
                      />
                    </div>
                    <div className="grid gap-2">
                      <h4 className="font-semibold text-gray-800">{course}</h4>
                      <p className="text-gray-600">50 Courses ↗</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 lg:pl-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            And, earn certifications for the most in-demand skills in the
            market.
          </h3>
          <p className="text-gray-600 mb-6">
            Earn certification through our curated career paths & showcase your
            new skills in LinkedIn.
          </p>
          <div className="w-full">
            <Image
              src={certificate}
              alt="Certificate"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="mt-20">
            <a href="#" className="text-black hover:underline">
              View courses with Certificate ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndCertificationsSection;

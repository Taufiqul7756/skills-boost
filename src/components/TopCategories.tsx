import React from "react";
import Image from "next/image";

import frontend from "../../public/images/categories/frontend.png";
import backend from "../../public/images/categories/backend.png";
import fullStack from "../../public/images/full-stack.png";
import uiux from "../../public/images/categories/uiux.png";
import performanceOptimization from "../../public/images/categories/performanceOptimization.png";
import webSecurity from "../../public/images/categories/webSecurity.png";
import devops from "../../public/images/categories/devops.png";
import mobileAppDevelopment from "../../public/images/categories/mobileAppDevelopment.png";
import specialTools from "../../public/images/categories/specialTools.png";
import { Card, CardBody } from "@nextui-org/react";

const courses = [
  { name: "Front-End Development", count: "20 Courses", icon: frontend },
  { name: "Back-End Development", count: "18 Courses", icon: backend },
  { name: "Full-Stack Development", count: "50 Courses", icon: fullStack },
  { name: "Web Design", count: "10 Courses", icon: uiux },
  {
    name: "Performance Optimization",
    count: "5 Courses",
    icon: performanceOptimization,
  },
  { name: "Web Security", count: "18 Courses", icon: webSecurity },
  { name: "DevOps", count: "15 Courses", icon: devops },
  {
    name: "Mobile Development",
    count: "15 Courses",
    icon: mobileAppDevelopment,
  },
  { name: "Special Topics", count: "5 Courses", icon: specialTools },
];

const TopCategories = () => {
  return (
    <section className="bg-white py-16 px-8 lg:px-48">
      <div className="container mx-auto px-4 text-center mb-12">
        <div className="font-bold grid justify-center items-center mb-2">
          <h1>
            Top <span className="text-[#007BFF]">Categories</span>
          </h1>
        </div>
        <div className="grid justify-center items-center">
          <h2>
            Our popular services are organized with detailed descriptions to
            help you make informed decisions. Browse through a variety of
            offerings, each carefully categorized for your convenience. Find the
            perfect service that fits your needs and preferences, ensuring you
            get exactly what you're looking for quickly and efficiently.
          </h2>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow rounded-md"
            >
              <CardBody className="flex items-start p-2">
                <div className="flex justify-start items-center">
                  <div>
                    <Image
                      src={course.icon}
                      alt={`${course.name} Icon`}
                      className="w-8 h-8 mr-3"
                    />
                  </div>
                  <div className="grid gap-2">
                    <h4 className="font-semibold text-gray-800">
                      {course.name}
                    </h4>
                    <p className="text-gray-600">{course.count} ↗</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

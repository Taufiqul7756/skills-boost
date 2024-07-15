import React from "react";
import Image from "next/image";

import icon1 from "../../public/images/about-us.png";
import icon2 from "../../public/images/about-us.png";
import icon3 from "../../public/images/about-us.png";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#FEEFEA] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Why Study With Us
        </h2>
        <p className="text-gray-700 mb-12">
          Our popular services are organized with detailed descriptions to help
          you make informed decisions. Browse through a variety of offerings,
          each carefully categorized for your convenience. Find the perfect
          service that fits your needs and preferences, ensuring you get exactly
          what you're looking for quickly and efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src={icon1}
              alt="World Class Teachers"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">World Class Teachers</h3>
            <p className="text-gray-600">
              What Should be the structure of an effective website and designer
            </p>
          </div>
          <div className="text-center">
            <Image
              src={icon2}
              alt="Global Community"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Global Community</h3>
            <p className="text-gray-600">
              What Should be the structure of an effective website and designer
            </p>
          </div>
          <div className="text-center">
            <Image
              src={icon3}
              alt="Top Notch Courses"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Top Notch Courses</h3>
            <p className="text-gray-600">
              What Should be the structure of an effective website and designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

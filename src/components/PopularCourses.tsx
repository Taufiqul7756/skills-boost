"use client";

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { IoBookSharp } from "react-icons/io5";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const PopularCourses: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Md. Kamrul Hasan",
    },
    {
      id: 2,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 3,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 4,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 5,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 6,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.2,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 7,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 3.5,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 8,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 258,
      author: "Taufiqul Islam",
    },
    {
      id: 9,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 10,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 11,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 12,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 13,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 14,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
    {
      id: 15,
      title: "Become a Certified Web",
      des: "Development: HTML, CSS ans JavaS...",
      img: "/images/CourseCard.png",
      lesson: 12,
      hours: 16,
      price: "$5.50",
      ratings: 4.9,
      reviews: 250,
      author: "Taufiqul Islam",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startIdx = currentPage * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const visibleCards = cardData.slice(startIdx, endIdx);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} size={20} className="text-yellow-500" />
      );
    }

    if (halfStar) {
      stars.push(<FaStar key="half" size={20} className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-10 md:px-20 lg:px-44 relative">
      {/* Popular courses - Top */}
      <div className="container mx-auto px-4 text-center mb-12">
        <div className="font-bold grid justify-center items-center mb-2">
          <h1>
            Popular <span className="text-[#007BFF]">Courses</span>
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

      {/* Card section */}
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-x-auto scrollbar-hide relative">
        {visibleCards.map((item) => (
          <Card shadow="sm" key={item.id} className="mb-3">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover contain-fit h-[200px]"
                src={item.img}
              />
            </CardBody>

            <CardBody>
              <div className="flex justify-start items-center gap-16 text-[#8C8F9A]">
                <div className="flex gap-2 justify-start items-center">
                  <IoBookSharp />
                  <span> {item.lesson} Lesson</span>
                </div>
                <div className="flex gap-2 justify-start items-center">
                  <BsFillStopwatchFill />
                  <span> {item.hours} Hours</span>
                </div>
              </div>
            </CardBody>

            <CardBody className="text-small grid justify-between ">
              <div className="grid justify-between ">
                <b>{item.title}</b>
                <b>{item.des}</b>
              </div>
              <div className="flex gap-10 justify-start mt-5">
                <span>{item.ratings}</span>
                <span className="flex gap-1">{renderStars(item.ratings)}</span>
                <span>({item.reviews})</span>
              </div>

              <div className="mt-5 text-[#8C8F9A] text-[16px]">
                <span>By {item.author}</span>
              </div>
            </CardBody>

            <div className="px-5">
              <Divider />
            </div>
            <CardFooter className="flex justify-between items-center px-5">
              <p className="text-[#1C2130]">{item.price}</p>
              <span className="text-[#1C2130]">Enroll Course ↗ </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Carousel navigation buttons */}
      <div className="flex justify-center items-center gap-10 mt-4 lg:hidden ">
        <button
          className={`p-3 rounded-full bg-[#DDE0F3] ${
            currentPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className={`p-3 rounded-full bg-[#DDE0F3] ${
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <FaChevronRight />
        </button>
      </div>

      <button
        className={`absolute top-1/2 left-[30px] md:left-[60px] lg:left-[120px] transform -translate-y-1/2 p-3 rounded-full bg-[#DDE0F3] hidden lg:block ${
          currentPage === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 0}
      >
        <FaChevronLeft />
      </button>
      <button
        className={`absolute top-1/2 right-[30px] md:right-[60px] lg:right-[120px] transform -translate-y-1/2 p-3 rounded-full bg-[#DDE0F3] hidden lg:block ${
          currentPage === totalPages - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
      >
        <FaChevronRight />
      </button>
    </section>
  );
};

export default PopularCourses;

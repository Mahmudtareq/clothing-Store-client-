"use client";
import React, { useState } from "react";
import CarouselControls from "./CarouselControls";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";

import banner1 from '../../../asserts/banner1.jpg'
import banner2 from '../../../asserts/banner2.jpg'
import banner3 from '../../../asserts/banner3.jpg'
import banner4 from '../../../asserts/banner4.jpg'
interface CarouselItemProps {
  item: {
    src: string;
    alt: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
    offerText: string;
  };
  isActive: boolean;
}

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      src: banner1,
      alt: "image",
      title: "Special Offer",
      description: "Shop now and get up to 50% off!",
      buttonLabel: "Shop Now",
      buttonLink: "/shop",
      offerText: "Limited time offer",
    },
    {
      src: banner2,
      alt: "image hello",
      title: "New Arrivals",
      description: "Discover the latest trends!",
      buttonLabel: "Explore",
      buttonLink: "/new-arrivals",
      offerText: "Be the first to shop",
    },
    {
      src: banner3,
      alt: "shop image",
      title: "Seasonal Collection",
      description: "Explore our latest seasonal collection!",
      buttonLabel: "View Collection",
      buttonLink: "/seasonal-collection",
      offerText: "Shop now while stocks last",
    },
    {
      src: banner4,
      alt: "image mens",
      title: "Flash Sale",
      description: "Hurry! Limited-time flash sale!",
      buttonLabel: "Shop Now",
      buttonLink: "/flash-sale",
      offerText: "Don't miss out on amazing deals",
    },
  ];


  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="">
      <div className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-sm md:h-96">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              item = {item}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {items.map((_, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              isActive={index === activeIndex}
              onClick={handleIndicatorClick}
            />
          ))}
        </div>
        <CarouselControls direction="prev" onClick={handlePrev} />
        <CarouselControls direction="next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default HeroBanner;

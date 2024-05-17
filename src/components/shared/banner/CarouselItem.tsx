import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const CarouselItem: React.FC<CarouselItemProps> = ({ item, isActive }) => {
  return (
    <div
      className={`absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
        isActive ? "block" : "hidden"
      } duration-700 ease-in-out`}
    >
      <Image
        src={item.src}
        className="block w-full lg:h-auto h-[250px] object-cover"
        alt={item.alt}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-dark text-3xl font-bold mb-4">{item.title}</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <Link href={item.buttonLink}>{item.buttonLabel}</Link>
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;

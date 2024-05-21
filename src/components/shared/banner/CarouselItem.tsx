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
        className="block w-full   object-cover"
        alt={item.alt}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-dark text-3xl font-bold mb-2">{item.title}</h2>
        <h2 className="text-dark lg:text-xl text-md font-bold mb-2">
          {item.description}
        </h2>
        <span className="text-dark lg:text-xl text-md font-semibold mb-4">
          {item.offerText}
        </span>
        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
          <Link href="/products">{item.buttonLabel}</Link>
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;

import Image from "next/image";
import image from "../../../public/apple.png";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import React from "react";
import Link from "next/link";
interface FlaseSaleCardProps {
  flashItem: TFlashSaleItem;
}

const FlaseSaleCard: React.FC<FlaseSaleCardProps> = ({ flashItem }) => {
  const { name, price, flashSalePercentage, rating, _id, images } = flashItem;
  return (
    <div>
      <div className="w-full lg:h-[380px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <Image
          className="p-2 rounded-t-lg h-[250px] w-full"
          src={images}
          alt={name}
          width={500}
          height={50}
          sizes="100vw"
          style={{
            width: "100%",
          }}
        />
        <span className="absolute top-2 left-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium px-2.5 text-sm py-1 rounded-full">
          {flashSalePercentage}% off
        </span>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {name.slice(0, 30)}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              href={`flash-sale/${_id}`}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlaseSaleCard;

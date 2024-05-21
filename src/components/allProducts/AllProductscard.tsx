import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../../public/apple.png";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import { Badge } from "../ui/badge";
interface FlaseSaleCardProps {
  allItems: TFlashSaleItem;
}

const AllProductscard: React.FC<FlaseSaleCardProps> = ({ allItems }) => {
  const {
    name,
    price,
    flashSalePercentage,
    rating,
    images,
    _id,
    flashSale,
    new: isNew,
    brand
  } = allItems;
  return (
    <div>
      <div className="w-full lg:h-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
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

        <div>
          {flashSale ? (
            <Badge
              variant="destructive"
              className="absolute top-2 left-2 text-sm"
            >
              {" "}
              {flashSalePercentage}% off
            </Badge>
          ) : isNew ? (
            <Badge
              variant="secondary"
              className="absolute top-2 left-2 text-sm"
            >
              {" "}
              New
            </Badge>
          ) : null}
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {name.slice(0, 20)}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5 gap-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {rating}
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {brand}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price} <span className="line-through text-sm font-normal">15</span>
            </span>
            <Link
              href={`products/${_id}`}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductscard;

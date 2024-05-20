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
  } = allItems;
  return (
    <div>
      <div className="w-full lg:h-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <Link href="#">
          <Image
            className="p-2 rounded-t-lg h-[250px] w-full"
            src={images}
            alt="product image"
            width={500}
            height={250}
          />
        </Link>
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
              {name}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              href={`products/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

import Image from "next/image";
import image from "../../../public/apple.png";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import React from "react";
import Link from "next/link";
interface PopularSaleCardProps {
  popularItem: TFlashSaleItem;
}

const PopularProductsCard: React.FC<PopularSaleCardProps> = ({
  popularItem,
}) => {
  const { name, price, rating, images } = popularItem;
  return (
    <div>
      <div className="w-full lg:h-[380px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <Link href="#">
          <Image
            className="p-2 rounded-t-lg h-[250px] w-full"
            src={images}
            alt="product image"
            width={500}
            height={250}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-semibold dark:bg-blue-200 dark:text-blue-800 ms-3 px-3 py-1 rounded-full">
          {rating}
        </span>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="flex items-center justify-between my-3">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsCard;

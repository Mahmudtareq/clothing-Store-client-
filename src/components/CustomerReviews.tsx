import { TFlashSaleItem } from "@/types/ProductsTypes";
import Rating from "./Rating";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from "react";
interface PopularSaleCardProps {
  item?: TFlashSaleItem;
}
/* eslint-disable react/no-unescaped-entities */
const CustomerReviews: React.FC<PopularSaleCardProps> = ({ item }) => {
  return (
    <div>
      <div className="max-w-screen-md">
        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
          {item?.reviews.map((title, idx) => (
            <div key={idx}>
              <span className="">{title.comment}</span>
              <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                    {title.reviewer}
                  </cite>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

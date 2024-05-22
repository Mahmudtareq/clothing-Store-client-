import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightFromLine } from "lucide-react";
import PopularProductsCard from "./PopularProductsCard";
import { getProductsMensData } from "@/data/mensProducts";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import { getAllProductsData } from "@/utils/products";

const PopularProducts = async () => {
  // const data: TFlashSaleItem[] = await getProductsMensData();
  const products: TFlashSaleItem[] = await getAllProductsData();
  const mostPopular: TFlashSaleItem[] = products.filter(
    (item) => item.rating >= 4.6
  );
  return (
    <div className="mt-[3.5rem]">
      <div className="flex items-start justify-between flex-wrap">
        {" "}
        <div className="flex flex-col ">
          <span className="lg:text-[32px] text-[#3D3D3D] text-[24px] dark:text-white">
            Trending Products
          </span>
          <div className="flex flex-col text-justify my-3">
            <span className="">
              Discover the latest must-have items at E-SHOP! Our trending
              products elevate your lifestyle with innovation and style .
            </span>
            <span>
              Explore top-selling smart home assistants for effortless task
              management!
            </span>
          </div>
        </div>
        <Button className="rounded-full  hover:underline cursor-pointer">
          <span className="flex items-center gap-2">
            <Link href="/products">View All</Link>{" "}
            <ArrowRightFromLine className="w-5 h-5" />
          </span>
        </Button>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4  mt-8 ">
        {mostPopular.slice(1, 9).map((popularItem) => (
          <PopularProductsCard
            key={popularItem._id}
            popularItem={popularItem}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

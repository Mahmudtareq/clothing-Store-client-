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
      <div className="flex items-center justify-between flex-wrap">
        {" "}
        <div className="flex flex-col">
          <span className="lg:text-[32px] text-[#3D3D3D] text-[24px]">
            Trending Products
          </span>
          <p className="my-3 lg:w-1/2 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina.
          </p>
        </div>
        <Button className="rounded-full  hover:underline cursor-pointer">
          <span className="flex items-center gap-2">
            <Link href="/products">View All</Link>{" "}
            <ArrowRightFromLine className="w-5 h-5" />
          </span>
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-8 ">
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

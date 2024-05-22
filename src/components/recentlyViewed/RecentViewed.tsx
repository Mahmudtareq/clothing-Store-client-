import { TFlashSaleItem } from "@/types/ProductsTypes";
import { getAllProductsData } from "@/utils/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import RecentProductsCard from "./RecentProductsCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightFromLine } from "lucide-react";

const RecentViewed = async () => {
  const products: TFlashSaleItem[] = await getAllProductsData();
  return (
    <div className="mt-[3.5rem]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="lg:text-[32px] text-[#3D3D3D] text-[24px] dark:text-white">
          Recently Viewed
        </h2>
        <Button className="rounded-full  hover:underline cursor-pointer">
          <span className="flex items-center gap-2">
            <Link href="/products">View All</Link>{" "}
            <ArrowRightFromLine className="w-5 h-5" />
          </span>
        </Button>
      </div>
      <div className="w-full lg:px-4 px-2">
        <Carousel
          opts={{
            align: "start",
            loop: true,
        
          }}
          className="w-full mx-w-xl"
        >
          <CarouselContent className="">
            {products.splice(5, 20).map((product) => (
              <CarouselItem
                key={product._id}
                className="md:basis-1/3 lg:basis-1/4"
              >
                <RecentProductsCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ms-3 lg:ms-0 border-[#2b21eb] text-[#fa3fd1]" />
          <CarouselNext className="me-3 lg:me-0 border-[#2b21eb] text-[#fa3fd1]" />
        </Carousel>
      </div>
    </div>
  );
};

export default RecentViewed;

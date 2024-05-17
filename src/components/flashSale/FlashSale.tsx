import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightFromLine } from "lucide-react";
import FlaseSaleCard from "./FlaseSaleCard";
import { getProductsMensData } from "@/data/mensProducts";
import { TFlashSaleItem } from "@/types/ProductsTypes";

const FlashSale = async () => {
  const data: TFlashSaleItem[] = await getProductsMensData();
  const MenWithFlashSale: TFlashSaleItem[] = data.filter(
    (item) => item.flashSale === true
  );
  return (
    <div className="mt-[3.5rem]">
      <div className="flex items-center justify-between my-5">
        {" "}
        <span className="lg:text-[32px] text-[#3D3D3D] text-[24px]">
          Flash Sale
        </span>
        <Button className="rounded-full  hover:underline cursor-pointer">
          <span className="flex items-center gap-2">
            <Link href="/flash-sale">View All</Link>{" "}
            <ArrowRightFromLine className="w-5 h-5" />
          </span>
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-8 ">
        {MenWithFlashSale.slice(2, 6).map((flashItem) => (
          <FlaseSaleCard key={flashItem.id} flashItem={flashItem} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

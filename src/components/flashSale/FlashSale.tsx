import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightFromLine } from "lucide-react";
import FlaseSaleCard from "./FlaseSaleCard";

const FlashSale = () => {
  return (
    <div className="mt-[3.5rem]">
      <div className="flex items-center justify-between my-5">
        {" "}
        <span className="lg:text-[32px] text-[#3D3D3D] text-[24px]">
          Flash Sale
        </span>
        <Button className="rounded-full  hover:underline cursor-pointer">
          <span className="flex items-center gap-2">
            <Link href="#">View All</Link>{" "}
            <ArrowRightFromLine className="w-5 h-5" />
          </span>
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-8 ">
        <FlaseSaleCard />
        <FlaseSaleCard />
        <FlaseSaleCard />
        <FlaseSaleCard />
      </div>
    </div>
  );
};

export default FlashSale;

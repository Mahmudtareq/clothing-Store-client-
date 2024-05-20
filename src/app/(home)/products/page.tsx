/* eslint-disable react/no-unescaped-entities */
import AllProductscard from "@/components/allProducts/AllProductscard";
import Brandname from "@/components/productsFilter/BrandName";
import PriceRange from "@/components/productsFilter/PriceRange";
import RatingFilter from "@/components/productsFilter/RatingFilter";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import { getAllProductsData } from "@/utils/products";
import React from "react";

const AllProductsPage = async () => {
 
  const products: TFlashSaleItem[] = await getAllProductsData();
  let totalItem = products.length;

  return (
    <div className="container mx-auto lg:px-14 my-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <div className=" my-4">
            <PriceRange />
            <Brandname />
            <RatingFilter />
          </div>
        </div>
        <div className="lg:col-span-9 md:col-span-6 col-span-12">
          <div className="flex flex-col items-start mb-3">
            {" "}
            <span className="lg:text-[28px] text-[#3D3D3D] text-[24px]">
              Our Collection Of Products
            </span>
            <span className="text-[16px] font-semibold ">
              Showing 1 - <span> {totalItem}</span> of <span>{totalItem}</span>{" "}
              item(s)
            </span>
            <p className="text-justify text-[15px] font-normal my-3">
              Take advantage of our limited-time flash sale on stylish clothing!
              Save big on Men's Casual Jackets, offering unmatched comfort and
              style at a discounted price. Women's Running Shorts are now 10%
              off, perfect for summer runs and gym workouts.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {products.map((popularItem) => (
              <AllProductscard key={popularItem._id} allItems={popularItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;

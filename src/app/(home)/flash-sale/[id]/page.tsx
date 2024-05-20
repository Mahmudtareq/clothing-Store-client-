/* eslint-disable react/no-unescaped-entities */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProductsMensData } from "@/data/mensProducts";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import pic1 from "../../../asserts/details.png";
import Image from "next/image";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import Counter from "@/components/Counter";
import { Check } from "lucide-react";
import CustomerReviews from "@/components/CustomerReviews";
import { getSingleProductData } from "@/utils/products";

const ProducrsDetails = async ({ params }: any) => {
  const product = await getSingleProductData(params.id);
  return (
    <div className="container mx-auto lg:px-14 my-4">
      <div className="my-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-12 my-6">
        <div className="lg:col-span-6 col-span-12 gap-4">
          <Image
            src={product?.images}
            alt="products image"
            width={500}
            height={100}
          />
        </div>
        <div className="lg:col-span-6 col-span-12 gap-4">
          <h4 className="text-xl font-bold mt-2 mb-3">
            <span> {product?.name}</span>
          </h4>
          <Rating rating={product?.rating!} />
          <span className="text-xl font-extrabold mt-2 mb-3">
            {product?.currency ? "$" : "TK"} {product?.price}
          </span>
          <p className="text-[15px] font-normal mt-2 mb-3">
            {product?.description} Go sporty this summer with this vintage navy
            and white striped v-neck t-shirt from the Nike. Perfect for pairing
            with denim and white kicks for a stylish sporty vibe
          </p>
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <Check className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <Check className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <Check className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" />
              <span>Individual configuration</span>
            </li>
          </ul>
          <div className="my-5">
            {product?.size.map((size: any, index: number) => (
              <Button variant="destructive" key={index} className="icon me-2">
                {size}
              </Button>
            ))}
          </div>
          <div className="my-5">
            {product?.color.map((color: any, index: number) => (
              <Button variant="outline" key={index} className="icon me-2">
                {color}
              </Button>
            ))}
          </div>
          <Counter />
          <div className="flex flex-col items-start mt-2 mb-3">
            <span className="text-lg">
              {" "}
              Availability:{" "}
              <span className="ms-2 font-semibold">
                {" "}
                {product?.inStock === true ? "In stock" : "Out Of Stock"}
              </span>
            </span>
            <span className="text-lg">Brand Name : {product?.brand}</span>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-3">
        <h4 className="text-xl font-bold">What's Customar Says</h4>
        {product ? (
          <CustomerReviews item={product} />
        ) : (
          <div>No reviews available.</div>
        )}
      </div>
    </div>
  );
};

export default ProducrsDetails;

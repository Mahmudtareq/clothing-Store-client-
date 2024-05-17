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

const ProducrsDetails = async ({ params }: { params: { id: string } }) => {
  const data: TFlashSaleItem[] = await getProductsMensData();
  const MenWithFlashSale = data.find((item) => item.id === parseInt(params.id));
  console.log(MenWithFlashSale);
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
          <Image src={pic1} alt="products image" />
        </div>
        <div className="lg:col-span-6 col-span-12 gap-4">
          <h4 className="text-xl font-bold mt-2 mb-3">
            {MenWithFlashSale?.name}
          </h4>
          <Rating rating={MenWithFlashSale?.rating!} />
          <span className="text-xl font-extrabold mt-2 mb-3">
            {MenWithFlashSale?.currency ? "$" : "TK"} {MenWithFlashSale?.price}
          </span>
          <p className="text-[15px] font-normal mt-2 mb-3">
            {MenWithFlashSale?.description} Go sporty this summer with this
            vintage navy and white striped v-neck t-shirt from the Nike. Perfect
            for pairing with denim and white kicks for a stylish sporty vibe
          </p>
          <div className="my-5">
            {MenWithFlashSale?.size.map((size, index) => (
              <Button variant="destructive" key={index} className="icon me-2">
                {size}
              </Button>
            ))}
          </div>
          <div className="my-5">
            {MenWithFlashSale?.color.map((color, index) => (
              <Button variant="outline" key={index} className="icon me-2">
                {color}
              </Button>
            ))}
          </div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ProducrsDetails;

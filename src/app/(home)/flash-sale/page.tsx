/* eslint-disable react/no-unescaped-entities */
import FlaseSaleCard from "@/components/flashSale/FlaseSaleCard";
import { getProductsMensData } from "@/data/mensProducts";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import { getAllProductsData } from "@/utils/products";

const FlashSaleHome = async () => {
  // const data: TFlashSaleItem[] = await getProductsMensData();
   const products: TFlashSaleItem[] = await getAllProductsData();
  const MenWithFlashSale: TFlashSaleItem[] = products.filter(
    (item) => item.flashSale === true
  );
  let totalItem = MenWithFlashSale.length;

  return (
    <div className="container mx-auto lg:px-14 my-4">
      <div className="flex flex-col items-start my-5">
        {" "}
        <span className="lg:text-[32px] text-[#3D3D3D] text-[24px]">
          Flash Sale
        </span>
        <span className="text-[16px] font-semibold ">
          Showing 1 - <span> {totalItem}</span> of <span>{totalItem}</span>{" "}
          item(s)
        </span>
        <p className="text-justify text-[15px] font-normal my-3">
          Take advantage of our limited-time flash sale on stylish clothing!
          Save big on Men's Casual Jackets, offering unmatched comfort and style
          at a discounted price. Women's Running Shorts are now 10% off, perfect
          for summer runs and gym workouts. Kids' T-Shirts are on sale,
          providing fun and colorful options for your little ones. Women's
          Winter Coats, with a 20% discount, keep you warm and fashionable
          during cold weather. Don't miss out on these incredible deals – shop
          now and enjoy substantial savings on high-quality, trendy apparel for
          the whole family. Hurry, these offers won't last long
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-8 ">
        {MenWithFlashSale.map((flashItem) => (
          <FlaseSaleCard key={flashItem._id} flashItem={flashItem} />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleHome;

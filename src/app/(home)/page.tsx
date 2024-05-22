import ProductsBrands from "@/components/brands/ProductsBrands";
import FlashSale from "@/components/flashSale/FlashSale";
import PopularProducts from "@/components/popularProducts/PopularProducts";
import RecentViewed from "@/components/recentlyViewed/RecentViewed";
import HeroBanner from "@/components/shared/banner/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="container mx-auto lg:px-14 my-4">
        <FlashSale />
        <ProductsBrands />
        <PopularProducts />
        <RecentViewed />
      </div>
    </>
  );
}

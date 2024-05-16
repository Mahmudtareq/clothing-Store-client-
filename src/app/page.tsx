import FlashSale from "@/components/flashSale/FlashSale";
import PopularProducts from "@/components/popularProducts/PopularProducts";

export default function Home() {
  return (
    <div className="container mx-auto lg:px-14 my-4">
      <FlashSale />
      <PopularProducts />
    </div>
  );
}

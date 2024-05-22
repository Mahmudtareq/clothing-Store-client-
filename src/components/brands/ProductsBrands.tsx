import BrandsCard from "./BrandsCard";
const brands = [
  { name: "Nike" },
  { name: "H&M" },
  { name: "Zara" },
  { name: "Gucci" },
  { name: "Ralph Lauren" },
  { name: "Top Ten" },
];
export type TBrands = {
  name: string;
};
const ProductsBrands = () => {
  return (
    <div className="my-10">
      <div className="text-center mb-5 mt-4">
        <h1 className="text-[28px] font-bold">Featured Brands</h1>
        <p className="my-2 text-[16px] font-semibold">
          Get Your Desired Product from Featured Brands!
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-3">
        {brands.map((item, idx) => (
          <BrandsCard key={idx} brands={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsBrands;

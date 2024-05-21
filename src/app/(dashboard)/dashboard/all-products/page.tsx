import ProductsListTable from "@/components/dashboard/products-list/ProductsListTable";
import { TFlashSaleItem } from "@/types/ProductsTypes";
import { getAllProductsData } from "@/utils/products";
import React from "react";

const AllProductsPage = async () => {
  const products: TFlashSaleItem[] = await getAllProductsData();
  return (
    <div className="relative overflow-x-auto">
      <ProductsListTable products={products} />
    </div>
  );
};

export default AllProductsPage;

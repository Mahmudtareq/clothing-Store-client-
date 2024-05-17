export type TFlashSaleItem = {
  id: number;
  name: string;
  subcategory: string;
  price: number;
  currency: string;
  size: string[];
  color: string[];
  brand: string;
  rating: number;
  new: boolean;
  flashSale: boolean;
  flashSalePercentage: number;
  description: string;
  images: string[];
  inStock: boolean;
  reviews: {
    reviewer: string;
    rating: number;
    comment: string;
  }[];
  createdAt: string;
};

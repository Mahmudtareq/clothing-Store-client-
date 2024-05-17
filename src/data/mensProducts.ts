const Men = [
  {
    id: 1,
    name: "Men's T-Shirt",
    subcategory: "Tops",
    price: 19.99,
    currency: "USD",
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Green"],
    brand: "Urban Style",
    rating: 4.5,
    new: true,
    flashSale: true,
    flashSalePercentage: 10,
    description: "Comfortable cotton t-shirt for men.",
    images: ["https://www.pexels.com/photo/men-s-wear-1155759/"],
    inStock: true,
    reviews: [
      {
        reviewer: "John Doe",
        rating: 5,
        comment: "Great quality and fit!",
      },
      {
        reviewer: "Mark Smith",
        rating: 4,
        comment: "Good value for money.",
      },
    ],
    createdAt: "2024-05-01T10:00:00Z",
  },
  {
    id: 4,
    name: "Men's Jeans",
    subcategory: "Bottoms",
    price: 49.99,
    currency: "USD",
    size: ["S", "M", "L", "XL"],
    color: ["Blue", "Black"],
    brand: "Denim Hub",
    rating: 4.2,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Stylish and comfortable jeans for men.",
    images: ["https://www.pexels.com/photo/men-s-blue-denim-bottoms-1670410/"],
    inStock: true,
    reviews: [
      {
        reviewer: "James White",
        rating: 4,
        comment: "Fits well but a bit expensive.",
      },
    ],
    createdAt: "2024-04-15T14:30:00Z",
  },
  {
    id: 8,
    name: "Men's Polo Shirt",
    subcategory: "Tops",
    price: 24.99,
    currency: "USD",
    size: ["S", "M", "L", "XL"],
    color: ["White", "Navy"],
    brand: "Classic Fit",
    rating: 4.3,
    new: false,
    flashSale: true,
    flashSalePercentage: 10,
    description: "Classic polo shirt for men, suitable for all occasions.",
    images: ["https://www.pexels.com/photo/man-in-white-polo-shirt-1588199/"],
    inStock: true,
    reviews: [
      {
        reviewer: "Luke Brown",
        rating: 4,
        comment: "Nice material but shrinks after wash.",
      },
      {
        reviewer: "Michael Davis",
        rating: 5,
        comment: "Perfect for everyday wear.",
      },
    ],
    createdAt: "2024-04-25T09:00:00Z",
  },
  {
    id: 10,
    name: "Men's Winter Jacket",
    subcategory: "Outerwear",
    price: 99.99,
    currency: "USD",
    size: ["M", "L", "XL"],
    color: ["Black", "Navy"],
    brand: "Winter Guard",
    rating: 4.8,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Heavy-duty winter jacket for men, perfect for cold weather.",
    images: [
      "https://www.pexels.com/photo/man-in-black-jacket-wearing-sunglasses-2414357/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Tom Clark",
        rating: 5,
        comment: "Excellent warmth and quality.",
      },
    ],
    createdAt: "2024-03-20T11:00:00Z",
  },
  {
    id: 13,
    name: "Men's Sweater",
    subcategory: "Tops",
    price: 29.99,
    currency: "USD",
    size: ["S", "M", "L", "XL"],
    color: ["Gray", "Green"],
    brand: "Cozy Wear",
    rating: 4.4,
    new: false,
    flashSale: true,
    flashSalePercentage: 10,
    description: "Warm sweater for men, ideal for cool weather.",
    images: ["https://www.pexels.com/photo/man-wearing-gray-sweater-3052321/"],
    inStock: true,
    reviews: [
      {
        reviewer: "David Johnson",
        rating: 4,
        comment: "Very comfortable but runs a bit large.",
      },
    ],
    createdAt: "2024-02-10T08:00:00Z",
  },
  {
    id: 17,
    name: "Men's Beanie",
    subcategory: "Accessories",
    price: 9.99,
    currency: "USD",
    size: ["One Size"],
    color: ["Black", "Gray"],
    brand: "Winter Guard",
    rating: 4.2,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Warm beanie for men.",
    images: [
      "https://www.pexels.com/photo/man-wearing-gray-knit-cap-and-scarf-1466726/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Chris Martinez",
        rating: 4,
        comment: "Good quality but could be warmer.",
      },
    ],
    createdAt: "2024-01-05T13:00:00Z",
  },
  {
    id: 20,
    name: "Men's Socks",
    subcategory: "Accessories",
    price: 12.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["White", "Black"],
    brand: "Comfort Feet",
    rating: 4.3,
    new: false,
    flashSale: true,
    flashSalePercentage: 5,
    description: "Comfortable and durable socks for men.",
    images: [
      "https://www.pexels.com/photo/person-wearing-brown-boat-shoes-1257085/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Matt Wilson",
        rating: 4,
        comment: "Good socks but a bit pricey.",
      },
    ],
    createdAt: "2024-03-01T12:00:00Z",
  },
  {
    id: 2,
    name: "Women's Floral Dress",
    subcategory: "Dresses",
    price: 39.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Pink", "Yellow"],
    brand: "Elegance",
    rating: 4.8,
    new: true,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Beautiful floral dress for women, perfect for summer.",
    images: [
      "https://www.pexels.com/photo/woman-wearing-floral-dress-1852384/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Emily Davis",
        rating: 5,
        comment: "Absolutely love this dress!",
      },
      {
        reviewer: "Sophia Lopez",
        rating: 4,
        comment: "Great fit but the color is slightly different.",
      },
    ],
    createdAt: "2024-04-10T09:00:00Z",
  },
  {
    id: 5,
    name: "Women's Skirt",
    subcategory: "Bottoms",
    price: 29.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Pink", "White"],
    brand: "Chic Wear",
    rating: 4.7,
    new: true,
    flashSale: true,
    flashSalePercentage: 20,
    description: "Cute and fashionable skirt for women.",
    images: [
      "https://www.pexels.com/photo/person-holding-brown-button-up-skirt-1374123/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Olivia Brown",
        rating: 5,
        comment: "Very stylish and comfortable.",
      },
    ],
    createdAt: "2024-04-20T10:00:00Z",
  },
  {
    id: 7,
    name: "Women's Blazer",
    subcategory: "Outerwear",
    price: 59.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Black", "Gray"],
    brand: "Professional",
    rating: 4.5,
    new: false,
    flashSale: true,
    flashSalePercentage: 15,
    description: "Elegant blazer for women, perfect for office wear.",
    images: [
      "https://www.pexels.com/photo/woman-wearing-gray-notch-lapel-suit-jacket-3730766/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Ava Miller",
        rating: 4,
        comment: "Looks professional but a bit tight on the shoulders.",
      },
    ],
    createdAt: "2024-03-25T11:30:00Z",
  },
  {
    id: 10,
    name: "Women's Leggings",
    subcategory: "Bottoms",
    price: 19.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Black", "Gray"],
    brand: "Active Wear",
    rating: 4.3,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Stretchy leggings for women, great for workouts.",
    images: [
      "https://www.pexels.com/photo/person-wearing-black-leggings-3730694/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Mia Hernandez",
        rating: 5,
        comment: "Perfect for yoga!",
      },
    ],
    createdAt: "2024-02-15T08:00:00Z",
  },
  {
    id: 11,
    name: "Women's Blouse",
    subcategory: "Tops",
    price: 24.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["White", "Blue"],
    brand: "Elegance",
    rating: 4.5,
    new: false,
    flashSale: true,
    flashSalePercentage: 10,
    description: "Elegant blouse for women, suitable for work or casual wear.",
    images: [
      "https://www.pexels.com/photo/woman-in-white-long-sleeve-shirt-and-black-pants-4065245/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Charlotte Lee",
        rating: 4,
        comment: "Nice blouse but a bit sheer.",
      },
    ],
    createdAt: "2024-03-10T09:00:00Z",
  },
  {
    id: 14,
    name: "Women's Denim Jacket",
    subcategory: "Outerwear",
    price: 39.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Blue"],
    brand: "Denim Dreams",
    rating: 4.6,
    new: true,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Stylish denim jacket for women.",
    images: [
      "https://www.pexels.com/photo/photo-of-woman-wearing-denim-jacket-977392/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Isabella Davis",
        rating: 4,
        comment: "Great jacket but runs a bit small.",
      },
    ],
    createdAt: "2024-05-01T10:00:00Z",
  },
  {
    id: 16,
    name: "Women's Pajamas",
    subcategory: "Sleepwear",
    price: 29.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Pink", "Purple"],
    brand: "Sleep Tight",
    rating: 4.7,
    new: true,
    flashSale: true,
    flashSalePercentage: 15,
    description: "Comfortable and cute pajamas for women.",
    images: ["https://www.pexels.com/photo/woman-wearing-pajamas-3768146/"],
    inStock: true,
    reviews: [
      {
        reviewer: "Ella Martinez",
        rating: 5,
        comment: "So comfortable, love the design!",
      },
    ],
    createdAt: "2024-04-25T10:00:00Z",
  },
  {
    id: 18,
    name: "Women's Sneakers",
    subcategory: "Footwear",
    price: 39.99,
    currency: "USD",
    size: ["6", "7", "8", "9"],
    color: ["Black", "White"],
    brand: "Active Wear",
    rating: 4.4,
    new: true,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Comfortable and stylish sneakers for women.",
    images: [
      "https://www.pexels.com/photo/person-wearing-white-sneakers-2529148/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Grace Thompson",
        rating: 4,
        comment: "Great for workouts and daily wear.",
      },
    ],
    createdAt: "2024-05-05T12:00:00Z",
  },
];
const Women = [
  {
    id: 2,
    name: "Women's Floral Dress",
    subcategory: "Dresses",
    price: 39.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Pink", "Yellow"],
    brand: "Elegance",
    rating: 4.8,
    new: true,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Beautiful floral dress for women, perfect for summer.",
    images: [
      "https://www.pexels.com/photo/woman-wearing-floral-dress-1852384/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Emily Davis",
        rating: 5,
        comment: "Absolutely love this dress!",
      },
      {
        reviewer: "Sophia Lopez",
        rating: 4,
        comment: "Great fit but the color is slightly different.",
      },
    ],
    createdAt: "2024-04-10T09:00:00Z",
  },
  {
    id: 5,
    name: "Women's Skirt",
    subcategory: "Bottoms",
    price: 29.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Pink", "White"],
    brand: "Chic Wear",
    rating: 4.7,
    new: true,
    flashSale: true,
    flashSalePercentage: 20,
    description: "Cute and fashionable skirt for women.",
    images: [
      "https://www.pexels.com/photo/person-holding-brown-button-up-skirt-1374123/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Olivia Brown",
        rating: 5,
        comment: "Very stylish and comfortable.",
      },
    ],
    createdAt: "2024-04-20T10:00:00Z",
  },
  {
    id: 7,
    name: "Women's Blazer",
    subcategory: "Outerwear",
    price: 59.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Black", "Gray"],
    brand: "Professional",
    rating: 4.5,
    new: false,
    flashSale: true,
    flashSalePercentage: 15,
    description: "Elegant blazer for women, perfect for office wear.",
    images: [
      "https://www.pexels.com/photo/woman-wearing-gray-notch-lapel-suit-jacket-3730766/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Ava Miller",
        rating: 4,
        comment: "Looks professional but a bit tight on the shoulders.",
      },
    ],
    createdAt: "2024-03-25T11:30:00Z",
  },
  {
    id: 10,
    name: "Women's Leggings",
    subcategory: "Bottoms",
    price: 19.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Black", "Gray"],
    brand: "Active Wear",
    rating: 4.3,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Stretchy leggings for women, great for workouts.",
    images: [
      "https://www.pexels.com/photo/person-wearing-black-leggings-3730694/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Mia Hernandez",
        rating: 5,
        comment: "Perfect for yoga!",
      },
    ],
    createdAt: "2024-02-15T08:00:00Z",
  },
  {
    id: 11,
    name: "Women's Blouse",
    subcategory: "Tops",
    price: 24.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["White", "Blue"],
    brand: "Elegance",
    rating: 4.5,
    new: false,
    flashSale: true,
    flashSalePercentage: 10,
    description: "Elegant blouse for women, suitable for work or casual wear.",
    images: [
      "https://www.pexels.com/photo/woman-in-white-long-sleeve-shirt-and-black-pants-4065245/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Charlotte Lee",
        rating: 4,
        comment: "Nice blouse but a bit sheer.",
      },
    ],
    createdAt: "2024-03-10T09:00:00Z",
  },
  {
    id: 14,
    name: "Women's Denim Jacket",
    subcategory: "Outerwear",
    price: 39.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Blue"],
    brand: "Denim Dreams",
    rating: 4.6,
    new: true,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Stylish denim jacket for women.",
    images: [
      "https://www.pexels.com/photo/photo-of-woman-wearing-denim-jacket-977392/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Isabella Davis",
        rating: 4,
        comment: "Great jacket but runs a bit small.",
      },
    ],
    createdAt: "2024-05-01T10:00:00Z",
  },
  {
    id: 16,
    name: "Women's Pajamas",
    subcategory: "Sleepwear",
    price: 29.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Pink", "Purple"],
    brand: "Sleep Tight",
    rating: 4.7,
    new: true,
    flashSale: true,
    flashSalePercentage: 15,
    description: "Comfortable and cute pajamas for women.",
    images: ["https://www.pexels.com/photo/woman-wearing-pajamas-3768146/"],
    inStock: true,
    reviews: [
      {
        reviewer: "Ella Martinez",
        rating: 5,
        comment: "So comfortable, love the design!",
      },
    ],
    createdAt: "2024-04-25T10:00:00Z",
  },
  {
    id: 18,
    name: "Women's Sneakers",
    subcategory: "Footwear",
    price: 39.99,
    currency: "USD",
    size: ["6", "7", "8", "9"],
    color: ["Black", "White"],
    brand: "Active Wear",
    rating: 4.4,
    new: true,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Comfortable and stylish sneakers for women.",
    images: [
      "https://www.pexels.com/photo/person-wearing-white-sneakers-2529148/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Grace Thompson",
        rating: 4,
        comment: "Great for workouts and daily wear.",
      },
    ],
    createdAt: "2024-05-05T12:00:00Z",
  },
];
const Kids = [
  {
    id: 3,
    name: "Kids' Hoodie",
    subcategory: "Outerwear",
    price: 29.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Gray", "Black"],
    brand: "Cozy Kids",
    rating: 4.6,
    new: false,
    flashSale: true,
    flashSalePercentage: 15,
    description: "Warm and cozy hoodie for kids.",
    images: [
      "https://www.pexels.com/photo/photo-of-a-baby-wearing-a-hoodie-4084078/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Liam Jones",
        rating: 5,
        comment: "My son loves it! Very warm.",
      },
    ],
    createdAt: "2024-02-20T09:00:00Z",
  },
  {
    id: 6,
    name: "Kids' Shorts",
    subcategory: "Bottoms",
    price: 14.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Green", "Gray"],
    brand: "Active Kids",
    rating: 4.4,
    new: false,
    flashSale: true,
    flashSalePercentage: 25,
    description: "Comfortable shorts for kids, great for outdoor activities.",
    images: [
      "https://www.pexels.com/photo/kids-wearing-shorts-and-bathing-suit-1659496/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Noah Wilson",
        rating: 4,
        comment: "Good fit but fades after wash.",
      },
    ],
    createdAt: "2024-01-15T08:00:00Z",
  },
  {
    id: 9,
    name: "Kids' Cardigan",
    subcategory: "Outerwear",
    price: 24.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Red", "Blue"],
    brand: "Cozy Kids",
    rating: 4.5,
    new: true,
    flashSale: true,
    flashSalePercentage: 15,
    description: "Warm and stylish cardigan for kids.",
    images: ["https://www.pexels.com/photo/girl-in-cardigan-1648374/"],
    inStock: true,
    reviews: [
      {
        reviewer: "Ethan Brown",
        rating: 5,
        comment: "Looks adorable on my daughter!",
      },
    ],
    createdAt: "2024-04-05T10:00:00Z",
  },
  {
    id: 12,
    name: "Kids' Raincoat",
    subcategory: "Outerwear",
    price: 19.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Yellow", "Blue"],
    brand: "Rainy Days",
    rating: 4.6,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Waterproof raincoat for kids, perfect for rainy days.",
    images: ["https://www.pexels.com/photo/boy-in-yellow-raincoat-2146920/"],
    inStock: true,
    reviews: [
      {
        reviewer: "Alexander Garcia",
        rating: 5,
        comment: "Keeps my kid dry and happy!",
      },
    ],
    createdAt: "2024-02-25T11:00:00Z",
  },
  {
    id: 15,
    name: "Kids' T-Shirt",
    subcategory: "Tops",
    price: 12.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["White", "Blue"],
    brand: "Cozy Kids",
    rating: 4.5,
    new: true,
    flashSale: true,
    flashSalePercentage: 10,
    description: "Soft cotton t-shirt for kids, available in fun colors.",
    images: [
      "https://www.pexels.com/photo/girl-in-white-t-shirt-and-blue-denim-shorts-1101715/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Lucas Martinez",
        rating: 4,
        comment: "Good quality but a bit thin.",
      },
    ],
    createdAt: "2024-03-15T09:00:00Z",
  },
  {
    id: 19,
    name: "Kids' Sandals",
    subcategory: "Footwear",
    price: 19.99,
    currency: "USD",
    size: ["S", "M", "L"],
    color: ["Red", "Yellow"],
    brand: "Summer Fun",
    rating: 4.3,
    new: false,
    flashSale: false,
    flashSalePercentage: 0,
    description: "Comfortable sandals for kids, great for summer.",
    images: [
      "https://www.pexels.com/photo/child-wearing-pink-sandals-1220030/",
    ],
    inStock: true,
    reviews: [
      {
        reviewer: "Benjamin Lee",
        rating: 4,
        comment: "Good for the beach but not very durable.",
      },
    ],
    createdAt: "2024-02-01T10:00:00Z",
  },
];

export function getProductsMensData() {
  return Men;
}

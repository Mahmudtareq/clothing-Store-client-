"use server";
export async function getAllProductsData() {
  const res = await fetch("https://server-side-ten-mu.vercel.app/products", {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getSingleProductData(id: string) {
  const result = await fetch(
    `https://server-side-ten-mu.vercel.app/products/${id}`
  );
  if (!result.ok) {
    throw new Error("Failed single to fetch data");
  }
  return result.json();
}

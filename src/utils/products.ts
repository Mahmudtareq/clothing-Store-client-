export async function getProductsData() {
  const res = await fetch("");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

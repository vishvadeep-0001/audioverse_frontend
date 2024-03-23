export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:4000/api/v1/products");
    const data = await response.json();
    resolve({ data });
  });
}

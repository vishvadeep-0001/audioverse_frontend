export function getAllProducts(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:4000/api/v1/products", {
        method: "GET",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      resolve({ data });
    });
}
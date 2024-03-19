export function createUser(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:4000/api/v1/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      resolve({ data });
    });
}
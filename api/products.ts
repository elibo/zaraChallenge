const myHeaders = new Headers({
  "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
});

export const getProducts = async (
  limit?: number,
  search?: string,
  offset?: number
) =>
  await (
    await fetch(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products${
        limit ? `?limit=${limit}` : ""
      }${search ? `?search=${search}` : ""}${
        offset ? `?offset=${offset}` : ""
      }`,
      {
        headers: myHeaders,
      }
    )
  ).json();

export const getProduct = async (id: string) =>
  await (
    await fetch(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${id}`,
      {
        headers: myHeaders,
      }
    )
  ).json();

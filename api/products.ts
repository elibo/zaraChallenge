export const getProducts = async (query?: string) =>
  await (
    await fetch(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?${query}`,
      {
        headers: {
          "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
        },
      }
    )
  ).json();

export const getProduct = async (id: string) =>
  await (
    await fetch(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${id}`,
      {
        headers: {
          "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
        },
      }
    )
  ).json();

//x-api-key" : 87909682e6cd74208f41a6ef39fe4191

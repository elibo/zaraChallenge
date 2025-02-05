const myHeaders = new Headers({
  "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
});

export const getProducts = async () =>
  await (
    await fetch(
      `https://prueba-tecnica-api-tienda-moviles.onrender.com/products`,
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
